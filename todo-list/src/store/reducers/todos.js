import actions from '../actions/actionTypes';

let initialState = {
	todos: [],
	loaded: false,
}

export default (state = initialState, action) => {
	switch(action.type){
		case actions.FETCH_TODOS_SUCCEEDED:
			return {
				loaded: true,
				todos: action.todos
			};
		case actions.REMOVE_TODO:
			return {
				...state,
				todos: state.todos.filter(({id}) => id !== action.id)
			}
		case actions.EDIT_TODOS:
			return {
				...state,
				todos: state.map((todo) => {
					if(todo.id === action.id){
						return {
							...todo,
							...action.updates
						}
					}
					return todo;
				})		
			};
		default: 
			return state;
	}
}