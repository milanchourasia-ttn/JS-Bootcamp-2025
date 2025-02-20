import { useState } from "react";

const AuthToggle = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn((isLoggedIn) => !isLoggedIn);
  };

  return (
    <div className="container">
      <div className="mt-50">
        <h3>Q1. Create a component that shows different content based on whether the user is logged in or not (e.g., "Welcome back" or "Please log in"). Use a state hook to toggle the logged-in state and update the UI accordingly.        </h3>
        <button onClick={toggleLogin}>{isLoggedIn ? "Log Out" : "Log In"}</button>
        <h4 className={isLoggedIn ? "green":"red"}>{isLoggedIn ? "Welcome back!" : "Please log in"}</h4>
        
      </div>
    </div>
  );
};

export default AuthToggle;