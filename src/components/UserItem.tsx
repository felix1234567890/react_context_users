import React, { type ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { type User } from "../context";

const UserItem = ({
  name,
  email,
  photo,
  country,
  gender,
  age,
}: User): ReactElement => {
  const { t } = useTranslation();

  return (
    <article className="card">
      <img src={photo} alt="user avatar" />
      <h3 className="user__name">{name}</h3>
      <div className="user__details">
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>{t("country")}:</strong> {country}
        </p>
        <p>
          <strong>{t("gender")}:</strong> {gender}
        </p>
        <p>
          <strong>{t("age")}:</strong> {age}
        </p>
      </div>
    </article>
  );
};

export default UserItem;
