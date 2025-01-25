import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RecipeContext } from "../RecipeContext";
import MobileNav from "../MobileNav";
import Header from "../Header";
import Footer from "../Footer";

function RecipeDetails() {
  const {
    recipes,
    savedRecipes = [],
    toggleSaveRecipe,
  } = useContext(RecipeContext);

  const { recipeLabel } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("bg-main-100", "dark:bg-main-900");

    return () => {
      document.body.classList.remove("bg-main-900", "dark:bg-main-900");
    };
  }, []);

  useEffect(() => {
    const foundRecipe = recipes.find(
      (rec) => rec.recipe?.label === decodeURIComponent(recipeLabel)
    );

    if (foundRecipe) {
      setRecipe(foundRecipe.recipe);

      const isRecipeSaved = savedRecipes.some(
        (savedRecipe) => savedRecipe.recipe?.label === foundRecipe.recipe?.label
      );
      setIsSaved(isRecipeSaved);
    } else {
      setRecipe(null);
    }
  }, [recipeLabel, recipes, savedRecipes]);

  if (!recipe) {
    return <div className="p-4 text-center">Recipe not found!</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="p-4 mt-8 md:flex items-start justify-evenly dark:text-main-100 gap-10 md:mt-20 md:mx-32 flex-grow">
        <div className="flex-1">
          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="inline-block mt-10 md:mt-0 mb-6 bg-main-100 dark:bg-main-600 py-2 px-6 rounded shadow-[0_0_5px_rgba(0,0,0,0.3)] text-gray-700 dark:text-main-100 hover:bg-main-200 transition-all duration-200"
          >
            &larr; Back
          </button>
          <img
            src={recipe.image || ""}
            alt={recipe.label || "Recipe"}
            className="w-full h-64 md:h-96 object-cover mb-4 rounded-lg"
          />
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-center gap-10">
            <h1 className="text-[26px] leading-7 font-bold mb-4">
              {recipe.label || "No Title"}
            </h1>
          </div>
          <p className="text-[12px] text-main-400">
            by {recipe.source || "Unknown"}
          </p>

          <div className="flex items-center justify-evenly my-10">
            <div className="flex items-center flex-col justify-center">
              <p className="text-2xl font-semibold">
                {recipe.ingredients?.length || 0}
              </p>
              <p>Ingredients</p>
            </div>
            <div className="w-[2px] h-14 bg-main-900 dark:bg-main-100"></div>
            <div className="flex items-center flex-col justify-center">
              <p className="text-2xl font-semibold">{recipe.totalTime || 0}</p>
              <p>Minutes</p>
            </div>
            <div className="w-[2px] h-14 bg-main-900 dark:bg-main-100"></div>
            <div className="flex items-center flex-col justify-center">
              <p className="text-2xl font-semibold">
                {recipe.calories?.toFixed(2) || "0.00"}
              </p>
              <p>Calories</p>
            </div>
          </div>

          <div className="px-2 py-1 mb-10 bg-transparent border border-1 border-main-900 dark:border-main-100 rounded-lg w- inline-block">
            {recipe.cuisineType?.[0] || "Unknown"}
          </div>

          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          <div className="w-full h-[1px] bg-main-900 dark:bg-main-100 my-5"></div>
          <ul className="list-disc list-inside mb-4">
            {recipe.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient.text}</li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mb-2 mt-10">Instructions</h2>
          <p>{recipe.instructions || "No instructions available."}</p>
        </div>
      </div>
      <Footer />
      <MobileNav />
    </div>
  );
}

export default RecipeDetails;
