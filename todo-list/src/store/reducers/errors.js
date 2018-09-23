import actions from '../actions/actionTypes';

export default (state = {}, action) => {
	switch(action.type){
		case actions.FETCH_TODOS_FAILED:
			return actions.message;
		default:
			return state;
	}
}