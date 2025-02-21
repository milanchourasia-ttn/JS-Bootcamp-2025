import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductDetails() {
  const router = useRouter()
  const { product } = router.query

  return (
    <div className="container pb-[100px]">
      <h1 className="text-center py-[50px] font-extrabold text-[30px]">Product Details</h1>
      { product }
    </div>
  );
}
