import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, TextField, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const styles = theme => ({
	detailsRoot: {
		flexGrow: 1
	}
});

export const TodoListDetails = ({classes, todo, match}) => (
	<Grid container className={classes.detailsRoot}>
		<Grid item xs={12}>
			<Paper>
				Todo Details {match.params.id}
				<h1>Testing {todo.title}</h1>
			</Paper>
		</Grid>
	</Grid>
);

TodoListDetails.propTypes = {
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state, props) => ({ 
	todo: state.todos.find((todo) => todo.id === parseInt(props.match.params.id)) 
});

export default connect(mapStateToProps, null)(withStyles(styles)(TodoListDetails));