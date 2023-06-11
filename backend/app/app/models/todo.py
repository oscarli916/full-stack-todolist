from datetime import date

from sqlalchemy import UUID, text
from sqlalchemy.orm import Mapped, mapped_column

from app.models import Base


class ToDo(Base):
    __tablename__ = "todo"

    id = mapped_column(
        UUID(as_uuid=True), primary_key=True, server_default=text("gen_random_uuid()")
    )
    title: Mapped[str]
    finished: Mapped[bool]
    deadline: Mapped[date]
