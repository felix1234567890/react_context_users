import { User } from "../context";

export enum ActionType {
  SetUsers = "SET_USERS",
  SetLoading = "SET_LOADING",
}
interface ISetUsers {
  type: ActionType.SetUsers;
  payload: User[];
}
interface ISetLoading {
  type: ActionType.SetLoading;
}
export type Actions = ISetUsers | ISetLoading;
export const setUsers = (users: User[]): ISetUsers => ({
  type: ActionType.SetUsers,
  payload: users,
});
export const setLoading = (): ISetLoading => ({
  type: ActionType.SetLoading,
});
