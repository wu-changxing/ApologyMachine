# app/routers/task_management.py
from fastapi import APIRouter, HTTPException
from rq import Queue
from redis import Redis
import subprocess
from starlette.responses import RedirectResponse
from pydantic import BaseModel, EmailStr
from ..core.scan_network import get_wifi_networks
from fastapi import Query
from ..core.flood_email import send_email
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
    
@router.get("/redirect-me")
async def redirect_me():
    target_url = "http://127.0.0.1:3000/"
    return RedirectResponse(url=target_url)

@router.post("/submit-user-data")
async def submit_user_data(user_input: UserInput):
    # print(f"Received user data: {user_input.username}, {user_input.email_address}, {user_input.receiver}, {user_input.receiver_email_address}, {user_input.message}")

    # email formatting
    apology_subject = f" welcome to use Apology Machine  to {user_input.from_user}"
    email_message = user_input.message + f"\nMy sincerest apologies, {user_input.username}"
    
    # job = queue.enqueue(send_email, user_input.receiver_email_address, apology_subject, user_input.message)

    email = send_email(user_input.from_email, apology_subject, email_message)

    # return {"message" : f"Received user data: {user_input.receiver}, {user_input.receiver_email_address}, {user_input.message}"}

    return {"message": email}

    # return {"message": "User data received successfully."}


@router.post("/submit-user-data")
async def submit_user_data(user_input: UserInput):
    # print(f"Received user data: {user_input.username}, {user_input.email_address}, {user_input.receiver}, {user_input.receiver_email_address}, {user_input.message}")

    # email formatting
    apology_subject = f"Apology to {user_input.receiver}"
    email_message = user_input.message + f"\nMy sincerest apologies, {user_input.username}"

    # job = queue.enqueue(send_email, user_input.receiver_email_address, apology_subject, user_input.message)

    email = send_email(user_input.receiver_email_address, apology_subject, email_message)

    # return {"message" : f"Received user data: {user_input.receiver}, {user_input.receiver_email_address}, {user_input.message}"}

    return {"message": email}
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
