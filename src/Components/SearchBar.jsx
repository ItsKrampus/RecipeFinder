import SearchIcon from '@mui/icons-material/Search';
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import axios from "axios";
import { useState } from "react";
import RecipeCard from './RecipeCard';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';

export default function SearchBar() {
  const [query,setQuery]=useState('')
  const [recipes, setRecipes]=useState([])








  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      setRecipes(response.data.meals); // Update state with fetched recipes
      console.log(response)
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };


  return (
    <div style={{ textAlign: 'center' }}>
      <FormControl sx={{ m: 1, width: "80%",  }} variant="outlined">
        <InputLabel htmlFor="SearchBar">Search for recepies</InputLabel>
        <OutlinedInput
          id="query"
          onSubmit={()=>handleSearch(query)}
          onChange={(e)=>setQuery(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon 
                onClick={()=>handleSearch(query)}
                aria-label="Search for recepies"
                edge="end"
              >
              </SearchIcon>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>



      <Box sx={{ flexGrow: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>

      <Grid container spacing={3}>
          {recipes.map(recipe=>(
            <Grid key={recipe.idMeal} xs={12} sm={6} md={4} lg={3}>
              <RecipeCard key={recipe.idMeal} recipe={recipe}  />
            </Grid>
           ))}
    </Grid>
    </div>

    </Box>


      </div>
  );
}
