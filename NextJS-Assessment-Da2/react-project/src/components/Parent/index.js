import { useState } from "react";

const Parent = () => {
  const [message] = useState("Hello from Parent Component");

  return (
    <div className="container">
      <div className="mt-50">
      <h3>Q3. Create a parent() component that has a message in its state.</h3>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default Parent;
