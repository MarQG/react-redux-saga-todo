import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

const jsx = (
	<h1>App</h1>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
