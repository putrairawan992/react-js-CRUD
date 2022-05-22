import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  ADD_POST,
  DELETE_POST,
  SELECTED_POST,
  RESET_SELECTED_POST,
  UPDATE_POST,
} from './types';
import store from 'store';

export const getPosts = () => ({
  type: GET_POSTS,
});

export const getPostsSuccess = (posts) => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
});

export const getPostsFail = (error) => ({
  type: GET_POSTS_FAIL,
  payload: error,
});

export const addPost = (data) => ({
  type: ADD_POST,
  payload: data,
});

export const setSelected = (id) => ({
  type: SELECTED_POST,
  payload: id,
});

export const resetSelected = () => ({
  type: RESET_SELECTED_POST,
});

export const addPostAction = (product) => store.dispatch(addPost(product));

export const deletePost = (data) => ({
  type: DELETE_POST,
  payload: data,
});

export const deletePostAction = (id) => store.dispatch(deletePost(id));

const editPost = (data) => ({
  type: UPDATE_POST,
  payload: data,
});

export const editPostAction = (post) => store.dispatch(editPost(post));
