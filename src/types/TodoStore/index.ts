import { TodoType } from '../Todo';

export type TodoStoreType = {
	todos: TodoType[];

	addTodo: (text: string) => void;
	removeTodo: (todoId: string) => void;
	removeAll: () => void;
};
