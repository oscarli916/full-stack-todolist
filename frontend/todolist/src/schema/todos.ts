export interface Todos {
	todos: Todo[];
}

export interface Todo {
	id: string;
	title: string;
	finished: boolean;
	deadline: string;
}
