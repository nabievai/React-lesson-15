export const ADD_CASH = 'cash/add-cash'
export const GET_CASH = 'cash/get-cash'

export const addCashActionCreator = (cash) => ({
  type: ADD_CASH,
  payload: cash
})

export const getCashActionCreator = (cash) => ({
  type: GET_CASH,
  payload: cash
})