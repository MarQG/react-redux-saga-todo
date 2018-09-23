import { call, put } from 'redux-saga/effects';
import actionTypes from '../actions/actionTypes';
import API from '../../utils/API';

export function* fetchTodosSaga(action) {
	try {
		const response = yield call(API.fetchTodos);
		const todos = yield response.json();
		yield put({ type: actionTypes.FETCH_TODOS_SUCCEEDED, todos: todos });
	} catch (error) {
		yield put({ type: actionTypes.FETCH_TODOS_FAILED, message: error.message});
	}
}

