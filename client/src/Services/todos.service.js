import axios from 'axios';

const { REACT_APP_API_BASE_ENDPOINT } = process.env;

export async function getTodo(token) {
    const endpoint = `${REACT_APP_API_BASE_ENDPOINT}/todo`;
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const todos = await axios.get(endpoint);
    return todos.data;
}

export async function deleteTodo(id, token) {
    const endpoint = `${REACT_APP_API_BASE_ENDPOINT}/todo/${id}`;
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const todos = await axios.delete(endpoint);
    return todos.data;
}

export async function addTodo(obj, token) {
    const endpoint = `${REACT_APP_API_BASE_ENDPOINT}/todo`;
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const task = await axios.post(endpoint, obj);
    return task.data;
}

export async function updateTodo(obj, id, token) {
    const endpoint = `${REACT_APP_API_BASE_ENDPOINT}/todo/${id}`;
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const task = await axios.put(endpoint, obj);
    return task.data;
}
