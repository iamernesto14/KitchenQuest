import React from "react";
import Home from "./Components/Pages/Home";
import RecipeProvider from "./Components/RecipeContext";
import { Route, Routes } from "react-router-dom";
import AllRecipes from "./Components/Pages/AllRecipes";

function App() {
  return (
    <RecipeProvider>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/all-recipes" element={<AllRecipes />} />
      </Routes>
    </RecipeProvider>
  );
}

export default App;
