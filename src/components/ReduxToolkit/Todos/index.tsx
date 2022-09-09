import { useSelector } from 'react-redux';

import { Todo } from '../Todo';

import { RootState } from '../../../stores/reduxToolkit/todoStore';

export const Todos = () => {
	const todos = useSelector((state: RootState) => state.todos);

	return (
		<ul className="todo-list">
			{todos.map(({ id, text }) => (
				<Todo key={id} id={id} text={text} />
			))}
		</ul>
	);
};
