import { useContext, useState, useEffect } from "react";
import { Context } from "../App";
import RecipeCard from "./RecipeCard";
import { Box, Grid } from "@mui/material";
import axios from "axios";
import "../Favorites.css";
import { useNavigate } from "react-router-dom";

const URL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

export default function Favorites() {
  const [favorites, setFavorites] = useContext(Context);
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const responses = [];
      for (const id of favorites) {
        try {
          const response = await axios.get(`${URL}${id}`);
          responses.push(response.data.meals);
        } catch (error) {
          console.error("Error fetching data", id, error);
        }
      }
      const allMeals = responses.flat();
      setRecipes(allMeals);
    };

    fetchData();
  }, [favorites]);

  const handleRecipeClick = (recipe) => {
    navigate(`/recipe/${recipe.idMeal}`);
  };

  return (
    <div style={{ height: "100vh", backgroundColor: "#F0F0F0" }}>
      <div className="imageStylefav"></div>
      <div className="textStyle">Your Favorite Recipes</div>

      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "#F0F0F0",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Grid container spacing={3} width="100%">
          {recipes.map((recipe) => (
            <Grid key={recipe.idMeal} item xs={12} sm={6} md={4} lg={4}>
              <RecipeCard
                key={recipe.idMeal}
                recipe={recipe}
                onClick={() => handleRecipeClick(recipe)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
