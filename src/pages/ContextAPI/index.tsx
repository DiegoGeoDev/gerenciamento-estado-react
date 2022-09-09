import { NewTodo } from '../../components/Zustand/NewTodo';
import { Todos } from '../../components/Zustand/Todos';
import { Toolbar } from '../../components/Zustand/Toolbar';

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
