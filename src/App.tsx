import React, { useContext, useEffect, useState } from "react";
import { useTranslation, UseTranslationResponse } from "react-i18next";
import { ValueType } from "react-select";
import "./App.scss";
import Filters from "./components/Filters";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import UsersList from "./components/UsersList";
import { appContext, SortOrder, User } from "./context";
import {
  filterUsers,
  setLoading,
  setUsers,
  sortUsers,
} from "./reducer/actions";

export interface PaginationState {
  pageNumber: number;
  itemsPerPage: number;
  pageCount: number;
}

function App() {
  const {
    state: { language },
    dispatch,
  } = useContext(appContext);

  const [search, setSearch] = useState<string>("");

  const [pagination, setPagination] = useState<PaginationState>({
    pageNumber: 1,
    itemsPerPage: 6,
    pageCount: 0,
  });

  const [sortOrder, setSortOrder] = useState<ValueType<SortOrder>>({
    value: "",
    label: "None",
  });

  const setSort = (srtOrder: ValueType<SortOrder>) => {
    setSortOrder(srtOrder);
  };
  useEffect(() => {
    dispatch(sortUsers(sortOrder));
  }, [dispatch, sortOrder]);

  const { i18n }: UseTranslationResponse = useTranslation();
  const shuffleUsers = (users: User[]): void => {
    for (let i = users.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [users[i], users[j]] = [users[j], users[i]];
    }
  };
  useEffect(() => {
    dispatch(filterUsers(search));
  }, [dispatch, search]);

  useEffect(() => {
    dispatch(setLoading());
    fetch("./users.json")
      .then((res) => res.json())
      .then((data) => {
        shuffleUsers(data);
        dispatch(setUsers(data));
        dispatch(setLoading());
      });
  }, [dispatch]);

  const increaseNumber = (): void => {
    setPagination((prevState) => ({
      ...prevState,
      pageNumber: prevState.pageNumber + 1,
    }));
  };
  const decreaseNumber = (): void => {
    setPagination((prevState) => ({
      ...prevState,
      pageNumber: prevState.pageNumber - 1,
    }));
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <>
      <Header search={setSearch} />
      <Filters sort={setSort} sortOrder={sortOrder} />
      <UsersList
        setPagination={setPagination}
        pagination={pagination}
        search={search}
        sortOrder={sortOrder}
      />
      <Pagination
        pageNumber={pagination.pageNumber}
        pageCount={pagination.pageCount}
        increaseNumber={increaseNumber}
        decreaseNumber={decreaseNumber}
      />
    </>
  );
}

export default App;
