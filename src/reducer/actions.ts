import { User } from "../context";

export enum ActionType {
  SetUsers = "SET_USERS",
  SetLoading = "SET_LOADING",
  SetLanguage = "SET_LANGUAGE",
}
interface ISetUsers {
  type: ActionType.SetUsers;
  payload: User[];
}
interface ISetLoading {
  type: ActionType.SetLoading;
}
interface ISetLanguage {
  type: ActionType.SetLanguage;
}
export type Actions = ISetUsers | ISetLoading | ISetLanguage;

export const setUsers = (users: User[]): ISetUsers => ({
  type: ActionType.SetUsers,
  payload: users,
});
export const setLoading = (): ISetLoading => ({
  type: ActionType.SetLoading,
});
export const setLanguage = (): ISetLanguage => ({
  type: ActionType.SetLanguage,
});
