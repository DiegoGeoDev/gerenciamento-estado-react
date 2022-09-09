import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todoSlice';

export const todoStore = configureStore({
	reducer: {
		todos: todoReducer,
	},
});

export type AppDispatch = typeof todoStore.dispatch;
export type RootState = ReturnType<typeof todoStore.getState>;
