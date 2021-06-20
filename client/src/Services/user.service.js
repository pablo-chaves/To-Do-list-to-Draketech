import axios from 'axios';

const { REACT_APP_API_BASE_ENDPOINT } = process.env;


export async function loginUser(data) {
    const endpoint = `${REACT_APP_API_BASE_ENDPOINT}/user/login`;
    const login = await axios.post(endpoint, data);
    if(login.data.token) {
      sessionStorage.setItem('token', login.data.token);
      sessionStorage.setItem('id', login.data.id);
      window.location = '/home'
    }
    return login.data;
}

export async function registerUser(data) {
    const endpoint = `${REACT_APP_API_BASE_ENDPOINT}/user/register`;
    const reg = await axios.post(endpoint, data);
    if(reg.data.id) {
      window.location = '/'
    }
    return reg.data;
}

export async function getUser(id) {
    const endpoint = `${REACT_APP_API_BASE_ENDPOINT}/user/${id}`;
    const get = await axios.get(endpoint);
    return get.data;
}
