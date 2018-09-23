import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import App from '../containers/App';
import TodoListDetails from '../components/TodoList/TodoListDetails';

export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
		<Switch>
			<Route exact={true} path="/" component={App} />
			<Route path="/edit/:id" component={TodoListDetails} />
			<Redirect path="*" to="/"/>
		</Switch>
	</Router>
);

export default AppRouter;