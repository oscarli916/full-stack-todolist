import axios from "axios";
import { Todos } from "../../schema/todos";

const ToDoListAxiosInstance = axios.create({
	baseURL: process.env.REACT_APP_GRAPHQL_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

export const getTodos = async (): Promise<Todos> => {
	try {
		const data = JSON.stringify({
			query: `query{
              todos{
                  id
                  title
                  finished
                  deadline
              }
          }`,
			variables: {},
		});
		const res = await ToDoListAxiosInstance.post("", data);
		const todos: Todos = res.data.data;
		return todos;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error({ error: error.message });
		}
		return {} as Todos;
	}
};

export const createTodo = async (
	title: string,
	deadline: string
): Promise<void> => {
	try {
		const data = JSON.stringify({
			query: `mutation($title: String!, $deadline: Date!){
              addTodo(todo: {title: $title, deadline: $deadline}){
                  id
                  title
                  finished
                  deadline
              }
          }`,
			variables: { title, deadline },
		});
		await ToDoListAxiosInstance.post("", data);
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error({ error: error.message });
		}
	}
};

export const updateTodo = async (finished: boolean, id: string) => {
	try {
		const data = JSON.stringify({
			query: `mutation($finished: Boolean!, $id: UUID!){
			  updateTodo(id: $id, finished: $finished){
				  id
				  title
				  finished
				  deadline
			  }
		  }`,
			variables: { finished, id },
		});
		await ToDoListAxiosInstance.post("", data);
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error({ error: error.message });
		}
	}
};

export const deleteTodo = async (id: string) => {
	try {
		const data = JSON.stringify({
			query: `mutation($id: UUID!){
			  removeTodo(id: $id){
				  id
				  title
				  finished
				  deadline
			  }
		  }`,
			variables: { id },
		});
		await ToDoListAxiosInstance.post("", data);
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error({ error: error.message });
		}
	}
};
