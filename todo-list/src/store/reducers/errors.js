import actions from '../actions/actionTypes';

export default (state = {}, action) => {
	switch(action.type){
		case actions.FETCH_TODOS_FAILED:
			return { message: actions.message };
		default:
			return state;
	}
}