import User from "@/User";
import React from "react";

const users = ({ users }) => {
  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map(({ name, email, id }) => {
          return (
            <li key={id}>
              <User name={name} email={email} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  //   console.log(data);
  return {
    props: {
      users: data,
    },
  };
}
