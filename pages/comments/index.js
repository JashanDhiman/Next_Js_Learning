import React, { useState } from "react";

const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const fetchComments = async () => {
    const response = await fetch(`/api/comments`);
    const data = await response.json();
    setComments(data);
  };
  const SubmitHandler = async () => {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };
  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    fetchComments();
  };
  return (
    <>
      <input
        type="text"
        name="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={SubmitHandler}>Submit comment</button>
      <button onClick={fetchComments}>Load comments</button>
      {comments.map(({ id, text }) => {
        return (
          <div key={id}>
            {id} {text}
            <button onClick={() => deleteComment(id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
};

export default CommentsPage;
