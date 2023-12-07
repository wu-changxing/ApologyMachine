from fastapi import FastAPI
from .routers import chatbot
from app.routers import task_management

app = FastAPI()

app.include_router(chatbot.router)
app.include_router(task_management.router)

