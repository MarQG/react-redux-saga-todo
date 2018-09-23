import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, TextField, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	detailsRoot: {
		flexGrow: 1
	}
});

export const TodoListDetails = ({classes}) => (
	<Grid container className={classes.detailsRoot}>
		<Grid item xs={12}>
			<Paper>
				Todo Details
				<h1>Testing Todo</h1>
			</Paper>
		</Grid>
	</Grid>
);

TodoListDetails.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TodoListDetails);