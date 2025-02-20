import { useTheme } from "../../Context";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="container min-height300">
      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default ThemeToggler;