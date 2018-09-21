import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Grid, 
	List, 
	ListItem, 
	ListItemText, 
	ListItemSecondaryAction,
	IconButton,
	Checkbox
 } from '@material-ui/core';
import {
	Close
} from '@material-ui/icons';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	listRoot:{
		flexGrow: 1,
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
});

export class TodoList extends Component {
	constructor(props){
		super(props);
		this.state = {
			todos: [
				{
					id: 1,
					title: "Test1",
					completed: false
				},
				{
					id: 2,
					title: "Test2",
					completed: false
				},
				{
					id: 3,
					title: "Test3",
					completed: false
				}
			]
		}
	};

	handleToggle = (id) => {
		let updatedTodos = this.state.todos.map(todo => {
			if(todo.id === id){
				todo.completed = !todo.completed
			}
			return todo;
		});
		console.log(updatedTodos);
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
					{this.state.todos.map(todo => 
						<ListItem 
							key={todo.id}
							dense
							button
							className={this.props.classes.ListItem} 
						>	
							<ListItemText primary={`${todo.id} : ${todo.title}`}/>
							<ListItemSecondaryAction>
								<Checkbox
									checked={todo.completed}
									onChange={() => {this.handleToggle(todo.id)}}
									tabIndex={-1}
									disableRipple
								/>
								<IconButton onClick={() => this.handleRemoveTodo(todo.id)}>
									<Close />
								</IconButton>
							</ListItemSecondaryAction>
						</ListItem>)}
				</List>
			</Grid>
		);
	}
}

TodoList.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TodoList);
