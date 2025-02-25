import { useRouter } from "next/router";


export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const product = await res.json();

    return {
      props: { product },
    };
  } catch (error) {
    return {
      notFound: true, 
    };
  }
}


const ProductPage = ({ product }) => {
  const router = useRouter();

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="container pb-[100px]">
      <h1 className="text-center py-[50px] font-extrabold text-[30px]">
        {product.title}
      </h1>
      <div className="text-center">
      <img className="text-center mx-auto" src={product.thumbnail} alt={product.title} width={200} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      </div>
    </div>
  );
};

export default ProductPage;
