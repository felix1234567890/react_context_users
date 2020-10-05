import { StateData } from "../context";
import { Actions, ActionType } from "./actions";

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
    case ActionType.SetSortOrder:
      return {
        ...state,
        sortOrder: action.payload,
      };
    case ActionType.SetSearch:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};
