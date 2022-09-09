import { StoreApi } from 'zustand';
import { TodoStoreType } from '../../../types/TodoStore';

export const createTodoSlice = (
	set: StoreApi<TodoStoreType>['setState'],
	get: StoreApi<TodoStoreType>['getState']
): TodoStoreType => ({
	todos: [],

	addTodo: (text) =>
		set((state) => ({ todos: [...state.todos, { id: String(Date.now()), text: text }] })),

	removeTodo: (todoId) =>
		set((state) => ({ todos: state.todos.filter((todo) => todo.id !== todoId) })),

	removeAll: () => set((state) => ({ todos: [] })),
});
