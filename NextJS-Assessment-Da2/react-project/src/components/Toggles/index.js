import { useState } from "react";

const Toggles = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container">
      <div className="mt-50">
        <h3>5Q. Create a component that toggles between two views: "Login" and "Logout".</h3>
        <button onClick={handleToggle}>{toggle ? "Login" : "Logout"}</button>
      </div>
    </div>
  );
};

export default Toggles;