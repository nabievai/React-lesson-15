import {GET_POSTS_FAILURE, GET_POSTS_RECEIVE, GET_POSTS_REQUEST} from "./types";

const getPostsRequestActionCreator = () => ({
  type: GET_POSTS_REQUEST
})

const getPostsReceiveActionCreator = (data) => ({
  type: GET_POSTS_RECEIVE,
  payload: data
})

const getPostsFailureActionCreator = (err) => ({
  type: GET_POSTS_FAILURE,
  payload: err
})

export {
  getPostsRequestActionCreator,
  getPostsReceiveActionCreator,
  getPostsFailureActionCreator
}