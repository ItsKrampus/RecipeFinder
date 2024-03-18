import SearchIcon from "@mui/icons-material/Search";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import axios from "axios";
import { useState, useContext } from "react";
import RecipeCard from "./RecipeCard";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { useEffect } from "react";
import "../SearchBar.css";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  const handleRecipeClick = (recipe) => {
    navigate(`/recipe/${recipe.idMeal}`);
  };

  useEffect(() => {
    handleSearch(query);
  }, []);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      setRecipes(response.data.meals);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch(query);
    }
  };


  return (
    <div style={{ textAlign: "center" }}>
      <div className="imageStyle" >
        <FormControl
          sx={{
            m: 1,
            width: "80%",
            backgroundColor: "white",
            borderRadius: "5px",
          }}
          color="success"
            variant="outlined"
        >
          <InputLabel variant="filled" style={{color:"black"}}  htmlFor="SearchBar">Search for recepies</InputLabel>
          <OutlinedInput
            id="query"
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => handleSearch(query)}>
                  <SearchIcon
                    aria-label="Search for recepies"
                    edge="end"
                  ></SearchIcon>
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>

      <div className="textStyle">Recipes</div>
      <div>
        {recipes === null ? (
          <h1 className="textStyle" style={{ color: "red", margin: "0px" }}>
            No recipes found!
          </h1>
        ) : (
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
        )}
      </div>
    </div>
  );
}
