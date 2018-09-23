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
		case "GET_TODOS":
			return [...state, action.todos];
		default: 
			return state;
	}
}