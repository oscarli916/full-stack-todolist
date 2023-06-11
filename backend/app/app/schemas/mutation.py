from uuid import UUID

import strawberry

from app.resolvers.todo import add_todo, remove_todo, update_todo
from app.types.todo import AddToDo, ToDo


@strawberry.type
class Mutation:
    @strawberry.mutation
    def add_todo(self, todo: AddToDo) -> ToDo:
        return add_todo(todo)

    @strawberry.mutation
    def remove_todo(self, id: UUID) -> ToDo:
        return remove_todo(id)

    @strawberry.mutation
    def update_todo(self, id: UUID, finished: bool) -> ToDo:
        return update_todo(id, finished)
