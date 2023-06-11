import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import {
	createTodo,
	deleteTodo,
	getTodos,
	updateTodo,
} from "../axios/to-do-list";
import { Todos } from "../schema/todos";
import ToDoTable from "../components/TodoTable";

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	p: 4,
};

const ToDoListPage = () => {
	const [todos, setTodos] = useState<Todos>();
	const [modalOpen, setModalOpen] = useState(false);
	const [newTitle, setNewTitle] = useState("");
	const [newDeadline, setNewDeadline] = useState("");

	const getTodosData = useCallback(async () => {
		const todos = await getTodos();
		setTodos(todos);
	}, []);

	useEffect(() => {
		getTodosData();
	}, [getTodosData]);

	const onSubmitHandler = async () => {
		await createTodo(newTitle, newDeadline);
		getTodosData();
		setModalOpen(false);
	};

	const onCheckedHandler = async (finished: boolean, id: string) => {
		await updateTodo(finished, id);
		getTodosData();
	};

	const onDeleteHandler = async (id: string) => {
		await deleteTodo(id);
		getTodosData();
	};

	return (
		<Box
			justifyContent="center"
			alignItems="center"
			display="flex"
			height="100vh"
			flexDirection="column"
		>
			<Typography variant="h3">To Do List</Typography>

			<Box sx={{ mt: 5 }}>
				<ToDoTable
					todos={todos}
					onCheckedHandler={onCheckedHandler}
					onDeleteHandler={onDeleteHandler}
				/>
			</Box>

			<Button
				variant="contained"
				sx={{ width: 500 }}
				onClick={() => setModalOpen(true)}
			>
				Add Todo
			</Button>
			<Modal open={modalOpen} onClose={() => setModalOpen(false)}>
				<Box sx={style}>
					<TextField
						fullWidth
						label="Title"
						variant="outlined"
						value={newTitle}
						onChange={(
							event: React.ChangeEvent<HTMLInputElement>
						) => {
							setNewTitle(event.target.value);
						}}
						sx={{ mt: 3 }}
					/>
					<TextField
						fullWidth
						label="Deadline"
						variant="outlined"
						value={newDeadline}
						onChange={(
							event: React.ChangeEvent<HTMLInputElement>
						) => {
							setNewDeadline(event.target.value);
						}}
						sx={{ mt: 3 }}
					/>

					<Button fullWidth onClick={onSubmitHandler}>
						Create Todo
					</Button>
				</Box>
			</Modal>
		</Box>
	);
};

export default ToDoListPage;
