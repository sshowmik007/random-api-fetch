import React from "react";
import { useEffect, useState } from "react";

const Buttons = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme:dark)");
  const options = [
    { icon: "sunny", text: "light" },
    {
      icon: "moon",
      text: "dark",
    },
    {
      icon: "desktop-outline",
      text: "system",
    },
  ];
  //   default on loading
  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
  onWindowMatch();

  //   to set the theme
  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");

      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);

  //   system default settings
  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  return (
    <div className="fixed top-5 right-10 dark:bg-slate-800 bg-gray-100 rounded  ">
      {/* toggle Button */}
      {options?.map((opt) => (
        <button
          key={opt.text}
          onClick={() => setTheme(opt.text)}
          className={`hover:scale-125 transition duration-300 ease-in-out w-8 h-8  text-xl rounded-full m-1 ${
            theme === opt.text && "text-sky-600"
          }`}
        >
          <ion-icon name={opt.icon}></ion-icon>
        </button>
      ))}
    </div>
  );
};

export default Buttons;
