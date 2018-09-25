import React from 'react';
import PropTypes from 'prop-types';
import { 
	ListItem,
	ListItemText, 
	ListItemSecondaryAction,
	IconButton,
	Button
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { removeTodo, completeTodo } from '../../store/actions/todos';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
	listItemCompleted: {
		textDecoration: 'line-through',
	},
});

export const TodoListItem = ({todo, classes, removeTodo, completeTodo, history }) => (
	<ListItem 
		key={todo.id}
		dense
		button
		onClick={() => { history.push(`/edit/${todo.id}`)}}
		className={classes.ListItem} 
	>	
		<ListItemText 
			className={
				todo.completed ? 
				classes.listItemCompleted 
				: null
				} 
			primary={`${todo.id} : ${todo.title}`}/>
		<ListItemSecondaryAction>
			<Button
				variant="raised"
				color="default"
				size="small"
				disabled={todo.completed}
				tabIndex={-1}
				onClick={() => completeTodo(todo.id)}
			>Completed</Button>
			<IconButton onClick={() => removeTodo(todo.id)}>
				<Close />
			</IconButton>
		</ListItemSecondaryAction>
	</ListItem>
);

TodoListItem.propTypes = {
	classes: PropTypes.object.isRequired
}

const mapDispatchToProps = (dispatch) => ({
	removeTodo: (id) => dispatch(removeTodo(id)),
	completeTodo: (id) => dispatch(completeTodo(id))
})

export default connect(null, mapDispatchToProps)(withStyles(styles)(withRouter(TodoListItem)));