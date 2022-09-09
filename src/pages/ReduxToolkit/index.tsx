import { Provider } from 'react-redux';

import { NewTodo } from '../../components/ReduxToolkit/NewTodo';
import { Todos } from '../../components/ReduxToolkit/Todos';
import { Toolbar } from '../../components/ReduxToolkit/Toolbar';

import { todoStore } from '../../stores/reduxToolkit/todoStore';

export const ReduxToolkit = () => {
	return (
		<Provider store={todoStore}>
			<main className="todo-main">
				<section className="todo-section">
					<Toolbar title="Redux Toolkit" />
					<NewTodo />
					<Todos />
				</section>
			</main>
		</Provider>
	);
};
