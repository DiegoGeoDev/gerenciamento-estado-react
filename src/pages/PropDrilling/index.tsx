import { useState } from 'react';

import { NewTodo } from '../../components/PropDrilling/NewTodo';
import { Todos } from '../../components/PropDrilling/Todos';
import { Toolbar } from '../../components/PropDrilling/Toolbar';

import { TodoType } from '../../types/Todo';

export const PropDrilling = () => {
	const [todos, setTodos] = useState<TodoType[]>([]);

	const addTodo = (text: string) => {
		setTodos([...todos, { id: String(Date.now()), text: text }]);
	};

	const removeTodo = (todoId: string) => {
		setTodos(todos.filter((todo) => todo.id !== todoId));
	};

	const removeAll = () => {
		setTodos([]);
	};

	return (
		<main className="todo-main">
			<section className="todo-section">
				<Toolbar title="Prop Drilling" removeAll={removeAll} />
				<NewTodo addTodo={addTodo} />
				<Todos todos={todos} removeTodo={removeTodo} />
			</section>
		</main>
	);
};
