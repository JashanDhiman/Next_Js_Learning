import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Index = () => {
  const { data: session } = useSession();

  return (
    <>
      <div>{session ? `${session.user.name}, ` : ""}Welcome to NextJs.</div>
      <hr></hr>
      <Link href="/users">
        <a>go to users page</a>
      </Link>
      <hr></hr>
      <Link href="/posts">
        <a>go to posts page</a>
      </Link>
    </>
  );
};

export default Index;
