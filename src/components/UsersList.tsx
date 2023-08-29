import React, {
  type Dispatch,
  type FC,
  type SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { type SingleValue } from "react-select";
import { type PaginationState } from "../App";
import { appContext, type SortOrder, type User } from "../context";
import UserItem from "./UserItem";

interface UsersListProps {
  pagination: PaginationState;
  setPagination: Dispatch<SetStateAction<PaginationState>>;
  search: string;
  sortOrder: SingleValue<SortOrder>;
}
const UsersList: FC<UsersListProps> = ({
  pagination,
  setPagination,
  search,
  sortOrder,
}) => {
  const {
    state: { loading, users, filteredUsers },
  } = useContext(appContext);

  const [shownUsers, setShownUsers] = useState<User[]>([]);

  const { value } = sortOrder as SortOrder;

  const paginateUsers = (
    users: User[],
    pageNumber: number = 1,
    itemsPerPage: number = 6,
  ): User[] => {
    const skip = (pageNumber - 1) * itemsPerPage;
    if (users.length > 0) {
      const shownUsers = users.slice(skip, skip + itemsPerPage);
      return shownUsers;
    } else return [];
  };
  useEffect(() => {
    setPagination(prevState => ({
      ...prevState,
      pageNumber: pagination.pageNumber,
    }));
    if (Boolean(search) || Boolean(value)) {
      setShownUsers(paginateUsers(filteredUsers, pagination.pageNumber));
    } else {
      setShownUsers(paginateUsers(users, pagination.pageNumber));
    }
  }, [
    search,
    pagination.pageNumber,
    setPagination,
    users,
    filteredUsers,
    sortOrder,
    value,
  ]);

  useEffect(() => {
    setPagination(prevState => ({
      ...prevState,
      pageNumber: 1,
      pageCount: Math.ceil(filteredUsers.length / prevState.itemsPerPage),
    }));
    setShownUsers(paginateUsers(filteredUsers));
  }, [filteredUsers, setPagination, search, sortOrder]);

  useEffect(() => {
    setPagination(prevState => ({
      ...prevState,
      pageNumber: 1,
      pageCount: Math.ceil(users.length / prevState.itemsPerPage),
    }));
    setShownUsers(paginateUsers(users));
  }, [setPagination, users]);

  return (
    <div className="container">
      {loading && <h1>Loading...</h1>}
      <section className="card-row">
        {shownUsers.length > 0 ? (
          shownUsers.map((user: User, index: number) => {
            return <UserItem {...user} key={index} />;
          })
        ) : (
          <h1>No users to show</h1>
        )}
      </section>
    </div>
  );
};

export default UsersList;
