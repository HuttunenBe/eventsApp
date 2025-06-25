import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState, useEffect } from "react";
import "./header.css";
import "../../App.css";

function DarkModeToggle() {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("darkMode");
    }
  }, []);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);

    const theme = checked ? "dark" : "light";
    if (checked) {
      document.body.classList.add("darkMode");
    } else {
      document.body.classList.remove("darkMode");
    }

    localStorage.setItem("theme", theme);
  };

  return (
    <>
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={30}
        sunColor = "#9370db"
        moonColor="#FFF9C4"
      />
    </>
  );
}

export default DarkModeToggle;
