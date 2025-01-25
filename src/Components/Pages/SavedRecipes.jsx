import React, { useContext } from "react";
import { RecipeContext } from "../RecipeContext";
import Header from "../Header";
import Footer from "../Footer";
import MobileNav from "../MobileNav";
import RecipeCard from "../RecipeCard";

const SavedRecipes = () => {
  const { savedRecipes } = useContext(RecipeContext);

  return (
    <div className="bg-main-200 dark:bg-main-900 dark:text-main-100 min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow p-4 mt-20">
        <h3 className="text-2xl font-bold mb-4">Saved Recipes</h3>
        {savedRecipes.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {savedRecipes.map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">No recipes saved yet.</p>
        )}
      </div>
      <Footer />
      <MobileNav />
    </div>
  );
};

export default SavedRecipes;
