import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Input, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	addNewRoot: {
		flexGrow: 1
	}
});

export const TodoListAddNew = () => (
	<Grid container className={classes.addNewRoot}>
		<Grid item xs={12}>
			<Paper>
				Add New Todo
				<h1>{props.todo}</h1>
			</Paper>
		</Grid>
	</Grid>
);

TodoListAddNew.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TodoListAddNew);