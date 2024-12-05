import React, { useState } from "react";

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "10px 20px",
        fontSize: "1.2em",
        backgroundColor: isDarkMode ? "#444" : "#ccc",
        color: isDarkMode ? "#fff" : "#333",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        zIndex: 1000,
      }}
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default DarkModeToggle;
