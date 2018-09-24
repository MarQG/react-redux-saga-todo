import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, TextField, Paper, IconButton } from '@material-ui/core';
import { ArrowLeft } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { fetchTodos } from '../../store/actions/todos';

const styles = theme => ({
	detailsRoot: {
		flexGrow: 1
	}
});

export class TodoListDetails extends Component {
	state = {
		title: "",
		description: "" ,
		completed: false,
	}

	handleBack = () => {
		this.props.history.push("/");
	}

	handleOnChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]:value });
		this.props.todo[name] = value;
	} 
	
	render(){
	return(
			this.props.loaded ? 
			<Grid container className={this.props.classes.detailsRoot}>
				<Grid item xs={12}>
					<Paper>
						<Grid container className={this.props.classes.detailsRoot}>
							<Grid item xs={4}>
								<IconButton onClick={this.handleBack}>
									<ArrowLeft />
								</IconButton>
							</Grid>
						</Grid>
						<TextField 
							name="title"
							value={this.props.todo.title}
							onChange={this.handleOnChange}
						/>
						<TextField 
							name="description"
							value={this.props.todo.description}
							onChange={this.handleOnChange}
						/>
						Todo Details {this.props.match.params.id}
						<h1>Testing {this.props.todo.title}</h1>
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
		const currentTodo = state.todos.todos.find((todo) => todo.id === parseInt(props.match.params.id));
		console.log(currentTodo);
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
	fetchTodos: () => dispatch(fetchTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TodoListDetails));