import isoFetch from 'isomorphic-fetch';

export const fetchTodos = () => {
	return isoFetch(`https://practiceapi.devmountain.com/api/tasks`);	
}
export const addNewTodo = ({title}) => {
	const postHeaders = new Headers();
	postHeaders.append('Content-Type', 'application/json');
	return isoFetch(`https://practiceapi.devmountain.com/api/tasks`, {
		method: "post",
		headers: postHeaders,
		body: JSON.stringify( { title: title } )
	});
}

export const deleteTodo = (id) => {
	return isoFetch(`https://practiceapi.devmountain.com/api/tasks/${id}`, {
		method: "delete",
	});
}

export const completeTodo = (id) => {
	return isoFetch(`https://practiceapi.devmountain.com/api/tasks/${id}`, {
		method: "put"
	});
}

export default {
	fetchTodos: fetchTodos,
	addNewTodo: addNewTodo,
	deleteTodo: deleteTodo,
	completeTodo: completeTodo
};