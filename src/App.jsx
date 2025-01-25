import React from "react";
import Home from "./Components/Pages/Home";
import RecipeProvider from "./Components/RecipeContext";
import { Route, Routes } from "react-router-dom";
import AllRecipes from "./Components/Pages/AllRecipes";
import SavedRecipes from "./Components/Pages/SavedRecipes";
import RecipeDetails from "./Components/Pages/RecipeDetails";

function App() {
  return (
    <RecipeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved-recipes" element={<SavedRecipes />} />
        <Route path="/recipe/:recipeLabel" element={<RecipeDetails />} />
        <Route path="/all-recipes" element={<AllRecipes />} />
      </Routes>
    </RecipeProvider>
  );
}

export default App;
