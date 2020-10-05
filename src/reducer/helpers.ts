import { ValueType } from "react-select";
import { SortOrder, User } from "../context";

export const sortUsers = (users: User[], sortOrder: ValueType<SortOrder>) => {
  const { value } = sortOrder as SortOrder;
  let sortedUsers;
  switch (value) {
    case "desc":
      sortedUsers = users.sort((a: User, b: User) => {
        return b.age - a.age;
      });
      break;
    case "asc":
      sortedUsers = users.sort((a: User, b: User) => {
        return a.age - b.age;
      });
      break;
    case "under40":
      sortedUsers = users
        .filter((user: User) => user.age < 40)
        .sort((a: User, b: User) => a.age - b.age);
      break;
    case "over40":
      sortedUsers = users
        .filter((user: User) => user.age > 40)
        .sort((a: User, b: User) => a.age - b.age);
      break;
    case "female":
      sortedUsers = users.filter((user: User) => user.gender === "female");
      break;
    case "male":
      sortedUsers = users.filter((user: User) => user.gender === "male");
      break;
    default:
      sortedUsers = users;
  }
  return sortedUsers;
};

export const filterUsers = (users: User[], search: string) => {
  const val = new RegExp(search.toLowerCase(), "g");
  const searchedUsers = users.filter((user) => {
    if (user.country.toLowerCase().match(val)) return true;
    return false;
  });
  searchedUsers.sort((a: any, b: any) => a.country - b.country);
  return searchedUsers;
};
