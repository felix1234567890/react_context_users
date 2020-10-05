import { StateData } from "../context";
import { Actions, ActionType } from "./actions";

export default (state: StateData, action: Actions) => {
  switch (action.type) {
    case ActionType.SetLoading:
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return state;
  }
};
