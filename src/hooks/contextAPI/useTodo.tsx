import { createContext, ReactNode, useContext, useState } from 'react';

import { TodoType } from '../../types/Todo';

type TodoProviderProps = {
	children: ReactNode;
};

type TodoContextData = {
	todos: TodoType[];

	addTodo: (text: string) => void;
	removeTodo: (todoId: string) => void;
	removeAll: () => void;
};

const TodoContext = createContext<TodoContextData>({} as TodoContextData);

export function TodoProvider({ children }: TodoProviderProps) {
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
		<TodoContext.Provider value={{ todos, addTodo, removeTodo, removeAll }}>
			{children}
		</TodoContext.Provider>
	);
}

export function useTodo() {
	const context = useContext(TodoContext);

	return context;
}
