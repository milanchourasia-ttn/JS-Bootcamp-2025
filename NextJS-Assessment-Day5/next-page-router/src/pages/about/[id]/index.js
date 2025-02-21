import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AboutDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container pb-[100px]">
      <h1 className="text-center pt-[50px] font-extrabold text-[30px]">About Detail</h1>
      <p>{id}</p>
    </div>
  );
}
