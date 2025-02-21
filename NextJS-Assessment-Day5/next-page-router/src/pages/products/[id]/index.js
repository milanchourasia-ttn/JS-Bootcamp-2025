import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/api/product");
      const data = await response.json();
      const productDetail = data?.details?.find((item) => item?.id === id);
      setProductData(productDetail);
    };

    fetchData();
  }, [id]);

  if (!productData) return <p>Loading...</p>;

  return (
    <div className="container pb-[100px] text-center min-h-[500px]">
      <h1 className="text-center py-[50px] font-extrabold text-[30px]">Product Details</h1>
      <h2>Name: {productData?.name}</h2>
      <p>Description: {productData?.description}</p>
      <p>Price: ${productData?.price}</p>
    </div>
  );
}