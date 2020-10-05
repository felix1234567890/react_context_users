import React, { useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Select, { ValueType } from "react-select";
import { appContext, SortOrder } from "../context";
import { sortUsers } from "../reducer/actions";
import selectStyles from "../selectStyles";

const Filters = () => {
  const { t } = useTranslation();
  const {
    dispatch,
    state: { filteredUsers },
  } = useContext(appContext);
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
        defaultValue={sortOrder}
        value={sortOrder}
        onChange={setSort}
        options={options}
      />
    </div>
  );
};

export default Filters;
