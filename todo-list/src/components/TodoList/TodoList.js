import React, { PureComponent } from 'react';
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

export const TodoList = () => (
	<Grid container  justify="center">
		<List className={this.props.classes.listRoot} >
			{this.props.todos.map(todo => 
				<TodoListItem key={todo.id} todo={todo} handleToggle={this.handleToggle} handleRemoveTodo={this.handleRemoveTodo}/>)}
		</List>
	</Grid>
);

TodoList.propTypes = {
	classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	todos: state.todos
});

export default connect(mapStateToProps, null)(withStyles(styles)(TodoList));
