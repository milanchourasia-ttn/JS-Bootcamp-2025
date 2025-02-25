import { useReducer, useEffect } from "react";
import { productReducer, initialState } from "../reducers/productReducer";

const ProductPage = () => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        dispatch({ type: "FETCH_SUCCESS", payload: data.products });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: "Failed to load products" });
      }
    };

    fetchProducts();
  }, []);

  // Add a new product
  const addProduct = () => {
    const newProduct = {
      title: "New Product",
      price: 99.99,
    };
    dispatch({ type: "ADD_PRODUCT", payload: newProduct });
  };

  // Delete a product
  const deleteProduct = (id) => {
    dispatch({ type: "DELETE_PRODUCT", payload: id });
  };

  return (
    <div className="container text-center">
      <h1>Products</h1>

      {state.loading && <p>Loading...</p>}
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}

      <button onClick={addProduct}>Add Product</button>

      <ul className="p-list">
        {state.products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}{" "}
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
