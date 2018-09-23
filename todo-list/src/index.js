import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './pages/MainPage';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

const jsx = (
	<Provider store={store}>
		<MainPage />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
