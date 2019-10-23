import {
  GET_AUTHORS,
  GET_POSTS_OF_AUTHOR,
  EDIT_POST_OF_AUTHOR
} from "../constant/actionTypes";

export const getAuthors = () => async dispatch => {
  const authors = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then(res => res.json());
  dispatch({
    type: GET_AUTHORS,
    payload: authors
  });
};

export const getPostsOfAuthor = (authorId = 1) => async dispatch => {
  const postsOfAuthor = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${authorId}`
  ).then(res => res.json());
  dispatch({
    type: GET_POSTS_OF_AUTHOR,
    payload: postsOfAuthor
  });
};

// in fact, follow API, just only edit post of authorID = 1
export const editPostOfAuthor = postId => async dispatch => {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  ).then(res => res.json());
  dispatch({
    type: EDIT_POST_OF_AUTHOR,
    payload: { postId: postId, post: post }
  });
};
export const editedPostOfAuthor = (postId, title, content) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: "PUT",
    body: JSON.stringify({
      id: `${postId}`,
      title: `${title}`,
      body: `${content}`,
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(json => {
      alert("Post is edited successfully");
      console.log(json);
    });
};
export const deletePost = postId => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: "DELETE"
  }).then(() => alert(`The Post has id: ${postId} is removed`));
};
