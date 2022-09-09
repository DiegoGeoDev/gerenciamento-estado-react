import { ChangeEvent, useState } from 'react';

type NewTodoProps = {
	addTodo: (text: string) => void;
};

export const NewTodo = ({ addTodo }: NewTodoProps) => {
	const [input, setInput] = useState<string>('');

	const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInput(event.target.value);
	};

	const onAddTodo = () => {
		if (input === '') return;

		addTodo(input);
		setInput('');
	};

	return (
		<div className="todo-new">
			<input type="text" value={input} onChange={onInputChange} />
			<button onClick={onAddTodo}>Adicionar</button>
		</div>
	);
};
