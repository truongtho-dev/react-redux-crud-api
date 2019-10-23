import { EDIT_POST_OF_AUTHOR } from "../constant/actionTypes";

const initialState = {
  postId: null,
  post: {}
};
export default function editPostOfAuthor(state = initialState, action) {
  switch (action.type) {
    case EDIT_POST_OF_AUTHOR:
      return {
        ...state,
        postId: action.payload.postId,
        post: action.payload.post
      };

    default:
      return state;
  }
}
