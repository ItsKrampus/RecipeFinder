import SearchIcon from '@mui/icons-material/Search';
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import axios from "axios";
import { useState } from "react";
import RecipeCard from './RecipeCard';

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
    <div>
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
        
        <div style={{display:"flex"}} >
          {recipes.map(recipe=>(
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
           ))}
        </div>



      </div>
  );
}
