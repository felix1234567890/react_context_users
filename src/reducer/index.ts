import { StateData } from "../context";
import { Actions, ActionType } from "./actions";
import { sortUsers, filterUsers } from "./helpers";

export default (state: StateData, action: Actions) => {
  switch (action.type) {
    case ActionType.SetLoading:
      return {
        ...state,
        loading: !state.loading,
      };
    case ActionType.SetUsers:
      return {
        ...state,
        users: action.payload,
      };
    case ActionType.SetLanguage:
      return {
        ...state,
        language: state.language === "en" ? "hr" : "en",
      };
    case ActionType.SortUsers:
      const sortedUsers = sortUsers(state.users, action.payload);
      return {
        ...state,
        filteredUsers: sortedUsers,
      };
    case ActionType.FilterUsers:
      const filteredUsers = filterUsers(state.users, action.payload);
      return {
        ...state,
        filteredUsers,
      };
    default:
      return state;
  }
};
