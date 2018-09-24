import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { fetchTodos } from './store/actions/todos';
import AppRouter from './router/AppRouter';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

const renderApp = async () => {
	await store.dispatch(fetchTodos());
	const jsx = (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
	ReactDOM.render(jsx, document.getElementById('root'));
}


ReactDOM.render(<p>loading...</p>, document.getElementById('root'));
registerServiceWorker();

renderApp();