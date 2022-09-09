import { ChangeEvent, useState } from 'react';
import { useTodoStore } from '../../../stores/zustand/todoStore';

export const NewTodo = () => {
	const addTodo = useTodoStore((state) => state.addTodo);

	const [input, setInput] = useState<string>('');

	const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInput(event.target.value);
	};

	const onAddTodo = () => {
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
