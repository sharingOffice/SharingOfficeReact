import { apiUrl } from "../config.json";
import http from "./httpService";

const apiEndpoint = apiUrl + "/posts";

function postUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getPosts() {
  return http.get(apiEndpoint);
}

export function getPost(postId) {
  return http.get(postUrl(postId));
}

export function savePost(post) {
  if (post.id) {
    return http.put(postUrl(post.id), post);
  }

  return http.post(apiEndpoint, post);
}

export function deletePost(postId) {
  return http.delete(postUrl(postId));
}

export function updatePost(post) {
    return http.put(postUrl(post.id), post);
  }

