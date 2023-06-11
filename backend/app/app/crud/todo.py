from uuid import UUID

from sqlalchemy.orm import Session

from app.models.todo import ToDo
from app.types.todo import AddToDo


class CRUDToDo:
    def __init__(self) -> None:
        pass

    def create_todo(self, db: Session, todo: AddToDo) -> ToDo:
        db_obj = ToDo(title=todo.title, deadline=todo.deadline, finished=False)
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def get_all_todos(self, db: Session) -> list[ToDo]:
        return db.query(ToDo).all()

    def update_todo(self, db: Session, todo_id: UUID, finished: bool) -> ToDo:
        db_obj = db.query(ToDo).filter(ToDo.id == todo_id).first()
        db_obj.finished = finished
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def delete_todo(self, db: Session, todo_id: UUID) -> ToDo:
        todo = db.query(ToDo).filter(ToDo.id == todo_id)
        db_obj = todo.first()
        todo.delete()
        db.commit()
        return db_obj


crud_todo = CRUDToDo()
