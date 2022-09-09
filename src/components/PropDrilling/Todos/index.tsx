import { Todo } from '../Todo';

import { TodoType } from '../../../types/Todo';

type TodosProp = {
	todos: TodoType[];
	removeTodo: (todoId: string) => void;
};

export const Todos = ({ todos, removeTodo }: TodosProp) => {
	return (
		<ul className="todo-list">
			{todos.map(({ id, text }) => (
				<Todo key={id} id={id} text={text} removeTodo={removeTodo} />
			))}
		</ul>
	);
};
