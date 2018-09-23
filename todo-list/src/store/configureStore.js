import { createStore, combineReducers, compose } from 'redux';
import todosReducer from '../reducers/todos';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
	const store = createStore(
		combineReducers({
			todos: todosReducer
		})
		, composeEnhancers()
	);
	return store;
}
