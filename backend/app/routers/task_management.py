# app/routers/task_management.py
from fastapi import APIRouter, HTTPException
from rq import Queue
from redis import Redis
import subprocess
from starlette.responses import RedirectResponse
from pydantic import BaseModel, EmailStr
from ..core.scan_network import get_wifi_networks
from fastapi import Query
from ..core.flood_email import send_email, flood_email
from core import flood_wifi_AP

router = APIRouter()

# Set up Redis connection and RQ queue
redis_conn = Redis()
queue = Queue(connection=redis_conn)

class UserInput(BaseModel):
    username: str
    email_address: EmailStr
    receiver: str
    receiver_email_address: EmailStr
    message: str
    strategy: str
    
@router.get("/redirect-me")
async def redirect_me():
    target_url = "http://127.0.0.1:3000/"
    return RedirectResponse(url=target_url)

# welcome message to user
@router.post("/submit-user-data")
async def submit_user_data(user_input: UserInput):
    # print(f"Received user data: {user_input.username}, {user_input.email_address}, {user_input.receiver}, {user_input.receiver_email_address}, {user_input.message}")

    # Email the user a welcome message
    apology_subject = f" Welcome to the Apology Machine, {user_input.username}"
    
    job = queue.enqueue(send_email, user_input.receiver_email_address, apology_subject, user_input.message)

    return {"message": "User data received successfully", "job_id": job.get_id()}

# Send apology to receiver if user clicks <<No worries>>
@router.post("/submit-user-data-2")
async def submit_user_data(user_input: UserInput):
    # print(f"Received user data: {user_input.username}, {user_input.email_address}, {user_input.receiver}, {user_input.receiver_email_address}, {user_input.message}")

    # Apology format
    apology_subject = f"Apology to {user_input.receiver}"
    email_message = user_input.message + f"\nMy sincerest apologies, {user_input.username}"
    
    job = queue.enqueue(send_email, user_input.receiver_email_address, apology_subject, email_message)

    return {"message": "User data received successfully", "job_id": job.get_id()}


# floods user if user clicks <<HOW ARE YOU!>>
@router.post("/flood")
async def flood_user(user_input: UserInput):
    # print(f"Received user data: {user_input.username}, {user_input.email_address}, {user_input.receiver}, {user_input.receiver_email_address}, {user_input.message}")

    # email formatting
    apology_subject = f"Apologise now"
    email_message = f"You better better apologise to them, {user_input.username} >:("

    # use own email to flood themselves
    job = queue.enqueue(flood_email, user_input.email_address, apology_subject, email_message)

    return {"message": "Email flood task started", "job_id": job.get_id()}

# we URL
# scan wifi
@router.get("/scan", response_model=dict)
async def begin_scan(page: int = Query(1, alias="page"), pageSize: int = Query(10, alias="pageSize")) -> dict:
    all_networks = get_wifi_networks()
    start = (page - 1) * pageSize
    end = start + pageSize
    network = all_networks[start:end]
    return {"network": network}
@router.post("/flood-essid")
async def flood_essid(essids: str):
    # Split the long string into a list of sentences
    sentences = [essids]  # In this case, it's just one long sentence
    # Enqueue the flood_wifi_AP task with the sentences
    job = queue.enqueue(flood_wifi_AP, sentences)

    return {"message": "ESSID flood task started", "job_id": job.get_id()}
