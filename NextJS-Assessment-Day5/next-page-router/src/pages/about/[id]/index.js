import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AboutDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [aboutData, setAboutData] = useState();
  
  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const response = await fetch('http://localhost:3000/api/about');
        const data = await response.json();
        const aboutDetail = data?.employees?.find((item) => item?.employID === id);
        setAboutData(aboutDetail) 
      }
      catch(error){
        console.error('data incorect',error)
      }
    }
    fetchData()
  },[id])
  return (
    <div className="container pb-[100px] text-center min-h-[500px]">
      <h1 className="text-center pt-[50px] font-extrabold text-[30px]">Employee Details</h1>
      <h2 className="pt-[50px]">Employee Id: {aboutData?.employID}</h2>
      <p>Name: {aboutData?.name}</p>
      <p>Designation: {aboutData?.designation}</p>
    </div>
  );
}
