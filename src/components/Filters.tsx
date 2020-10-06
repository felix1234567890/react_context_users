import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import Select, { ValueType } from "react-select";
import { SortOrder } from "../context";
import selectStyles from "../selectStyles";

interface FilterProps {
  sort: (srtOrder: ValueType<SortOrder>) => void;
  sortOrder: ValueType<SortOrder>;
}
const Filters: FC<FilterProps> = ({ sort, sortOrder }) => {
  const { t } = useTranslation();

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
        onChange={sort}
        options={options}
      />
    </div>
  );
};

export default Filters;
