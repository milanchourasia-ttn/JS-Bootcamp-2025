import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductListing() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProductData(data.products); 
      } catch (error) {
        console.error("Data incorrect", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container pb-[100px]">
      <h1 className="text-center py-[50px] font-extrabold text-[30px]">
        Product List
      </h1>
      <ul className="list">
        {productData.map((item) => (
          <li key={item.id} className="p-10 text-center">
            <Link href={`/products/${item.id}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
