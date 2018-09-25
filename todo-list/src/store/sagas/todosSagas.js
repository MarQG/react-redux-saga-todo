import { call, put } from 'redux-saga/effects';
import actions from '../actions/actionTypes';
import API from '../../utils/API';

export function* fetchTodosSaga(action) {
	try {
		const response = yield call(API.fetchTodos);
		const todos = yield response.json();
		yield put({ type: actions.FETCH_TODOS_SUCCEEDED, todos: todos });
	} catch (error) {
		yield put({ type: actions.FETCH_TODOS_FAILED, message: error.message});
	}
};

export function* addNewTodoSaga(action) {
	try {
		const response = yield API.addNewTodo(action.todo);
		const todos = yield response.json();
		yield put({ type: actions.ADD_TODO_SUCCEEDED });
		yield put({ type: actions.FETCH_TODOS_SUCCEEDED, todos: todos });
	} catch (error) {
		yield put({ type: actions.ADD_TODO_FAILED, message: error.message });
	}
};

export function* editTodoSaga(action) {
	try {
		const response = yield API.editTodo(action.id, action.updates);
		const todos = yield response.json();
		yield put({ type: actions.EDIT_TODO_SUCCEEDED });
		yield put({ type: actions.FETCH_TODOS_SUCCEEDED, todos: todos });
	} catch (error) {
		yield put({ type: actions.EDIT_TODO_FAILED, message: error.message });
	}
}

export function* removeTodoSaga(action) {
	try {
		const response = yield API.deleteTodo(action.id)
		const todos = yield response.json();
		yield put({ type: actions.REMOVE_TODO_SUCCEEDED });
		yield put({ type: actions.FETCH_TODOS_SUCCEEDED, todos: todos });
	} catch (error) {
		yield put({ type: actions.REMOVE_TODO_FAILED, message: error.message });
	}
};

export function* completeTodoSaga(action) {
	try {
		const response = yield API.completeTodo(action.id)
		const todos = yield response.json();
		yield put({ type: actions.COMPLETE_TODO_SUCCEEDED });
		yield put({ type: actions.FETCH_TODOS_SUCCEEDED, todos: todos });
	} catch (error) {
		yield put({ type: actions.COMPLETE_TODO_FAILED, message: error.message });
	}
};

