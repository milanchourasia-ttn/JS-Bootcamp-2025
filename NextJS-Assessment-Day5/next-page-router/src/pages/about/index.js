import Link from "next/link";
import { useEffect, useState } from "react";

export default function About() {
  const [aboutData, setAboutData] = useState();
  
  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const response = await fetch('http://localhost:3000/api/about');
        const data = await response.json();
        setAboutData(data) 
      }
      catch(error){
        console.error('data incorect',error)
      }
    }
    fetchData()
  },[])
  return (
    <div className="container pb-[100px]">
      <h1 className="text-center pt-[50px] font-extrabold text-[30px]">{aboutData?.title}</h1>
      <p className="text-center py-[10px] text-[20px]">{aboutData?.description}</p>
      <ul className="list pt-[50px]">
        {aboutData?.employees?.map((item,index)=>
          <li key={index}>
            <Link href={`/about/${item.employID}`}>
              {item?.employID}
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
