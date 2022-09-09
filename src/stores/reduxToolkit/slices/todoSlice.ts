import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoType } from '../../../types/Todo';

const initialState: TodoType[] = [];

const createTodoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<string>) => {
			const text = action.payload;
			state.push({ id: String(Date.now()), text: text });
		},

		removeTodo: (state, action: PayloadAction<string>) => {
			const todoId = action.payload;
			return state.filter((item) => item.id !== todoId);
		},

		removeAll: (state) => (state = []),
	},
});

export const { addTodo, removeTodo, removeAll } = createTodoSlice.actions;

export default createTodoSlice.reducer;
