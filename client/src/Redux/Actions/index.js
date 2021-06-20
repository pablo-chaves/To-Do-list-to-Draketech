import { getTodo } from '../../Services/todos.service';
import { loginUser, registerUser, getUser } from '../../Services/user.service';
// actipon types
import {
  GET_TODOS,
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  LOGIN,
  REGISTER,
  GET,
} from './types';

// Actions
export const login = (obj) => async function (dispatch) {
  const login = await loginUser(obj);
  return dispatch({
    type: LOGIN,
    payload: login,
  })
}

export const register = (obj) => async function (dispatch) {
  const register = await registerUser(obj);
  return dispatch({
    type: REGISTER,
    payload: register,
  })
}

export const get = (id) => async function (dispatch) {
  const get = await getUser(id);
  return dispatch({
    type: REGISTER,
    payload: get,
  })
}

export const getTodos = (token) => async function (dispatch) {
  const get = await getTodo(token);
  return dispatch({
    type: GET_TODOS,
    payload: get,
  })
}
