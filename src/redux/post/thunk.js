import {getPostsFailureActionCreator, getPostsReceiveActionCreator, getPostsRequestActionCreator} from "./actions";

const fetchPost = () => {
  return async (dispatch) => {
    dispatch(getPostsRequestActionCreator())
    try {
      const req = await fetch('https://jsonplaceholder.typicode.com/posts')
      const parsedData = await req.json()
      dispatch(getPostsReceiveActionCreator(parsedData))
    } catch (e) {
      dispatch(getPostsFailureActionCreator(e))
    }
  }
}

export default {
  fetchPost
}