import strawberry

from app.resolvers.todo import get_todos
from app.types.todo import ToDo


@strawberry.type
class Query:
    todos: list[ToDo] = strawberry.field(resolver=get_todos)
