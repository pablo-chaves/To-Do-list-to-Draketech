// actipon types
import {
  GET_TODOS,
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  LOGIN,
  REGISTER,
  GET,
} from '../Actions/types';

const initialState = {
  todos: [],
  session: {}
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      session: action.payload
    }
  case REGISTER:
    return {
      ...state,
      session: action.payload
    }
  case GET:
    return {
      ...state,
      session: action.payload
    }
  case GET_TODOS:
    return {
      ...state,
      todos: [].concat(action.payload)
    }

  default:
    return state;
  }
}
