from fastapi import FastAPI
from app.routers import task_management
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 允许所有来源
    allow_credentials=True,
    allow_methods=["*"],  # 允许所有方法
    allow_headers=["*"],  # 允许所有头部
)

app.include_router(task_management.router)
# @app.get("/")
# def read_root():
#     return {"Hello": "World"}