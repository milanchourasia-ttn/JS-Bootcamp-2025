import React from "react";

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px",
  fontSize: "1rem",
  textAlign: "left",
};

const thStyle = {
  background: "#007bff",
  color: "white",
  padding: "12px",
  border: "1px solid #ddd",
};

const tdStyle = {
  padding: "12px",
  border: "1px solid #ddd",
};

const trStyle = {
  background: "#f8f9fa",
};

const loaderStyle = {
  textAlign: "center",
  padding: "20px",
  fontSize: "1.2rem",
  color: "#007bff",
};

export default async function Products() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const products = data.products.slice(0, 10); // Slice first 10 products

  return (
    <div className="container pb-[100px]">
      <h1 className="text-center py-[50px] font-extrabold text-[30px]">Products</h1>
      <table className="w-full border border-gray-300 rounded-lg" style={tableStyle}>
        <thead>
          <tr style={trStyle}>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Title</th>
            <th style={thStyle}>Description</th>
            <th style={thStyle}>Category</th>
            <th style={thStyle}>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} style={trStyle}>
              <td style={tdStyle}>{product.id}</td>
              <td style={tdStyle}>{product.title}</td>
              <td style={tdStyle}>{product.description}</td>
              <td style={tdStyle}>{product.category}</td>
              <td style={tdStyle}>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
