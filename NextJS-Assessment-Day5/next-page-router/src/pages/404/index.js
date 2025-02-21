import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function PageNotFound() {
  const router = useRouter();
  const [count, setCount] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [router]);
  
  return (
    <div className="container pb-[100px] min-h-[500px] text-center">
      <h1 className="text-center py-[50px] font-extrabold text-[30px]">404 Page not found</h1>
      <p className="text-lg">Redirected to homepage in {count} seconds...</p>
    </div>
  );
}
