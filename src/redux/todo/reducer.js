import {ADD_TODO, DELETE_TODO, TOGGLE_TODO} from "./types";
import {deleteTodo} from "./actions";

const initialState = []

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        action.payload
      ]
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isComplete: !todo.isComplete
          }
        }
        return todo
      })
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload)
    default:
      return state
  }
}

export default todoReducer