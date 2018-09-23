import { takeLatest } from 'redux-saga/effects';
import { fetchTodosSaga } from './todosSagas';
import actionTypes from '../actions/actionTypes';

export function* watchTodos() {
	yield takeLatest(actionTypes.FETCH_TODOS_START, fetchTodosSaga)
}