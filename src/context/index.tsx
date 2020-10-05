import React, { createContext } from "react";

interface User {
  name: string;
  email: string;
  country: string;
  photo: string;
  gender: string;
  age: number;
}
interface ContextData {
  users: User[];
  loading: boolean;
}
const initialState = {
  users: [],
  loading: false,
};
export const appContext = createContext<ContextData>(initialState);
const { Provider } = appContext;

const AppContext: React.FC = ({ children }) => {
  return <Provider value={initialState}>{children}</Provider>;
};
export default AppContext;
