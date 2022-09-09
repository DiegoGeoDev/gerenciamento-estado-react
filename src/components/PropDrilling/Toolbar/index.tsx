type ToolbarProps = {
	title: string;
	removeAll: () => void;
};

export const Toolbar = ({ title, removeAll }: ToolbarProps) => {
	return (
		<div className="todo-toolbar">
			<h1>{title}</h1>
			<button onClick={removeAll}>Apagar Tudo</button>
		</div>
	);
};
