// actipon types
import {
  GET_TODOS,
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
} from '../Actions/types';

const initialState = {
  todos: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
  case GET_TODOS:
    return {
      ...state,
      session: action.payload
    }
  default:
    return state;
  }
}
