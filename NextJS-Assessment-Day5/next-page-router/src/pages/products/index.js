import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductListing() {
  const [productData, setProductData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/product');
        const data = await response.json();
        setProductData(data)
      }
      catch (error) {
        console.error('data incorect', error)
      }
    }
    fetchData()
  }, [])
  console.log('name', productData)
  return (
    <div className="container pb-[100px]">
      <h1 className="text-center pt-[50px] font-extrabold text-[30px]">{productData?.title}</h1>
      <p className="text-center pt-[10px] pb-[50px] text-[20px]">{productData?.description}</p>
      <ul className="list">
        {productData?.details?.map((item, index) =>
          <li key={index}>
            <Link href={`/products/${item.id}`}>
            {item.name}
            ({item.id})
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
