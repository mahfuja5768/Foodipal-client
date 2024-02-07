import React, { useEffect, useState } from "react";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";

const ThemeToggler = () => {
  const [showIcon, setShowIcon] = useState(true);

  const handleToggleTheme = () => {
    const isDarkTheme = document.body.classList.contains("dark-theme");
    document.body.classList.toggle("dark-theme", !isDarkTheme);
    const themePreference = isDarkTheme ? "light" : "dark";
    localStorage.setItem("themePreference", themePreference);
    setShowIcon(!showIcon);
  };

  useEffect(() => {
    const themePreference = localStorage.getItem("themePreference");

    // Apply the theme preference if it exists
    if (themePreference === "dark") {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, []);
  return (
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        onClick={handleToggleTheme}
        className="toggle toggle-red"
      />
      <span>
        {showIcon ? (
          <FaMoon className="text-xl cursor-pointer" />
        ) : (
          <FaSun className="text-xl cursor-pointer" />
        )}
      </span>
    </div>
  );
};

export default ThemeToggler;
