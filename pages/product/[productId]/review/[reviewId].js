import { useRouter } from "next/router";
import React from "react";

const review = () => {
  const router = useRouter();
  const { reviewId, productId } = router.query;
  return (
    <div>
      review {reviewId} for product {productId}
    </div>
  );
};

export default review;
