import * as types from "../actions/actionTypes";

import initialState from "./initialState";

export default function postReducer(state = initialState.posts, action) {
  switch (action.type) {
    case types.LOAD_POST_SUCCESS:
    return {
      loading: false,
      posts: action.posts.data,
      error: null
    }
    case types.SAVE_POST_SUCCESS:
      return {
        loading: false,
        posts: [action.posts , ...state.posts ],
        error: null
      }
      
    case types.Delete_POST_SUCCESS:
      debugger;
      return {
        loading: false,
        posts: state.posts.filter(item => item.id !== action.posts.id),
        error: null
      }
      
    default:
      return state;
  }
}
