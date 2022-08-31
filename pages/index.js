import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <>
      <div>hello jashan</div>
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

export default index;
