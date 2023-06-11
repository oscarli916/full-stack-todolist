from datetime import date
from uuid import UUID

import strawberry


@strawberry.type
class ToDo:
    id: UUID
    title: str
    finished: bool
    deadline: date


@strawberry.input
class AddToDo:
    title: str = strawberry.field(description="The title of the ToDo")
    deadline: date = strawberry.field(description="The deadline of the ToDo")
