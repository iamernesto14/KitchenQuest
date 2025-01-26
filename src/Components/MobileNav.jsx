import React from "react";
import { GoBookmark } from "react-icons/go";
import { GoHome } from "react-icons/go";
import { TiThMenuOutline } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";

function MobileNav() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className="bg-white dark:bg-main-600 dark:text-main-100 shadow fixed inset-x-0 bottom-0"
      aria-label="Mobile navigation"
    >
      <ul className="flex justify-between items-center md:hidden px-5 py-3">
        {/* All Recipe Button */}
        <li>
          <Link
            to="/all-recipes"
            className={`flex flex-col items-center ${
              isActive("/all-recipes") ? "text-orange-500" : ""
            }`}
            aria-current={isActive("/all-recipes") ? "page" : undefined}
          >
            <TiThMenuOutline className="text-2xl" aria-hidden="true" />
            <span className="text-sm">Recipe</span>
            {isActive("/all-recipes") && (
              <div
                className="w-full border-t-2 border-orange-500 mt-2"
                role="presentation"
              ></div>
            )}
          </Link>
        </li>

        {/* Home Button */}
        <li>
          <Link
            to="/"
            className={`flex flex-col items-center ${
              isActive("/") ? "text-orange-500" : ""
            }`}
            aria-current={isActive("/") ? "page" : undefined}
          >
            <GoHome className="text-2xl" aria-hidden="true" />
            <span className="text-sm">Home</span>
            {isActive("/") && (
              <div
                className="w-full border-t-2 border-orange-500 mt-2"
                role="presentation"
              ></div>
            )}
          </Link>
        </li>

        {/* Favorite Button */}
        <li>
          <Link
            to="/saved-recipes"
            className={`flex flex-col items-center ${
              isActive("/saved-recipes") ? "text-orange-500" : ""
            }`}
            aria-current={isActive("/saved-recipes") ? "page" : undefined}
          >
            <GoBookmark className="text-2xl" aria-hidden="true" />
            <span className="text-sm">Saved</span>
            {isActive("/saved-recipes") && (
              <div
                className="w-full border-t-2 border-orange-500 mt-2"
                role="presentation"
              ></div>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MobileNav;
