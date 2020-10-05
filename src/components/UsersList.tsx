import React, { useContext } from "react";
import { appContext, User } from "../context";
import UserItem from "./UserItem";

const UsersList = () => {
  const {
    state: { loading, users },
  } = useContext(appContext);
  return (
    <div className="container">
      {loading && <h1>Loading...</h1>}
      <section className="card-row">
        {users.length > 0 &&
          users.map((user: User, index: number) => {
            return <UserItem {...user} key={index} />;
          })}
      </section>
    </div>
  );
};

export default UsersList;
