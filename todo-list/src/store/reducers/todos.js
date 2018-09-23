const defaultTodos = [
	{
		id: 1,
		title: "Test1",
		completed: false
	},
	{
		id: 2,
		title: "Test2",
		completed: false
	},
	{
		id: 3,
		title: "Test3",
		completed: false
	}
]

export default (state = defaultTodos, action) => {
	switch(action.type){
		case "SET_TODOS":
			return action.todos;
		case "ADD_TODO":
			return [...state, action.todo];
		case "REMOVE_TODO":
			return state.filter(({id}) => id !== action.id);
		case "EDIT_TODOS":
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