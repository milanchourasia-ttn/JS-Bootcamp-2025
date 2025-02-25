import { useEffect, useState } from "react";
import { useLoader } from "../context/LoaderContext";

const AboutPage = () => {
  const { isLoading, setLoading } = useLoader();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://dummyjson.com/quotes");
        const data = await response.json();
        setData(data?.quotes)
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [setLoading]);
  console.log('data111', data)
  return (
    <div className="container">
      {isLoading ?
        <div className="loader">Loading...</div>
        :
        <div>
          <ul>
          {data?.map((item)=>
          <li>{item?.quote}</li>
          )}
          </ul>
        </div>
      }
    </div>
  );
};

export default AboutPage;
