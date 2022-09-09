import { useDispatch } from 'react-redux';
import { removeAll } from '../../../stores/reduxToolkit/slices/todoSlice';
import { AppDispatch } from '../../../stores/reduxToolkit/todoStore';

type ToolbarProps = {
	title: string;
};

export const Toolbar = ({ title }: ToolbarProps) => {
	const dispatch = useDispatch<AppDispatch>();

	return (
		<div className="todo-toolbar">
			<h1>{title}</h1>
			<button onClick={() => dispatch(removeAll())}>Apagar Tudo</button>
		</div>
	);
};
