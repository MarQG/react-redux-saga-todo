import { takeEvery } from 'redux-saga/effects';
import { fetchTodosSaga, addNewTodoSaga, editTodoSaga, removeTodoSaga, completeTodoSaga } from './todosSagas';
import actions from '../actions/actionTypes';

export function* watchTodos() {
	yield takeEvery(actions.FETCH_TODOS_START, fetchTodosSaga);
	yield takeEvery(actions.ADD_TODO_START, addNewTodoSaga);
	yield takeEvery(actions.EDIT_TODO_START, editTodoSaga);
	yield takeEvery(actions.REMOVE_TODO_START, removeTodoSaga);
	yield takeEvery(actions.COMPLETE_TODO_START, completeTodoSaga);
}