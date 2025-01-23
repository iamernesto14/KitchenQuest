import React from "react";

function MealCategory({ selectedCategory, onCategoryClick }) {
  const categories = ["Breakfast", "Lunch", "Dinner", "Snacks"];

  return (
    <div className="flex justify-center mt-6">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 md:px-16 text-lg font-medium relative transition-all duration-300 ${
            selectedCategory === category
              ? "text-yellow-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-yellow-600"
              : "text-gray-600 dark:text-white hover:text-yellow-600"
          }`}
          onClick={() => onCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default MealCategory;
