import {counterReducer} from "./counter/reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {cashReducer} from "./cash/reducer";
import todoReducer from "./todo/reducer";
import todoFilterReducer from "./filter/reducer";
import thunk from "redux-thunk";
import postReducer from "./post/reducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  activeTodoFilter: todoFilterReducer,
  posts: postReducer,
  cashReducer,
  counterReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))