import React, {
  useContext,
  type SetStateAction,
  type Dispatch,
  type FC,
} from "react";
import { appContext } from "../context";
import { setLanguage } from "../reducer/actions";
import { useTranslation } from "react-i18next";

interface HeaderProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}
const Header: FC<HeaderProps> = ({ search, setSearch }) => {
  const { dispatch } = useContext(appContext);
  const { t } = useTranslation();

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
          onChange={e => {
            setSearch(e.target.value);
          }}
          value={search}
        />
      </div>
      <span onClick={changeLanguage} className="language">
        {t("lng")}
      </span>
    </header>
  );
};

export default Header;
