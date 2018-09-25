import actions from '../actions/actionTypes';

export default (state = {}, action) => {
	switch(action.type){
		case actions.FETCH_TODOS_FAILED:
			return { message: actions.message };
		case actions.ADD_TODO_FAILED: 
			return { message: actions.message };
		case actions.COMPLETE_TODO_FAILED:
			return { message: actions.message };
		case actions.EDIT_TODO_FAILED: 
			return { message: actions.message };
		case actions.REMOVE_TODO_FAILED:
			return { message: actions.message };
		default:
			return state;
	}
}