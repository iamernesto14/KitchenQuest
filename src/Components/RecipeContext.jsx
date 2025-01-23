import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [chineseRecipes, setChineseRecipes] = useState([]); // State for Chinese recipes
  const [frenchRecipes, setFrenchRecipes] = useState([]); // State for French recipes



  const url = "https://api.edamam.com/api/recipes/v2";
  const appId = "a01f6407";
  const apiKey = "18a2add0eb54955b914af9f22cda0d33";

  const fetchData = async (category) => {
    setLoading(true);
    setError(null); // Reset error before fetching
    try {
      const response = await axios.get(url, {
        params: {
          type: "public",
          q: category,
          app_id: appId,
          app_key: apiKey,
        },
      });
      console.log("Fetched data", response.data);
      console.log("Recipe Hits", response.data.hits);
      setRecipes(response.data.hits);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setError("Failed to fetch data");
      setLoading(false);
    }
  };

  const fetchChineseRecipes = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(url, {
        params: {
          type: "public",
          q: "Chinese",
          app_id: appId,
          app_key: apiKey,
        },
      });
      setChineseRecipes(response.data.hits); // Set Chinese recipes
    } catch (error) {
      setError("Failed to fetch recipes");
    } finally {
      setLoading(false);
    }
  };

  const fetchFrenchRecipes = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(url, {
        params: {
          type: "public",
          q: "French",
          app_id: appId,
          app_key: apiKey,
        },
      });
      setFrenchRecipes(response.data.hits); // Set French recipes
    } catch (error) {
      setError("Failed to fetch French recipes");
    } finally {
      setLoading(false);
    }
  };

  // fetchData();
  const handleSearch = () => {
    if (query.trim()) {
      fetchData(query);
      setQuery("")
    } else {
      setError("Search query cannot be empty.");
    }
  };

  return (
    <RecipeContext.Provider
      value={{
        loading,
        error,
        recipes,
        setRecipes,
        fetchData,
        query,
        setQuery,
        handleSearch,
        fetchData,
        chineseRecipes,
        fetchChineseRecipes,
        frenchRecipes,
        fetchFrenchRecipes
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
