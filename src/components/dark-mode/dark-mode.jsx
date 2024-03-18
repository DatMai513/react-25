import "./theme.css";
import useLocalStorage from "./useLocalStorage";

export default function DarkMode() {
	const [theme, setTheme] = useLocalStorage("theme", "dark");

	const handleToggle = () => {
		setTheme(theme === "light" ? "dark" : "light")
	}

  return (
    <div className="light-dark-mode" data-theme={theme}> 
      <div className="container">
        <p>Hello World!</p>
        <button onClick={handleToggle}>Change Theme</button>
      </div>
    </div>
  );
}
