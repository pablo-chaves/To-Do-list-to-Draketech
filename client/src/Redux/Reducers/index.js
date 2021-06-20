// actipon types
import {
  GET_TODOS,
  UPDATE_TODO,
  LOGIN,
  REGISTER,
  GET,
  EDIT,
} from '../Actions/types';

const initialState = {
  todos: [],
  session: {},
  edit: {}
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
  case EDIT:
    return {
      ...state,
      edit: action.payload
    }

  default:
    return state;
  }
}
