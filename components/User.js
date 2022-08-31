import React from "react";

const User = ({ name, email }) => {
  return (
    <>
      <p>{name}</p>
      <p>{email}</p>
    </>
  );
};

export default User;
