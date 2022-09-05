import React from "react";
import { getSession } from "next-auth/react";

const About = ({ data }) => {
  return <div>welcome to about page - {data}</div>;
};

export default About;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin?callbackUrl=http://localhost:3000/about",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
      data: session ? "user" : "Guest",
    },
  };
}
