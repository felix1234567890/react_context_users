import React, { useContext, SetStateAction, Dispatch, FC } from "react";
import { appContext } from "../context";
import { setLanguage } from "../reducer/actions";
import { useTranslation, UseTranslationResponse } from "react-i18next";

interface HeaderProps {
  search: Dispatch<SetStateAction<string>>;
}
const Header: FC<HeaderProps> = ({ search }) => {
  const { dispatch } = useContext(appContext);
  const { t }: UseTranslationResponse = useTranslation();

  const changeLanguage = (): void => {
    dispatch(setLanguage());
  };

  return (
    <header className="header">
      <div className="header__title">{t("headerTitle")}</div>
      <div className="header__search">
        <input
          type="search"
          placeholder={t("searchText")}
          onChange={(e) => search(e.target.value)}
        />
      </div>
      <span onClick={changeLanguage} className="language">
        {t("lng")}
      </span>
    </header>
  );
};

export default Header;
