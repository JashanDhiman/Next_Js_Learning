import React from "react";
import { useRouter } from "next/router";

const productDetail = ({ product }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <h2>
        {product.id} {product.title} {product.price}
      </h2>
      <p>{product.desc}</p>
    </>
  );
};

export default productDetail;

export async function getStaticProps({ params }) {
  const response = await fetch(
    `http://localhost:4000/products/${params.productId}`
  );
  const data = await response.json();
  return {
    props: {
      product: data,
    },
  };
}
export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: "1" } }],
    fallback: true,
  };
}
