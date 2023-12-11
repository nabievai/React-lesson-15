import {ADD_CASH, GET_CASH} from "./action";

const initialState = {
  cash: 0,
  loading: false,
  errMsg: ''
}

export const cashReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CASH:
      return {
        ...state,
        cash: state.cash + action.payload
      }
    case GET_CASH:
      return {
        ...initialState
      }
    default:
      return state
  }
}