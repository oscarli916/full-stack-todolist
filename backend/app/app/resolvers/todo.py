from uuid import UUID

from app.crud.todo import crud_todo
from app.db.session import SessionLocal
from app.types.todo import AddToDo, ToDo


def get_todos() -> list[ToDo]:
    db = SessionLocal()
    todos = crud_todo.get_all_todos(db)
    db.close()
    return todos


def add_todo(todo: AddToDo) -> ToDo:
    db = SessionLocal()
    todo = crud_todo.create_todo(db, todo)
    db.close()
    return todo


def update_todo(id: UUID, finished: bool) -> ToDo:
    db = SessionLocal()
    todo = crud_todo.update_todo(db, todo_id=id, finished=finished)
    db.close()
    return todo


def remove_todo(id: UUID) -> ToDo:
    db = SessionLocal()
    todo = crud_todo.delete_todo(db, todo_id=id)
    db.close()
    return todo
