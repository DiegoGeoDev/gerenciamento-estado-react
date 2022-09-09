import { useDispatch } from 'react-redux';
import { removeTodo } from '../../../stores/reduxToolkit/slices/todoSlice';
import { AppDispatch } from '../../../stores/reduxToolkit/todoStore';

type TodoProps = {
	id: string;
	text: string;
};

export const Todo = ({ id, text }: TodoProps) => {
	const dispatch = useDispatch<AppDispatch>();

	return (
		<li>
			<h2>{text}</h2>
			<button onClick={() => dispatch(removeTodo(id))}>X</button>
		</li>
	);
};
