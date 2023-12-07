# app/routers/task_management.py
from fastapi import APIRouter, HTTPException
from rq import Queue
from redis import Redis
import subprocess

router = APIRouter()

# Set up Redis connection and RQ queue
redis_conn = Redis()
queue = Queue(connection=redis_conn)
@router.post("/process-pdf/", response_model=dict)
async def process_pdf(file_path: str) -> dict:
    """
    Start a background task to process a PDF file.
    """
    job = queue.enqueue(read_pdf_sections, file_path)
    return {"task_id": job.id}

def execute_shell_command(cmd: str) -> str:
    """
    Execute a shell command and return its output.
    """
    try:
        result = subprocess.run(cmd, shell=True, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        return result.stdout
    except subprocess.CalledProcessError as e:
        return f"An error occurred: {e.stderr}"

@router.post("/start-task/", response_model=dict)
async def start_task(cmd: str) -> dict:
    """
    Start a background task to execute a shell command.
    """
    job = queue.enqueue(execute_shell_command, cmd)
    return {"task_id": job.id}

@router.get("/task-status/{task_id}", response_model=dict)
async def get_task_status(task_id: str) -> dict:
    """
    Get the status of a background task.
    """
    job = queue.fetch_job(task_id)
    if job is None:
        raise HTTPException(status_code=404, detail="Task not found")
    return {"task_id": task_id, "status": job.get_status()}

@router.get("/task-result/{task_id}", response_model=dict)
async def get_task_result(task_id: str) -> dict:
    """
    Get the result of a completed background task.
    """
    job = queue.fetch_job(task_id)
    if job is None:
        raise HTTPException(status_code=404, detail="Task not found")
    if job.is_finished:
        return {"task_id": task_id, "result": job.result}
    else:
        return {"task_id": task_id, "status": job.get_status()}
