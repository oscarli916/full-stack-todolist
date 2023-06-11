import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ToDoListPage from "./pages/ToDoListPage";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route path="" element={<ToDoListPage />} />
		</Routes>
	);
}

export default App;
