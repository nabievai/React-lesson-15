import {FILTER_TODO} from "./types";

const filterTodo = (filter) => ({
  type: FILTER_TODO,
  payload: filter
})

export {
  filterTodo
}