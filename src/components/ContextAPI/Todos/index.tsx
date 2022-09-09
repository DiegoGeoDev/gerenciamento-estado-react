import { useTodoStore } from '../../../stores/zustand/todoStore';
import { Todo } from '../Todo';

export const Todos = () => {
	const todos = useTodoStore((state) => state.todos);

	return (
		<ul className="todo-list">
			{todos.map(({ id, text }) => (
				<Todo key={id} id={id} text={text} />
			))}
		</ul>
	);
};
