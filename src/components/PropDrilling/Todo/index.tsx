type TodoProps = {
	id: string;
	text: string;
	removeTodo: (todoId: string) => void;
};

export const Todo = ({ id, text, removeTodo }: TodoProps) => {
	return (
		<li>
			<h2>{text}</h2>
			<button onClick={() => removeTodo(id)}>X</button>
		</li>
	);
};
