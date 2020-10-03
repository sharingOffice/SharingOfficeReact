import * as postApi from "../../services/userService";
import * as types from "./actionTypes";

export function loadPostsSuccess(posts) {
  return { type: types.LOAD_POST_SUCCESS, posts };
}

export function SavePostSuccess(posts) {
    return { type: types.SAVE_POST_SUCCESS, posts: posts.data };
  }

  export function DeletePostSuccess(id) {
    return { type: types.Delete_POST_SUCCESS, posts: id };
  }

export function loadPosts() {
  return function(dispatch) {
    debugger;
    return postApi
      .getPosts()
      .then(courses => {
          debugger;
        dispatch(loadPostsSuccess(courses));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function SavePost(post) {
    debugger;
    return function(dispatch) {
        debugger;
      return postApi
        .savePost(post)
        .then(courses => {
            debugger;
            dispatch(SavePostSuccess(courses));
        })
        .catch(error => {
          throw error;
        });
    };
  }

  
export function DeletePost(id) {
  debugger;
  return function(dispatch) {
      debugger;
    return postApi
      .deletePost(id)
      .then(courses => {
          debugger;
          dispatch(DeletePostSuccess({id}));
      })
      .catch(error => {
        throw error;
      });
  };
}

