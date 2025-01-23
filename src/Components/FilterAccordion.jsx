import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FilterAccordion = ({
  activeAccordion,
  toggleAccordion,
  dietLabels,
  healthLabels,
  dishType,
  cuisineType,
  mealType
}) => {
  return (
    <div className="p-4 pb-[80px] space-y-4">
      {/* Diet Accordion */}
      <div>
        <div
          className="cursor-pointer font-semibold flex justify-between items-center"
          onClick={() => toggleAccordion("diet")}
        >
          <span>Diet</span>
          <span>{activeAccordion === "diet" ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </div>
        {activeAccordion === "diet" && (
          <div className="mt-2 space-y-2 max-h-60 overflow-y-auto">
            {dietLabels.map((label, index) => (
              <button
                key={index}
                className="text-sm bg-main-500 text-white px-3 py-1 border mx-1 border-main-100 rounded-md hover:bg-main-400"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Health Accordion */}
      <div>
        <div
          className="cursor-pointer font-semibold flex justify-between items-center"
          onClick={() => toggleAccordion("health")}
        >
          <span>Health</span>
          <span>{activeAccordion === "health" ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </div>
        {activeAccordion === "health" && (
          <div className="mt-2 space-y-2 max-h-60 overflow-y-auto">
            {healthLabels.map((label, index) => (
              <button
                key={index}
                className="text-sm bg-main-500 text-white px-3 py-1 border mx-1 border-main-100 rounded-md hover:bg-main-400"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Dish Accordion */}
      <div>
        <div
          className="cursor-pointer font-semibold flex justify-between items-center"
          onClick={() => toggleAccordion("dish")}
        >
          <span>Dish</span>
          <span>{activeAccordion === "dish" ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </div>
        {activeAccordion === "dish" && (
          <div className="mt-2 space-y-2 max-h-60 overflow-y-auto">
            {dishType.map((label, index) => (
              <button
                key={index}
                className="text-sm bg-main-500 text-white px-3 py-1 border mx-1 border-main-100 rounded-md hover:bg-main-400"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Cuisine Accordion */}
      <div>
        <div
          className="cursor-pointer font-semibold flex justify-between items-center"
          onClick={() => toggleAccordion("cuisine")}
        >
          <span>Cuisine</span>
          <span>{activeAccordion === "cuisine" ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </div>
        {activeAccordion === "cuisine" && (
          <div className="mt-2 space-y-2 max-h-60 overflow-y-auto">
            {cuisineType.map((label, index) => (
              <button
                key={index}
                className="text-sm bg-main-500 text-white px-3 py-1 border border-main-100 mx-1 rounded-md hover:bg-main-400"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Meal Accordion */}
      <div>
        <div
          className="cursor-pointer font-semibold flex justify-between items-center"
          onClick={() => toggleAccordion("meal")}
        >
          <span>Meal</span>
          <span>{activeAccordion === "meal" ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </div>
        {activeAccordion === "meal" && (
          <div className="mt-2 space-y-2 max-h-60 overflow-y-auto">
            {mealType.map((label, index) => (
              <button
                key={index}
                className="text-sm bg-main-500 text-white px-3 py-1 border border-main-100 mx-1 rounded-md hover:bg-main-400"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterAccordion;
