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

export class TodoList extends PureComponent {
	constructor(props){
		super(props);

	};

	handleToggle = (id) => {
		let updatedTodos = this.state.todos.map(todo => {
			if(todo.id === id){
				todo.completed = !todo.completed
			}
			return todo;
		});
		this.setState({
			todos: updatedTodos
		});
	}

	handleRemoveTodo = (id) => {
		let filteredTodos = this.state.todos.filter(
			todo => todo.id !== id ? true : false
		);

		this.setState({
			todos: filteredTodos
		});
	}
	
	render(){
		return (
			<Grid container  justify="center">
				<List className={this.props.classes.listRoot} >
					{this.props.todos.map(todo => 
						<TodoListItem key={todo.id} todo={todo} handleToggle={this.handleToggle} handleRemoveTodo={this.handleRemoveTodo}/>)}
				</List>
			</Grid>
		);
	}
}

TodoList.propTypes = {
	classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	todos: state.todos
});

export default connect(mapStateToProps, null)(withStyles(styles)(TodoList));
