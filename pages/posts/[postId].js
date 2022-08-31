import React from "react";
import { useRouter } from "next/router";

const Post = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h2>
        {post.div} {post.title}
      </h2>
      <h2>{post.body}</h2>
    </div>
  );
};

export default Post;

export async function getStaticPaths() {
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await response.json();
  // const paths = data.map(({ id }) => {
  //   return {
  //     params: {
  //       postId: `${id}`,
  //     },
  //   };
  // });
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "1" },
      },
    ],
    // paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  //   const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post: data,
    },
  };
}
