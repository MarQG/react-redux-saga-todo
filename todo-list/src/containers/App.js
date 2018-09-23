import React from 'react';
import PropTypes from 'prop-types';
import { 
	Grid, 
	Paper, 
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TodoList from '../components/TodoList/TodoList';
import TodoListAddNew from '../components/TodoList/TodoListAddNew.js';
import TodoListDetails from '../components/TodoList/TodoListDetails';

const styles = theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: '#eee',
		height: '100vh'
	},
	
	control:{
		padding: theme.spacing.unit * 2
	},
	paper: {
		height: '100px',
		width: '200px',
		padding: theme.spacing.unit * 3
	}
});

export const App = ({classes}) => (
	<Grid container className={classes.root} spacing={16}>
		<Grid item className={classes.control} xs={12}>
			<Grid container justify="center">
				<Paper className={classes.paper}>
					<h1>To-do List</h1>
				</Paper>
			</Grid>

			<TodoList />
			<TodoListAddNew />
			<TodoListDetails />
		</Grid>
	</Grid>
);

App.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App);