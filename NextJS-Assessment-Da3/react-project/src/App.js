import AuthToggle from "./components/AuthToggle";
import { ThemeProvider, UserProvider } from "./Context";
import ThemeToggler from "./components/ThemeToggler";
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";

import './App.css';

function App() {
  return (
    <div className="container">
      <AuthToggle />
      {/* ThemeProvider */}
      <ThemeProvider>
        <ThemeToggler />
      </ThemeProvider>
      {/* UserProvider */}
      <UserProvider>
        <UserProfile />
        <Login />
      </UserProvider>
    </div>
  );
}

export default App;
