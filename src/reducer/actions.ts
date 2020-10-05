import { ValueType } from "react-select";
import { SortOrder, User } from "../context";

export enum ActionType {
  SetUsers = "SET_USERS",
  SetLoading = "SET_LOADING",
  SetLanguage = "SET_LANGUAGE",
  SetSearch = "SET_SEARCH",
  SetSortOrder = "SET_SORT_ORDER",
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
interface ISetSearch {
  type: ActionType.SetSearch;
  payload: string;
}
interface ISetSortOrder {
  type: ActionType.SetSortOrder;
  payload: ValueType<SortOrder>;
}
export type Actions =
  | ISetUsers
  | ISetLoading
  | ISetLanguage
  | ISetSearch
  | ISetSortOrder;

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
export const setSearch = (search: string): ISetSearch => ({
  type: ActionType.SetSearch,
  payload: search,
});
export const setSortOrder = (
  srtOrder: ValueType<SortOrder>
): ISetSortOrder => ({
  type: ActionType.SetSortOrder,
  payload: srtOrder,
});
