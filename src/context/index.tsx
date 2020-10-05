import React, { createContext, Dispatch, useReducer, ReactNode } from "react";
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
  language: string;
}
const initialState = {
  users: [],
  loading: false,
  language: "en",
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
type AppProps = {
  children: ReactNode;
};
const AppContext: React.FC<AppProps> = ({ children }: AppProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
export default AppContext;
