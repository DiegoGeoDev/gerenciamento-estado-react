import { NewTodo } from '../../components/ContextAPI/NewTodo';
import { Todos } from '../../components/ContextAPI/Todos';
import { Toolbar } from '../../components/ContextAPI/Toolbar';

import { TodoProvider } from '../../hooks/contextAPI/useTodo';

export const ContextAPI = () => {
	return (
		<TodoProvider>
			<main className="todo-main">
				<section className="todo-section">
					<Toolbar title="Context API" />
					<NewTodo />
					<Todos />
				</section>
			</main>
		</TodoProvider>
	);
};
