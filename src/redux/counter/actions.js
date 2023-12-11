import {DECREMENT_COUNTER, INCREMENT_COUNTER} from "./types";

const incrementCounterActionCreator = () => ({
  type: INCREMENT_COUNTER
})

const decrementCounterActionCreator = () => ({
  type: DECREMENT_COUNTER
})

export {
  incrementCounterActionCreator,
  decrementCounterActionCreator
}