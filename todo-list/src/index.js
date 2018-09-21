import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './pages/MainPage';

import registerServiceWorker from './registerServiceWorker';

const jsx = (
	<MainPage />
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
