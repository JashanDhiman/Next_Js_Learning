import React from "react";

const newsArticleList = ({ articles }) => {
  return (
    <>
      <h1>list of articles</h1>
      {articles.map(({ id, title, category }) => {
        return (
          <div key={id}>
            <h2>
              {id} {title} | {category}
            </h2>
          </div>
        );
      })}
    </>
  );
};

export default newsArticleList;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();
  return {
    props: {
      articles: data,
    },
  };
}
