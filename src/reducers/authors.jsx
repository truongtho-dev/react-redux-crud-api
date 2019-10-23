import { GET_AUTHORS } from "../constant/actionTypes";

export default function usersReducer(state = [], action) {
  switch (action.type) {
    case GET_AUTHORS:
      if (!action.payload || !Array.isArray(action.payload)) return state;
      return [
        ...state.filter(i => !action.payload.find(j => j.id === i.id)),
        ...action.payload
      ];
    default:
      return state;
  }
}
