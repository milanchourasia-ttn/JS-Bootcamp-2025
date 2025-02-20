"use client";
import { useEffect, useState } from "react";

export default function Recipies() {
  const [recipes, setRecipes] = useState([]);

  // useEffect(() => {
  //   fetch("https://dummyjson.com/recipes")
  //     .then((response) => response.json())
  //     .then((data) => setRecipes(data.recipes.slice(0, 10)))
  //     .catch((error) => console.error("Error fetching recipes:", error));
  // }, []);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        const data_slice = data.recipes.slice(0, 10)
        setRecipes(data_slice);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchRecipes();
  }, []);
  return (
    <div className="container pb-[100px]">
      <h1 className="text-center py-[50px] font-extrabold text-[30px]">Recipes</h1>
      <table className="w-full border border-gray-300 rounded-lg">
        <thead>
          <tr>
            <th className="border border-gray-300 rounded-lg">ID</th>
            <th className="border border-gray-300 rounded-lg">Name</th>
            <th className="border border-gray-300 rounded-lg">Prep Time (Minutes)</th>
            <th className="border border-gray-300 rounded-lg">Servings</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe.id}>
              <td className="border border-gray-300 rounded-lg text-center">{recipe.id}</td>
              <td className="border border-gray-300 rounded-lg text-center">{recipe.name}</td>
              <td className="border border-gray-300 rounded-lg text-center">{recipe.prepTimeMinutes}</td>
              <td className="border border-gray-300 rounded-lg text-center">{recipe.servings}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
