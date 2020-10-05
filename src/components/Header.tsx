import React, { useContext, useState, useEffect } from "react";
import { appContext } from "../context";
import { filterUsers, setLanguage } from "../reducer/actions";
import { useTranslation, UseTranslationResponse } from "react-i18next";

const Header = () => {
  const [search, setSearch] = useState<string>("");
  const { dispatch } = useContext(appContext);
  const { t }: UseTranslationResponse = useTranslation();

  const changeLanguage = (): void => {
    dispatch(setLanguage());
  };
  useEffect(() => {
    dispatch(filterUsers(search));
  }, [dispatch, search]);
  return (
    <header className="header">
      <div className="header__title">{t("headerTitle")}</div>
      <div className="header__search">
        <input
          type="search"
          placeholder={t("searchText")}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <span onClick={changeLanguage} className="language">
        {t("lng")}
      </span>
    </header>
  );
};

export default Header;
