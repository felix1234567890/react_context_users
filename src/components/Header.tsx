import React, { useContext } from "react";
import { appContext } from "../context";
import { setLanguage, setSearch } from "../reducer/actions";
import { useTranslation, UseTranslationResponse } from "react-i18next";

const Header = () => {
  const { dispatch } = useContext(appContext);
  const { t }: UseTranslationResponse = useTranslation();
  const changeLanguage = (): void => {
    dispatch(setLanguage());
  };
  const setSearchTerm = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearch(e.target.value));
  };
  return (
    <header className="header">
      <div className="header__title">{t("headerTitle")}</div>
      <div className="header__search">
        <input
          type="search"
          placeholder={t("searchText")}
          onChange={setSearchTerm}
        />
      </div>
      <span onClick={changeLanguage} className="language">
        {t("lng")}
      </span>
    </header>
  );
};

export default Header;
