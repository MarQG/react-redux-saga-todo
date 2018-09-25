import isoFetch from 'isomorphic-fetch';

const fetchTodos = () => {
	return isoFetch(`https://practiceapi.devmountain.com/api/tasks`);	
}
const addNewTodo = ({title}) => {
	const postHeaders = new Headers();
	postHeaders.append('Content-Type', 'application/json');
	return isoFetch(`https://practiceapi.devmountain.com/api/tasks`, {
		method: "post",
		headers: postHeaders,
		body: JSON.stringify( { title: title } )
	});
}

const editTodo = (id, updates) => {
	const patchHeaders = new Headers();
	patchHeaders.append('Content-Type', 'application/json');
	patchHeaders.append('Access-Control-Allow-Origin', '*');
	return isoFetch(`https://practiceapi.devmountain.com/api/tasks/${id}`, {
		method: "PATCH",
		headers: patchHeaders,
		body: JSON.stringify( updates )
	});
}

const deleteTodo = (id) => {
	return isoFetch(`https://practiceapi.devmountain.com/api/tasks/${id}`, {
		method: "delete",
	});
}

const completeTodo = (id) => {
	return isoFetch(`https://practiceapi.devmountain.com/api/tasks/${id}`, {
		method: "put"
	});
}

export default {
	fetchTodos: fetchTodos,
	addNewTodo: addNewTodo,
	editTodo: editTodo,
	deleteTodo: deleteTodo,
	completeTodo: completeTodo
};