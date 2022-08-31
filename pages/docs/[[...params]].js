import { useRouter } from "next/router";
import React from "react";

const Doc = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  return <div>Docs home page{params}</div>;
};

export default Doc;
