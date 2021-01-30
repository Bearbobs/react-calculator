//Implimentation of Light/Dark mode styling using localstorage and css variables
import React, { useState } from "react";
import "../styles/LightDarkMode.css";

const LightDarkMode = () => {
  const body = document.body;
  const [theme, setTheme] = useState("light");
  let temp;

  //check localstorage if styling exist else set light theme as default
  if (localStorage) {
    temp = localStorage.getItem("theme");
  }

  if (temp === "light" || temp === "dark") {
    body.classList.add(temp);
  } else {
    body.classList.add("light");
  }

  // function to handle Light Mode toggle
  const switchThemeLight = (e) => {
    if (theme === "dark") {
      body.classList.replace("dark", "light");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  // function to handle Dark Mode toggle
  const switchThemeDark = (e) => {
    if (theme === "light") {
      body.classList.replace("light", "dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <div>
      <button
        className={"button-lightdark"}
        onClick={(e) => switchThemeLight(e)}
      >
        LightMode{" "}
      </button>
      <button
        className={"button-lightdark"}
        onClick={(e) => switchThemeDark(e)}
      >
        DarkMode{" "}
      </button>
    </div>
  );
};

export default LightDarkMode;
