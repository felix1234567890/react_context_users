import React, { useContext, useEffect } from "react";
import { useTranslation, UseTranslationResponse } from "react-i18next";
import "./App.scss";
import Filters from "./components/Filters";
import Header from "./components/Header";
import UsersList from "./components/UsersList";
import { appContext, User } from "./context";
import { setLoading, setUsers } from "./reducer/actions";

function App() {
  const {
    state: { language },
    dispatch,
  } = useContext(appContext);
  const { i18n }: UseTranslationResponse = useTranslation();
  const shuffleUsers = (users: User[]): void => {
    for (let i = users.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [users[i], users[j]] = [users[j], users[i]];
    }
  };
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

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <>
      <Header />
      <Filters />
      <UsersList />
    </>
  );
}

export default App;
