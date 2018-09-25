import React from 'react';
import PropTypes from 'prop-types';
import {
	Grid, 
	List, 
 } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TodoListItem from './TodoListItem';
import { connect } from 'react-redux';

const styles = theme => ({
	listRoot:{
		flexGrow: 1,
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	}
});

export const TodoList = ({classes, todos}) => (
	<Grid container  justify="center">
		<List className={classes.listRoot} >
			{todos.map(todo => 
				<TodoListItem key={todo.id} todo={todo}/>)}
		</List>
	</Grid>
);

TodoList.propTypes = {
	classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	todos: state.todos.todos
});

export default connect(mapStateToProps, null)(withStyles(styles)(TodoList));
