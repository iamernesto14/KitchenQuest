import React, { useEffect } from "react";
import RecipeCard from "./RecipeCard";

function LatestRecipes({ fetchRecipes, title, recipes, error}) {
  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="px-4 md:px-12 lg:px-20 mt-10">
      <h2 className="text-2xl mb-4">{title}</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="overflow-x-auto">
        <div className="flex gap-4">
          {recipes.length > 0 ? (
            recipes.map((recipeObj, index) => (
              <div key={index} className="flex-shrink-0">
                <RecipeCard recipe={recipeObj.recipe} width="w-56" />
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center w-full">
              No recipes found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LatestRecipes;