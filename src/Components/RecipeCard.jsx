import React from "react";
import { FiClock } from "react-icons/fi";
import { MdOutlineBookmarkAdd } from "react-icons/md";

function RecipeCard({ recipe, width }) {
  return (
    <div
      className={`rounded-lg shadow-sm overflow-hidden ${width} bg-white dark:bg-main-600 dark:text-main-100 hover:shadow-md transition-shadow cursor-pointer`}
    >
      <img
        src={recipe.image}
        alt={recipe.label}
        className="w-full h-40 object-cover"
      />
      <div className="p-3 bg-white dark:bg-main-600">
        <h3 className="font-semibold mb-4 hover:text-main-700">{recipe.label}</h3>

        <div className="flex justify-between items-center dark:bg-main-600">
          <div className="flex items-center gap-2">
            <FiClock />
            <span className="text-sm">{recipe.totalTime} mins</span>
          </div>
          <button>
            <MdOutlineBookmarkAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
