import React from "react";

const ArticleListByCategory = ({ articles, category }) => {
  return (
    <>
      <h1>
        showing news for category <i>{category}</i>
      </h1>
      {articles.map(({ id, title, description }) => {
        return (
          <div key={id}>
            <h2>
              {id} {title}
            </h2>
            <p>{description}</p>
            <hr></hr>
          </div>
        );
      })}
    </>
  );
};

export default ArticleListByCategory;

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `http://localhost:4000/news?category=${params.category}`
  );
  const data = await response.json();

  return {
    props: {
      articles: data,
      category: params.category,
    },
  };
}
