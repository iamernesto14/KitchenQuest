import React, { useState, useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { GoBookmark, GoBookmarkFill } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center fixed top-0 w-full z-40 bg-white dark:bg-main-600 dark:text-main-100 px-5 h-[4.5rem] shadow">
      <div className="font-bold text-xl dark:text-main-100">UberEat</div>
      <ul className="hidden md:flex uppercase gap-10 items-center justify-center">
        {/* Home button */}
        <li>Home</li>

        {/* Recipe button */}
        <li className={"relative"}>Recipe</li>
      </ul>
      <div className="flex gap-5 justify-center items-center">
        {/* Dark mode toggle */}
        <button>
          <BsSun size={24} />
        </button>

        {/* Saved button */}
        <div className="hidden md:flex bg-orange-400 p-3 gap-1 justify-center rounded-md items-center">
          <GoBookmarkFill className="text-[22px]" />

          <p>Saved Recipes</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
