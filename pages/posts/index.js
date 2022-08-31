import React from "react";
import Link from "next/link";

const index = ({ posts }) => {
  return (
    <>
      <h1>Lists of posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`} passHref>
              <h2>
                {post.id} {post.title}
              </h2>
            </Link>
            <hr></hr>
          </div>
        );
      })}
    </>
  );
};

export default index;

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();
  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
}
