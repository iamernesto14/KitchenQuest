import React, { useState, useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { GoBookmark, GoBookmarkFill } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState(location.pathname);
  const [isSavedActive, setIsSavedActive] = useState(
    location.pathname === "/saved-recipes"
  );
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Set the theme on initial load based on saved preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Update localStorage and root element class based on theme
  useEffect(() => {
    if (isDarkMode) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Update the active state whenever the location changes
  useEffect(() => {
    setIsSavedActive(location.pathname === "/saved-recipes");
  }, [location.pathname]);

  return (
    <header className="flex justify-between items-center fixed top-0 w-full z-40 bg-white dark:bg-main-600 dark:text-main-100 px-5 h-[4.5rem] shadow">
      {/* Logo Section */}
      <div className="font-bold text-xl dark:text-main-100" aria-label="Logo">
        LOGO
      </div>

      {/* Navigation Section */}
      <nav>
        <ul className="hidden md:flex uppercase gap-10 items-center justify-center">
          {/* Home button */}
          <li
            className={`relative ${
              activeButton === "/"
                ? "text-orange-500"
                : "text-black dark:text-main-100"
            }`}
            onClick={() => setActiveButton("/")}
          >
            <Link to="/" className="block">
              Home
            </Link>
            {activeButton === "/" && (
              <div
                className="absolute bottom-0 left-0 w-full border-b-2 border-orange-500"
                aria-hidden="true"
              ></div>
            )}
          </li>

          {/* Recipe button */}
          <li
            className={`relative ${
              activeButton === "/all-recipes"
                ? "text-orange-500"
                : "text-black dark:text-main-100"
            }`}
            onClick={() => setActiveButton("/all-recipes")}
          >
            <Link to="/all-recipes" className="block">
              Recipe
            </Link>
            {activeButton === "/all-recipes" && (
              <div
                className="absolute bottom-0 left-0 w-full border-b-2 border-orange-500"
                aria-hidden="true"
              ></div>
            )}
          </li>
        </ul>
      </nav>

      {/* Actions Section */}
      <div className="flex gap-5 justify-center items-center">
        {/* Dark mode toggle */}
        <button
          onClick={toggleDarkMode}
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? <BsSun size={24} /> : <BsMoon size={24} />}
        </button>

        {/* Saved button */}
        <Link
          to="/saved-recipes"
          className="hidden md:flex bg-orange-400 p-3 gap-1 justify-center rounded-md items-center"
          aria-label="Saved Recipes"
        >
          {isSavedActive ? (
            <GoBookmarkFill className="text-[22px]" />
          ) : (
            <GoBookmark className="text-[22px]" />
          )}
          <p>Saved Recipes</p>
        </Link>
      </div>
    </header>
  );
}

export default Header;
