import React, { useContext, useEffect } from "react";
import { useTranslation, UseTranslationResponse } from "react-i18next";
import "./App.scss";
import Header from "./components/Header";
import { appContext } from "./context";
import { setLoading, setUsers } from "./reducer/actions";

function App() {
  const {
    state: { language },
    dispatch,
  } = useContext(appContext);
  const { i18n }: UseTranslationResponse = useTranslation();

  useEffect(() => {
    dispatch(setLoading());
    fetch("./users.json")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setUsers(data));
        dispatch(setLoading());
      });
  }, [dispatch]);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return <Header />;
}

export default App;
