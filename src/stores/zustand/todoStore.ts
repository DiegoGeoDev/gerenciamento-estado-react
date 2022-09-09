import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { TodoStoreType } from '../../types/TodoStore';
import { createTodoSlice } from './slices/createTodoSlice';

export const useTodoStore = create<TodoStoreType>()(
	devtools(
		persist(
			(set, get) => ({
				...createTodoSlice(set, get),
			}),
			{
				name: 'todo-zustand',
				getStorage: () => sessionStorage,
			}
		)
	)
);
