import { useTodo } from '../../../hooks/contextAPI/useTodo';

type TodoProps = {
	id: string;
	text: string;
};

export const Todo = ({ id, text }: TodoProps) => {
	const { removeTodo } = useTodo();

	return (
		<li>
			<h2>{text}</h2>
			<button onClick={() => removeTodo(id)}>X</button>
		</li>
	);
};
