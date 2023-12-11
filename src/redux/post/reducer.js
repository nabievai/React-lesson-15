import {ADD_TODO, DELETE_TODO, GET_POSTS_FAILURE, GET_POSTS_RECEIVE, GET_POSTS_REQUEST, TOGGLE_TODO} from "./types";
import {deleteTodo} from "./actions";

const initialState = {
  isFetching: false,
  list: [],
  error: null
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case GET_POSTS_RECEIVE:
      return {
        ...state,
        isFetching: false,
        list: action.payload
      }
    case GET_POSTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default postReducer