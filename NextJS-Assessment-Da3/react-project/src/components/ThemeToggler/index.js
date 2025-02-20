import { useTheme } from "../../Context";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="container">
      <div className="min-height300 mt-50">
      <h3>Q2. Create a simple ThemeContext that toggles between light and dark themes. Implement a ThemeProvider that supplies the current theme, and a ThemeToggler component that switches between themes. Make sure that the theme changes dynamically in child components.</h3>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      </div>
    </div>
  );
};

export default ThemeToggler;