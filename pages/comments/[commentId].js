import React from "react";

const Comment = ({ comment }) => {
  return <div>Comment</div>;
};

export default Comment;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { commentId: 1 } },
      { params: { commentId: 2 } },
      { params: { commentId: 3 } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { commentId } = params;
  const comment = comments.find(({ id }) => id === parseInt(commentId));
  console.log(comment);

  return {
    props: {
      comment,
    },
  };
}
