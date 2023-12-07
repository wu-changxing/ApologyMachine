from concurrent.futures import ThreadPoolExecutor, Future
import threading
from typing import Callable, Any, Dict

class TaskManager:
    def __init__(self, max_workers: int = 3):
        self.executor = ThreadPoolExecutor(max_workers=max_workers)
        self.tasks = {}  # Stores task_id to Future mapping
        self.lock = threading.Lock()

    def submit_task(self, func: Callable, *args, **kwargs) -> int:
        with self.lock:
            future = self.executor.submit(func, *args, **kwargs)
            task_id = id(future)
            self.tasks[task_id] = future
            return task_id

    def get_task_status(self, task_id: int) -> str:
        with self.lock:
            future = self.tasks.get(task_id)
            if future is None:
                return "No such task"
            return "completed" if future.done() else "in progress"

    def get_task_result(self, task_id: int) -> Any:
        with self.lock:
            future = self.tasks.get(task_id)
            if future is None:
                return None
            if future.done():
                return future.result()
            return None

    def cleanup(self):
        """
        Cleanup method to close the ThreadPoolExecutor.
        Call this before your application exits.
        """
        self.executor.shutdown(wait=False)
