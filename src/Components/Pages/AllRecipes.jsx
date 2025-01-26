import React, { useContext, useEffect, useState } from "react";
import Header from "../Header";
import MobileNav from "../MobileNav";
import { RecipeContext } from "../RecipeContext";
import RecipeCard from "../RecipeCard";
import Footer from "../Footer";
import { IoFilterSharp } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import FilterAccordion from "../FilterAccordion";
import FilterMenu from "../FilterMenu";

function AllRecipes() {
  const { recipes, loading, error, fetchData, handleSearch, query, setQuery } = useContext(RecipeContext);
  const [allRecipes, setAllRecipes] = useState("wine");
  const [isFilterMenuOpen, setFilterMenuOpen] = useState(false);
  const [isButtonFixed, setButtonFixed] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  useEffect(() => {
    fetchData(allRecipes);


    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
      handleSearch();
    }, []);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const isBottom = scrollY + windowHeight >= documentHeight;

      if (scrollY > 100 && !isBottom && !isButtonFixed) {
        setButtonFixed(true);
      } else if ((isBottom || scrollY <= 100) && isButtonFixed) {
        setButtonFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isButtonFixed]);

  const toggleAccordion = (accordionName) => {
    setActiveAccordion((prev) =>
      prev === accordionName ? null : accordionName
    );
  };

  const dietLabels = Array.from(
    new Set(
      recipes.flatMap((recipe) =>
        recipe.recipe.dietLabels ? recipe.recipe.dietLabels : []
      )
    )
  );

  const healthLabels = Array.from(
    new Set(
      recipes.flatMap((recipe) =>
        recipe.recipe.healthLabels ? recipe.recipe.healthLabels : []
      )
    )
  );

  const dishType = Array.from(
    new Set(
      recipes.flatMap((recipe) =>
        recipe.recipe.dishType ? recipe.recipe.dishType : []
      )
    )
  );
  const cuisineType = Array.from(
    new Set(
      recipes.flatMap((recipe) =>
        recipe.recipe.cuisineType ? recipe.recipe.cuisineType : []
      )
    )
  );
  const mealType = Array.from(
    new Set(
      recipes.flatMap((recipe) =>
        recipe.recipe.mealType ? recipe.recipe.mealType : []
      )
    )
  );

  return (
    <div className="bg-main-200 dark:bg-main-900 dark:text-main-100 min-h-screen flex flex-col">
      <Header />
      {/* Main Content */}
      <div className="lg:flex mt-16 h-full flex-grow">
        {/* Side Menu */}
        <div
          className={`top-0 pt-16 left-0 hidden lg:flex flex-col w-full lg:w-[25%] h-screen bg-main-700 text-main-100 dark:bg-main-300 shadow-lg fixed`}
        >
          {/* Close Button */}
          <div className="flex justify-between items-center p-4">
            <h2 className="text-lg font-semibold">Filter Recipes</h2>
            <button className="text-2xl text-gray-600 dark:text-gray-300"></button>
          </div>

          {/* Search Input */}
          <div className="mx-4 pl-3 flex gap-1 items-center justify-center border rounded overflow-hidden border-main-100">
            <LuSearch className="" />
            <input
              type="text"
              value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyPress}
              placeholder="Search recipe..."
              className="w-full px-2 py-2 outline-none focus:outline-none bg-main-700 dark:bg-main-300 dark:border-main-600 dark:text-main-100"
            />
          </div>

          {/* FilterAccordion Component */}
          <FilterAccordion
            activeAccordion={activeAccordion}
            toggleAccordion={toggleAccordion}
            dietLabels={dietLabels}
            healthLabels={healthLabels}
            dishType={dishType}
            cuisineType={cuisineType}
            mealType={mealType}
          />

      
        </div>

        {/* All Recipes */}
        <div className="flex-grow lg:w-[75%] p-4 overflow-y-auto lg:ml-[25%]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">All Recipes</h3>
            {/* Filter button is hidden on large screens */}
            {!isLargeScreen && (
              <div
                className={`bg-gray-400 px-4 py-2 text-xl rounded transition-all duration-300 ${
                  isButtonFixed
                    ? "fixed bottom-[calc(4rem+15px)] right-4 shadow-lg z-50"
                    : ""
                }`}
              >
                <button
                  className="flex items-center gap-2"
                  onClick={() => setFilterMenuOpen(true)}
                >
                  <IoFilterSharp /> Filter
                </button>
              </div>
            )}
          </div>

          {/* Loading and Error States */}
          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}

          {/* Recipe Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {recipes.length > 0
              ? recipes.map((recipeObj, index) => (
                  <RecipeCard key={index} recipe={recipeObj.recipe} />
                ))
              : !loading && (
                  <p className="text-gray-500 col-span-2 md:col-span-3">
                    Recipe not found.
                  </p>
                )}
          </div>
        </div>
      </div>

      <Footer className="ml-[25%]" />
      <MobileNav />

      {/* Filter menu */}
      <FilterMenu
      query={query}
      setQuery={setQuery}
      onKeyDown={handleKeyPress}
        isOpen={isFilterMenuOpen}
        onClose={() => setFilterMenuOpen(false)}
      />
    </div>
  );
}

export default AllRecipes;
