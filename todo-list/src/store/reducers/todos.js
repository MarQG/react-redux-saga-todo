import actions from '../actions/actionTypes';

export default (state = [], action) => {
	switch(action.type){
		case actions.FETCH_TODOS_SUCCEEDED:
			return action.todos;
		case actions.ADD_TODO:
			return [...state, action.todo];
		case actions.REMOVE_TODO:
			return state.filter(({id}) => id !== action.id);
		case actions.EDIT_TODOS:
			return state.map((todo) => {
				if(todo.id === action.id){
					return {
						...todo,
						...action.updates
					}
				}
				return todo;
			});
		default: 
			return state;
	}
}