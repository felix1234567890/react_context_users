import React, { createContext, Dispatch, useReducer } from "react";
import reducer from "../reducer";
import { Actions } from "../reducer/actions";

export interface User {
  name: string;
  email: string;
  country: string;
  photo: string;
  gender: string;
  age: number;
}
export interface StateData {
  users: User[];
  loading: boolean;
}
const initialState = {
  users: [],
  loading: false,
};
interface ContextData {
  state: StateData;
  dispatch: Dispatch<Actions>;
}
export const appContext = createContext<ContextData>({
  state: initialState,
  dispatch: () => null,
});
const { Provider } = appContext;

const AppContext: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
export default AppContext;
