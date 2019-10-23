import { combineReducers } from "redux";
import authors from "./authors";
import postsOfAuthor from "./postsOfAuthor";
import editPostOfAuthor from "./editPostOfAuthor";

const rootReducer = combineReducers({
  authors,
  postsOfAuthor,
  editPostOfAuthor
});
export default rootReducer;
