import { takeLatest, takeEvery, put, call } from 'redux-saga/effects';
import { GET_POSTS, ADD_POST, DELETE_POST, UPDATE_POST } from './types';
import { getPostsSuccess, getPostsFail } from './action';
import { getPosts, createPost, deletePost, updatePost } from './service';

function* onGetPosts() {
  try {
    const response = yield call(getPosts);
    yield put(getPostsSuccess(response));
  } catch (error) {
    yield put(getPostsFail(error.response));
  }
}

function* onCreatePost(action) {
  const payload = action.payload;

  try {
    yield call(createPost, payload);
  } catch (error) {
    yield put(getPostsFail(error.response));
  }
}

function* onDeleteProduct(action) {
  const id = action.payload;

  try {
    yield call(deletePost, id);
  } catch (error) {
    yield put(getPostsFail(error.response));
  }
}

function* onUpdateProduct(action) {
  try {
    yield call(updatePost, action.payload);
  } catch (error) {
    yield put(getPostsFail(error.response));
  }
}

function* PostSaga() {
  yield takeLatest(GET_POSTS, onGetPosts);
  yield takeEvery(ADD_POST, onCreatePost);
  yield takeEvery(DELETE_POST, onDeleteProduct);
  yield takeEvery(UPDATE_POST, onUpdateProduct);
}

export default PostSaga;
