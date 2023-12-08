from fastapi import FastAPI
from app.routers import task_management

app = FastAPI()

app.include_router(task_management.router)

# @app.get("/")
# def read_root():
#     return {"Hello": "World"}