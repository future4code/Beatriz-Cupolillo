import axios from "axios";
import { BASE_URL } from "../Constants/apiContant";
import { goToFeed } from "../Routes/Coordinator";

export const createPosts = (body, history) => {
  const token = localStorage.getItem("token");

  axios
    .post(`${BASE_URL}/posts`, body, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {
      console.log(response);
      goToFeed(history);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const createComments = (body, postId) => {
  const token = localStorage.getItem("token");

  axios
    .post(`${baseUrl}/posts/${postId}/comment`, body, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const votePost = (body, postId) => {
  const token = localStorage.getItem("token");
  axios
    .put(`${baseUrl}/posts/${postId}/vote`, body, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
