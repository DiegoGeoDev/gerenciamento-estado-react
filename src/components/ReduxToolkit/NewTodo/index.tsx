import { ChangeEvent, useState } from 'react';

import { useDispatch } from 'react-redux';
import { addTodo } from '../../../stores/reduxToolkit/slices/todoSlice';
import { AppDispatch } from '../../../stores/reduxToolkit/todoStore';

export const NewTodo = () => {
	const dispatch = useDispatch<AppDispatch>();

	const [input, setInput] = useState<string>('');

	const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInput(event.target.value);
	};

	const onAddTodo = () => {
		dispatch(addTodo(input));
		setInput('');
	};

	return (
		<div className="todo-new">
			<input type="text" value={input} onChange={onInputChange} />
			<button onClick={onAddTodo}>Adicionar</button>
		</div>
	);
};
