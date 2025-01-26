import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [chineseRecipes, setChineseRecipes] = useState([]);
  const [frenchRecipes, setFrenchRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);

  const url = "https://api.edamam.com/api/recipes/v2";
  const appId = "3c96fb16";
  const apiKey = "d892c4b57d72b3ce83051bb8a8aa4bc5";

  // Fetching recipes
  const fetchData = async (category) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(url, {
        params: {
          type: "public",
          q: category,
          app_id: appId,
          app_key: apiKey,
        },
      });
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
      setChineseRecipes(response.data.hits);
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
      setFrenchRecipes(response.data.hits);
    } catch (error) {
      setError("Failed to fetch French recipes");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (query.trim()) {
      fetchData(query);
    }
  };

  const toggleRecipeSave = (recipe) => {
    setSavedRecipes((prev) => {
      const isAlreadySaved = prev.some((saved) => saved.uri === recipe.uri);
      const updatedRecipes = isAlreadySaved
        ? prev.filter((saved) => saved.uri !== recipe.uri)
        : [...prev, recipe];

      localStorage.setItem("savedRecipes", JSON.stringify(updatedRecipes));
      return updatedRecipes;
    });
  };

  useEffect(() => {
    const storedRecipes =
      JSON.parse(localStorage.getItem("savedRecipes")) || [];
    setSavedRecipes(storedRecipes);
  }, []);

  return (
    <RecipeContext.Provider
      value={{
        loading,
        error,
        recipes,
        setRecipes,
        fetchData,
        toggleRecipeSave,
        savedRecipes,
        query,
        setQuery,
        handleSearch,
        fetchData,
        chineseRecipes,
        fetchChineseRecipes,
        frenchRecipes,
        fetchFrenchRecipes,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
