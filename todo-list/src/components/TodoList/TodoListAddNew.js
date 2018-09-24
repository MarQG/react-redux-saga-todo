import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, TextField, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { addTodo } from '../../store/actions/todos';

const styles = theme => ({
	addNewRoot: {
		flexGrow: 1
	}
});

export class TodoListAddNew extends Component {
	state = {
		title: "",
		description: "",
		completed: false
	}

	handleOnChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	}

	handleSubmitTodo = () => {
		if(this.state.title === "" || this.state.title.length < 3){
			console.log("Title is required for the todo");
		} else {
			this.props.addTodo(this.state);
			this.setState({title: ""});
		}
	}

	render(){
		return(
			<Grid container className={this.props.classes.addNewRoot}>
				<Grid item xs={12}>
					<Paper>
						Add New Todo
						<TextField 
							name="title"
							value={this.state.title}
							margin="normal"
							onChange={this.handleOnChange}
						/>
						<Button 
							color="primary" 
							variant="raised"
							onClick={this.handleSubmitTodo}
						>Add Todo</Button>
					</Paper>
				</Grid>
			</Grid>
		);
	}
}

TodoListAddNew.propTypes = {
	classes: PropTypes.object.isRequired
}


const mapDispatchToProps = (dispatch) => ({
	addTodo: (todo) => dispatch(addTodo(todo))
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(TodoListAddNew));