import {ADD_TODO, DELETE_TODO, TOGGLE_TODO} from "./types";

const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    text,
    isComplete: false
  }
})

const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id
})

const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id
})

export {
  addTodo,
  toggleTodo,
  deleteTodo
}