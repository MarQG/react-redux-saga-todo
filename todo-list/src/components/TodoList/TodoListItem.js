import React from 'react';
import PropTypes from 'prop-types';
import { 
	ListItem,
	ListItemText, 
	ListItemSecondaryAction,
	IconButton,
	Checkbox 
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	listItemCompleted: {
		textDecoration: 'line-through',
	}
});

export const TodoListItem = ({todo, classes, handleRemoveTodo, handleToggle}) => (
	<ListItem 
		key={todo.id}
		dense
		button
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
			<Checkbox
				checked={todo.completed}
				onChange={() => {handleToggle(todo.id)}}
				tabIndex={-1}
				disableRipple
			/>
			<IconButton onClick={() => handleRemoveTodo(todo.id)}>
				<Close />
			</IconButton>
		</ListItemSecondaryAction>
	</ListItem>
);

TodoListItem.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TodoListItem);