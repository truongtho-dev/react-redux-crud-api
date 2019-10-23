import { GET_POSTS_OF_AUTHOR } from "../constant/actionTypes";

const initialState = {
  posts: []
};
export default function postsOfAuthor(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_OF_AUTHOR:
      if (!action.payload || !Array.isArray(action.payload)) return state;
      return {
        ...state,
        posts: action.payload
      };

    default:
      return state;
  }
}
