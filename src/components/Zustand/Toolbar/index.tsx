import { useTodoStore } from '../../../stores/zustand/todoStore';

type ToolbarProps = {
	title: string;
};

export const Toolbar = ({ title }: ToolbarProps) => {
	const removeAll = useTodoStore((state) => state.removeAll);

	return (
		<div className="todo-toolbar">
			<h1>{title}</h1>
			<button onClick={removeAll}>Apagar Tudo</button>
		</div>
	);
};
