import { useTodo } from '../../../hooks/contextAPI/useTodo';

type ToolbarProps = {
	title: string;
};

export const Toolbar = ({ title }: ToolbarProps) => {
	const { removeAll } = useTodo();

	return (
		<div className="todo-toolbar">
			<h1>{title}</h1>
			<button onClick={removeAll}>Apagar Tudo</button>
		</div>
	);
};
