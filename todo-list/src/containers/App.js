import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
	Grid, 
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TodoList from '../components/TodoList/TodoList';
import TodoListAddNew from '../components/TodoList/TodoListAddNew.js';
import { connect } from 'react-redux';
import { fetchTodos } from '../store/actions/todos';

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

export class App extends Component {



	render(){ 
		return (
		<Grid container className={this.props.classes.root} spacing={16}>
			<Grid item className={this.props.classes.control} xs={12}>
				<TodoListAddNew />
				<TodoList />
			</Grid>
		</Grid>
		);
	}
};

App.propTypes = {
	classes: PropTypes.object.isRequired
}

const mapDispatchToProps = (dispatch) => ({
	fetchTodos: () => dispatch(fetchTodos())
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(App));