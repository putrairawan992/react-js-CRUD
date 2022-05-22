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

const initialState = {
  posts: [],
  selected: null,
  loadingPosts: false,
  error: {
    message: '',
  },
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      state = { ...state, loadingPosts: true };
      break;
    case GET_POSTS_SUCCESS:
      state = { ...state, posts: action.payload, loadingPosts: false };
      break;
    case GET_POSTS_FAIL:
      state = {
        ...state,
        error: {
          message: 'Error',
        },
        loadingPosts: false,
      };
      break;
    case ADD_POST:
      state = {
        ...state,
        posts: [action.payload, ...state.posts],
        loadingPosts: false,
      };
      break;
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((f) => f.id !== action.payload),
      };
    case SELECTED_POST:
      return {
        ...state,
        selected: state.posts.find((f) => f.id === action.payload),
      };
    case RESET_SELECTED_POST:
      return {
        ...state,
        selected: null,
      };
    case UPDATE_POST:
      const data = [...state.posts];
      console.log(data);
      const findIndex = state.posts.findIndex(
        (o) => o.id === action.payload.id
      );
      data[findIndex] = action.payload;
      console.log(data);
      return {
        ...state,
        selected: null,
        posts: data,
      };
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default PostReducer;
