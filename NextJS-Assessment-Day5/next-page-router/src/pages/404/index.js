import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function PageNotFound() {
  const router = useRouter();
  const [count, setCount] = useState(5);
  
  return (
    <div className="container pb-[100px]">
      <h1 className="text-center py-[50px] font-extrabold text-[30px]">404 Page not found</h1>
    </div>
  );
}
