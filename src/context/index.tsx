import React, {
  createContext,
  type Dispatch,
  useReducer,
  type ReactNode,
} from "react";
import reducer from "../reducer";
import { type Actions } from "../reducer/actions";

export interface User {
  name: string;
  email: string;
  country: string;
  photo: string;
  gender: string;
  age: number;
}

export interface SortOrder {
  value: string;
  label: string;
}
export interface StateData {
  users: User[];
  loading: boolean;
  language: string;
  search: string;
  filteredUsers: User[];
}
const initialState = {
  users: [],
  loading: false,
  language: "en",
  search: "",
  sortOrder: { value: "", label: "None" },
  filteredUsers: [],
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
interface AppProps {
  children: ReactNode;
}
const AppContext: React.FC<AppProps> = ({ children }: AppProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
export default AppContext;
