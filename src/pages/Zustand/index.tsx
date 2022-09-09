import { NewTodo } from '../../components/Zustand/NewTodo';
import { Todos } from '../../components/Zustand/Todos';
import { Toolbar } from '../../components/Zustand/Toolbar';

export const Zustand = () => {
	return (
		<main className="todo-main">
			<section className="todo-section">
				<Toolbar title="Zustand" />
				<NewTodo />
				<Todos />
			</section>
		</main>
	);
};
