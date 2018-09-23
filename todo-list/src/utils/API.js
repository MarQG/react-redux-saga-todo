import isoFetch from 'isomorphic-fetch';

export const fetchTodos = () => {
	return isoFetch(`https://practiceapi.devmountain.com/api/tasks`);	
}

export default {
	fetchTodos: fetchTodos
};