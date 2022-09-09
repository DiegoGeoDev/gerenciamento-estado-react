import { useTodoStore } from '../../../stores/zustand/todoStore';

type TodoProps = {
	id: string;
	text: string;
};

export const Todo = ({ id, text }: TodoProps) => {
	const removeTodo = useTodoStore((state) => state.removeTodo);

	return (
		<li>
			<h2>{text}</h2>
			<button onClick={() => removeTodo(id)}>X</button>
		</li>
	);
};
