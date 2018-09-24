import { takeLatest, takeEvery } from 'redux-saga/effects';
import { fetchTodosSaga, addNewTodoSaga } from './todosSagas';
import actions from '../actions/actionTypes';

export function* watchTodos() {
	yield takeLatest(actions.FETCH_TODOS_START, fetchTodosSaga);
	yield takeEvery(actions.ADD_TODO_START, addNewTodoSaga);
}