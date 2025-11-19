import {
	Box,
	Button,
	Checkbox,
	Chip,
	Container,
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Paper,
	TextField,
	Typography,
} from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/todo/")({
	component: RouteComponent,
});

interface Todo {
	id: number;
	text: string;
	completed: boolean;
	createdAt: Date;
}

function RouteComponent() {
	const [todos, setTodos] = useState<Todo[]>([
		{
			id: 1,
			text: "Meet with fixers at Afterlife",
			completed: false,
			createdAt: new Date(),
		},
		{
			id: 2,
			text: "Upgrade cyberware at Ripperdoc",
			completed: true,
			createdAt: new Date(),
		},
		{
			id: 3,
			text: "Collect payment from Viktor",
			completed: false,
			createdAt: new Date(),
		},
		{
			id: 4,
			text: "Investigate Arasaka data breach",
			completed: false,
			createdAt: new Date(),
		},
		{
			id: 5,
			text: "Secure netrunner gear from Kabuki Market",
			completed: true,
			createdAt: new Date(),
		},
	]);
	const [inputValue, setInputValue] = useState("");

	const handleAddTodo = () => {
		if (inputValue.trim() === "") return;

		const newTodo: Todo = {
			id: Date.now(),
			text: inputValue.trim(),
			completed: false,
			createdAt: new Date(),
		};

		setTodos([newTodo, ...todos]);
		setInputValue("");
	};

	const handleToggleTodo = (id: number) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo,
			),
		);
	};

	const handleDeleteTodo = (id: number) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			handleAddTodo();
		}
	};

	const completedCount = todos.filter((todo) => todo.completed).length;
	const activeCount = todos.length - completedCount;

	return (
		<Box className="py-4 px-4 sm:py-8 sm:px-6">
			<Container maxWidth="md" className="px-0">
				<div className="mb-6 sm:mb-8">
					<Typography
						variant="h2"
						component="h1"
						color="primary"
						sx={{
							textShadow: "0 0 20px rgba(252, 227, 0, 0.3)",
						}}
						className="mb-1 text-3xl sm:text-4xl md:text-5xl"
					>
						Night City Tasks
					</Typography>
					<Typography variant="body1" color="text.secondary">
						Keep track of your missions in the dark future
					</Typography>
				</div>

				<Paper
					elevation={3}
					sx={{
						boxShadow: "0 0 20px rgba(0, 240, 255, 0.1)",
					}}
					className="p-4 sm:p-6"
				>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-y-3 sm:gap-x-4 mb-4 sm:mb-6">
						<TextField
							fullWidth
							variant="outlined"
							placeholder="What needs to be done?"
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
							onKeyUp={handleKeyPress}
							size="small"
							sx={{
								"& .MuiOutlinedInput-root": {
									"&:hover fieldset": {
										borderColor: "primary.main",
									},
									"&.Mui-focused fieldset": {
										borderColor: "primary.main",
									},
								},
							}}
							className="col-span-2"
						/>
						<Button
							variant="contained"
							onClick={handleAddTodo}
							startIcon={<Plus size={18} />}
							fullWidth
							sx={{
								boxShadow: "0 0 10px rgba(252, 227, 0, 0.3)",
								"&:hover": {
									boxShadow: "0 0 20px rgba(252, 227, 0, 0.5)",
								},
							}}
						>
							Add
						</Button>
					</div>

					<div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
						<Chip
							label={`${activeCount} Active`}
							color="secondary"
							size="small"
						/>
						<Chip
							label={`${completedCount} Completed`}
							color="success"
							size="small"
							className="font-bold"
						/>
					</div>

					<Divider className="my-3 sm:my-4" />

					{todos.length === 0 ? (
						<div className="text-center py-8 sm:py-12">
							<Typography
								variant="body1"
								color="text.secondary"
								className="text-sm sm:text-base"
							>
								No tasks yet. Add your first mission above!
							</Typography>
						</div>
					) : (
						<List className="p-0 -mx-2 sm:mx-0">
							{todos.map((todo) => (
								<ListItem
									key={todo.id}
									disablePadding
									className="mb-1 sm:mb-2 rounded transition-all"
									sx={{
										bgcolor: todo.completed ? "action.hover" : "transparent",
										"&:hover": {
											bgcolor: "action.hover",
										},
									}}
									secondaryAction={
										<IconButton
											edge="end"
											onClick={() => handleDeleteTodo(todo.id)}
											size="small"
											sx={{
												color: "error.main",
												"&:hover": {
													bgcolor: "error.main",
													color: "white",
												},
											}}
											className="mr-1 sm:mr-0"
										>
											<Trash2 size={16} className="sm:w-[18px] sm:h-[18px]" />
										</IconButton>
									}
								>
									<ListItemButton className="rounded py-2 sm:py-3">
										<Checkbox
											checked={todo.completed}
											onClick={() => handleToggleTodo(todo.id)}
											size="small"
											sx={{
												color: "primary.main",
												"&.Mui-checked": {
													color: "success.main",
												},
											}}
											className="p-1 sm:p-2"
										/>
										<ListItemText
											primary={todo.text}
											slotProps={{
												primary: {
													className: todo.completed
														? "line-through font-normal text-sm sm:text-base"
														: "font-medium text-sm sm:text-base",
													color: todo.completed
														? "text.secondary"
														: "text.primary",
												},
											}}
										/>
									</ListItemButton>
								</ListItem>
							))}
						</List>
					)}
				</Paper>

				{todos.length > 0 && (
					<div className="mt-3 sm:mt-4 text-center">
						<Button
							variant="outlined"
							color="error"
							size="small"
							onClick={() => setTodos([])}
							sx={{
								"&:hover": {
									bgcolor: "error.main",
									color: "white",
								},
							}}
						>
							Clear All Tasks
						</Button>
					</div>
				)}
			</Container>
		</Box>
	);
}
