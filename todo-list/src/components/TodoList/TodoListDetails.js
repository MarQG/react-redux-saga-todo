import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, TextField, Paper, Typography } from '@material-ui/core';
import { ArrowLeft } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { fetchTodos, editTodo, completeTodo, removeTodo } from '../../store/actions/todos';

const styles = theme => ({
	detailsRoot: {
		flexGrow: 1
	}
});

export class TodoListDetails extends Component {

	state = {
		title: "",
		description: "",
		error: ""
	}
	
	handleBack = () => {
		this.props.history.push("/");
	}

	handleOnChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
		this.props.todo[name] = value;
	}
	
	handleOnCompleted = () => {
		this.props.completeTodo(this.props.todo.id);
	}

	handleCancel = () => {
		const { todo, initialTodo } = this.props;
		this.setState({ ...this.props.initialTodo });
		todo.title = initialTodo.title;
		todo.description = initialTodo.description;
	}

	handleSave = () => {
		const { title, description, completed, id } = this.props.todo;
		let updates = {
			title,
			description,
			completed
		};

		if(updates.title === "" || updates.title.length < 1){
			return this.setState({ error: "Title cannot be empty!"});
		}
		this.props.editTodo(id, updates);
		this.props.history.push("/");
	}

	handleRemove = () => {
		this.props.removeTodo(this.props.todo.id)
		this.props.history.push("/");
	}
	
	render(){
		const { todo, classes, loaded } = this.props;
		return(
				loaded ? 
				<Grid container className={classes.detailsRoot}>
					<Grid item xs={12}>
						<Paper>
							<Grid container className={classes.detailsRoot}>
								<Grid item xs={4}>
									<Button variant="flat" onClick={this.handleBack}>
										<ArrowLeft /> 
										<Typography>Back to List</Typography>
									</Button>
									
								</Grid>
							</Grid>
							<TextField 
								name="title"
								value={todo.title }
								onChange={this.handleOnChange}
							/>
							<Button 
								variant="raised" 
								color="default"
								disabled={todo.completed}
								onClick={() => this.handleOnCompleted(todo.id)}
							>Completed</Button>
							<TextField 
								name="description"
								value={todo.description }
								onChange={this.handleOnChange}
							/>
							<Button 
								variant="raised" 
								color="primary"
								onClick={this.handleSave}
							>Save</Button>
							<Button 
								variant="raised" 
								color="default"
								onClick={this.handleCancel}
							>Cancel</Button>
							<Button 
								variant="raised" 
								color="secondary"
								onClick={this.handleRemove}
							>Remove</Button>
						</Paper>
					</Grid>
				</Grid> : <p>loading...</p>
		);
	}
}

TodoListDetails.propTypes = {
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state, props) => {
	if(state.todos.loaded){
		const currentTodo = state.todos.todos.find((todo) => todo.id === parseInt(props.match.params.id, 10));
		const { title, description, completed } = currentTodo;
		const initialTodo = {
			title: title,
			description: description,
			completed: completed
		};
		return { 
			todo: currentTodo,
			initialTodo: initialTodo,
			loaded: state.todos.loaded 
		}
	}

	return { 
		todo: {},
		initialTodo: {},
		loaded: state.todos.loaded 
	}
};

const mapDispatchToProps = (dispatch) => ({
	fetchTodos: () => dispatch(fetchTodos()),
	editTodo: (id, updates) => dispatch(editTodo(id, updates)),
	completeTodo: (id) => dispatch(completeTodo(id)),
	removeTodo: (id) => dispatch(removeTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TodoListDetails));