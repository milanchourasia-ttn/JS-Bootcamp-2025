export async function getStaticPaths() {
  try {
    const response = await fetch("http://localhost:3000/api/about");

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    const paths = data.employees.map((emp) => ({
      params: { id: emp.employID.toString() },
    }));

    return {
      paths,
      fallback: "blocking", // Generate on-demand if not pre-built
    };
  } catch (error) {
    console.error("Error fetching paths:", error);
    return { paths: [], fallback: "blocking" };
  }
}

export async function getStaticProps({ params }) {
  try {
    const response = await fetch("http://localhost:3000/api/about");

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    const employee = data.employees.find((emp) => emp.employID.toString() === params.id);

    if (!employee) {
      return { notFound: true };
    }

    return {
      props: { employee },
      revalidate: 60, 
    };
  } catch (error) {
    console.error("Error fetching employee data:", error);
    return { notFound: true };
  }
}

export default function AboutDetail({ employee }) {
  if (!employee) {
    return <p className="text-center py-[50px]">Employee not found.</p>;
  }

  return (
    <div className="container pb-[100px] text-center min-h-[500px]">
      <h1 className="text-center pt-[50px] font-extrabold text-[30px]">
        Employee Details
      </h1>
      <h2 className="pt-[50px]">Employee Id: {employee.employID}</h2>
      <p>Name: {employee.name}</p>
      <p>Designation: {employee.designation}</p>
    </div>
  );
}
