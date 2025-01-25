import React, { useContext } from "react";
import { FiClock } from "react-icons/fi";
import { MdOutlineBookmark, MdOutlineBookmarkAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { RecipeContext } from "./RecipeContext";

function RecipeCard({ recipe, width }) {
  const { toggleRecipeSave, savedRecipes } = useContext(RecipeContext);
  const isSaved = savedRecipes.some((saved) => saved.uri === recipe.uri);

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
        <Link
          to={`/recipe/${encodeURIComponent(recipe.label)}`}
          className="block"
        >
          <h3 className="font-semibold mb-4 hover:text-main-700">
            {recipe.label}
          </h3>
        </Link>
        <div className="flex justify-between items-center dark:bg-main-600">
          <div className="flex items-center gap-2">
            <FiClock />
            <span className="text-sm">{recipe.totalTime} mins</span>
          </div>
          <button
            onClick={() => toggleRecipeSave(recipe)}
            className="text-yellow-600 hover:text-yellow-700"
          >
            {isSaved ? <MdOutlineBookmark size={24} /> : <MdOutlineBookmarkAdd size={24} />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
