import {
	TableContainer,
	Paper,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Checkbox,
	IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Todos } from "../schema/todos";
import _ from "lodash";

interface IToDoTable {
	todos: Todos | undefined;
	onCheckedHandler: (finished: boolean, id: string) => Promise<void>;
	onDeleteHandler: (id: string) => Promise<void>;
}

const ToDoTable = ({
	todos,
	onCheckedHandler,
	onDeleteHandler,
}: IToDoTable) => (
	<TableContainer component={Paper} sx={{ width: 500 }}>
		<Table>
			<TableHead>
				<TableRow>
					<TableCell align="center">Title</TableCell>
					<TableCell align="center">Finished</TableCell>
					<TableCell align="center">Deadline</TableCell>
					<TableCell align="center">Delete</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{!_.isEmpty(todos) &&
					todos.todos.map((todo) => (
						<TableRow key={todo.id}>
							<TableCell align="center">{todo.title}</TableCell>
							<TableCell align="center">
								<Checkbox
									checked={todo.finished}
									onChange={() =>
										onCheckedHandler(
											!todo.finished,
											todo.id
										)
									}
									inputProps={{
										"aria-label": "controlled",
									}}
								/>
							</TableCell>
							<TableCell align="center">
								{todo.deadline}
							</TableCell>
							<TableCell align="center">
								<IconButton
									onClick={() => onDeleteHandler(todo.id)}
								>
									<DeleteIcon />
								</IconButton>
							</TableCell>
						</TableRow>
					))}
			</TableBody>
		</Table>
	</TableContainer>
);

export default ToDoTable;
