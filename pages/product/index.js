import React from "react";

const productPage = ({ products }) => {
  return (
    <>
      <h2>List of products</h2>
      {products.map(({ title, id, price }) => {
        return (
          <h3 key={id}>
            {id} {title} {price}
          </h3>
        );
      })}
    </>
  );
};

export default productPage;

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();
  return {
    props: {
      products: data,
    },
  };
}
