import { useTodo } from '../../../hooks/contextAPI/useTodo';

import { Todo } from '../Todo';

export const Todos = () => {
	const { todos } = useTodo();

	return (
		<ul className="todo-list">
			{todos.map(({ id, text }) => (
				<Todo key={id} id={id} text={text} />
			))}
		</ul>
	);
};
