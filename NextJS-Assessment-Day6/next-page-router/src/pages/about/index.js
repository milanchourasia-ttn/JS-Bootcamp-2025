import Link from "next/link";
export async function getStaticProps() {
  try {
    const response = await fetch("http://localhost:3000/api/about");
    
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    return {
      props: data,
      revalidate: 60, 
    };
  } catch (error) {
    console.error("Error fetching about data:", error);
    return { notFound: true };
  }
}
export default function About({ title, description, employees }) {
  return (
    <div className="container pb-[100px]">
      <h1 className="text-center pt-[50px] font-extrabold text-[30px]">{title}</h1>
      <p className="text-center py-[10px] text-[20px]">{description}</p>
      <ul className="list pt-[50px]">
        {employees?.map((item) => (
          <li key={item.employID}>
            <Link href={`/about/${item.employID}`}>{item.employID}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


