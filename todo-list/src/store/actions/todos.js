import actions from './actionTypes';

export const fetchTodos = () => ({
	type: actions.FETCH_TODOS_START
})

export const addTodo = (todo) => ({
	type: actions.ADD_TODO_START,
	todo
});

export const removeTodo = (id) => ({
	type: actions.REMOVE_TODO,
	id
});

export const editTodo = (todo) => ({
	type: actions.EDIT_TODOS,
	id: todo.id,
	updates: todo
});

export const setTodos = (todos) => ({
	type: actions.SET_TODOS,
	todos
});