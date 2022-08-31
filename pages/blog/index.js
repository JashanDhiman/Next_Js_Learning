import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const blogPage = () => {
  const router = useRouter();
  const handleClick = () => {
    router.replace("/docs/feature1");
  };
  return (
    <>
      <Link href="/" replace>
        <a>go to Home page</a>
      </Link>
      <div>blogPage</div>
      <button onClick={handleClick}>save blog</button>
    </>
  );
};

export default blogPage;
