import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import Select, { ValueType } from "react-select";
import { appContext, SortOrder } from "../context";
import { setSortOrder } from "../reducer/actions";
import selectStyles from "../selectStyles";

const Filters = () => {
  const { t } = useTranslation();
  const {
    state: { sortOrder },
    dispatch,
  } = useContext(appContext);
  const setSort = (srtOrder: ValueType<SortOrder>) => {
    dispatch(setSortOrder(srtOrder));
  };
  const options: SortOrder[] = [
    { value: "", label: t("none") },
    { value: "asc", label: t("ageAsc") },
    { value: "desc", label: t("ageDesc") },
    { value: "under40", label: t("ageUnder") },
    { value: "over40", label: t("ageOver") },
    { value: "male", label: t("male") },
    { value: "female", label: t("female") },
  ];
  return (
    <div className="sortBy">
      <span>{t("sortBy")} </span>
      <Select
        styles={selectStyles as any}
        defaultValue={options[0]}
        value={sortOrder}
        onChange={setSort}
        options={options}
      />
    </div>
  );
};

export default Filters;
