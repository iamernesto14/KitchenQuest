import React, { useContext, useEffect, useState } from "react";
import { RecipeContext } from "../RecipeContext";
import Header from "../Header";
import MobileNav from "../MobileNav";
import { LuSearch } from "react-icons/lu";
import { GiKnifeFork } from "react-icons/gi";
import RecipeCard from "../RecipeCard";
import Footer from "../Footer";
import LatestRecipes from "../LatestRecipes";
import MealCategory from "../MealCategory";
import { useNavigate } from "react-router-dom"; 
function Home() {
  const {
    loading,
    recipes,
    query,
    setQuery,
    handleSearch,
    error,
    fetchData,
    fetchChineseRecipes,
    fetchFrenchRecipes,
    chineseRecipes,
    frenchRecipes,
  } = useContext(RecipeContext);

  const [visibleRecipe, setVisibleRecipe] = useState(10);
  const [selectedCategory, setSelectedCategory] = useState("Breakfast");
  const [healthLabels, setHealthLabels] = useState([]);

  const navigate = useNavigate(); 
  useEffect(() => {
    if (selectedCategory) {
      fetchData(selectedCategory).then(() => {
        const labels = recipes.flatMap((recipeObj) =>
          recipeObj.recipe.healthLabels
        );
        setHealthLabels([...new Set(labels)]);
        setVisibleRecipe(10); 
      });
    }
  }, []);

  const handleCategoryClick = (category) => {
    if (selectedCategory !== category) {
      setSelectedCategory(category);
    }
  };

  const handleHealthLabelClick = (label) => {
    navigate("/all-recipes", { state: { filter: label } });
  };

  useEffect(() => {
    handleSearch();
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  const handleLoadMore = () => {
    setVisibleRecipe((prevVisible) => prevVisible + 5);
  };

  return (
    <div className="bg-main-200 dark:bg-main-900 dark:text-main-100 min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        {/* Hero Section */}
        <div className="relative flex items-center justify-center gap-4 flex-col h-[350px] mt-20 bg-hero-bg dark:bg-hero-bg2 bg-cover bg-center m-2 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl text-white font-bold">
              Your desire dish?
            </h1>
            <div className="mt-4">
              <div className="flex justify-between items-center bg-white dark:bg-main-900 w-[320px] md:w-[700px] rounded-md overflow-hidden shadow-md">
                <div className="flex items-center justify-center dark:bg-main-600 p-3 text-white">
                  <GiKnifeFork className="text-black text-lg dark:text-main-100" />
                </div>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search recipe..."
                  onKeyDown={handleKeyPress}
                  className="w-full outline-none px-2 py-2 text-gray-600 dark:text-main-100 dark:bg-main-900"
                />
                <div
                  className="flex items-center justify-center bg-yellow-600 p-3 text-white"
                  onClick={handleSearch}
                >
                  <LuSearch className="text-black text-lg cursor-pointer dark:text-main-100" />
                </div>
              </div>
            </div>
            <p className="text-white text-sm md:text-lg mt-2">
              Search any recipe. e.g burger, pizza, sandwich
            </p>
          </div>
        </div>

        {/* Meal Category Buttons */}
        <MealCategory
          selectedCategory={selectedCategory}
          onCategoryClick={setSelectedCategory}
        />

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}

        {/* Loading State */}
        {loading ? (
          <h1 className="text-red-500 text-2xl text-center">
            Loading Recipes. Please wait...
          </h1>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 py-4 px-4 md:px-12 lg:px-20">
            {recipes.length > 0 ? (
              recipes
                .slice(0, visibleRecipe)
                .map((recipeObj, index) => (
                  <RecipeCard key={index} recipe={recipeObj.recipe} />
                ))
            ) : (
              <p className="text-gray-500 col-span-2 md:col-span-3 text-center">
                No recipes found. Try another search.
              </p>
            )}
          </div>
        )}

        {/* Load More Button */}
        {visibleRecipe < recipes.length && (
          <div className="flex justify-center mt-4">
            <button
              onClick={handleLoadMore}
              className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* Latest Chinese and French Recipes Sections */}
      <div>
        <LatestRecipes
          title="Latest Chinese Recipes"
          fetchRecipes={fetchChineseRecipes}
          recipes={chineseRecipes}
          error={error}
        />

        <LatestRecipes
          title="Latest French Recipes"
          fetchRecipes={fetchFrenchRecipes}
          recipes={frenchRecipes}
          error={error}
        />
      </div>

      <div className="mt-8 px-4">
        <h2 className="text-4xl text-center font-semibold text-gray-700 dark:text-white mb-3">
          Choose your health preference.
        </h2>
        <p className="text-center mb-4">
          Choosing your health preference is an important step towards
          achieving a healthier lifestyle.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {healthLabels.map((label, index) => (
            <button
              key={index}
              onClick={() => handleHealthLabelClick(label)}
              className="px-3 py-2 bg-yellow-600 text-white rounded-md font-medium hover:bg-yellow-700 transition-all"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Footer section */}
      <Footer />
      <MobileNav />
    </div>
  );
}

export default Home;
