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
    default:
      return state;
  }
};
