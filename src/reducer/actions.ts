import { SingleValue } from "react-select";
import { SortOrder, User } from "../context";

export enum ActionType {
  SetUsers = "SET_USERS",
  SetLoading = "SET_LOADING",
  SetLanguage = "SET_LANGUAGE",
  FilterUsers = "FILTER_USERS",
  SortUsers = "SORT_USERS",
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
interface ISortUsers {
  type: ActionType.SortUsers;
  payload: SingleValue<SortOrder>;
}
interface IFilterUsers {
  type: ActionType.FilterUsers;
  payload: string;
}
export type Actions =
  | ISetUsers
  | ISetLoading
  | ISetLanguage
  | ISortUsers
  | IFilterUsers;

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

export const sortUsers = (sort: SingleValue<SortOrder>): ISortUsers => ({
  type: ActionType.SortUsers,
  payload: sort,
});

export const filterUsers = (search: string): IFilterUsers => ({
  type: ActionType.FilterUsers,
  payload: search,
});
