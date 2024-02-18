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
import { useNavigate } from "react-router-dom";
import { IconButton } from '@mui/material';
import { useEffect } from 'react';


export default function SearchBar() {
  const [query,setQuery]=useState('')
  const [recipes, setRecipes]=useState([])
  const navigate = useNavigate();


  const handleRecipeClick = (recipe) => {
    console.log(recipe)
    navigate(`/recipe/${recipe.idMeal}`, { state: { recipe } });
  }


  useEffect(()=>{
    handleSearch(query)
  },[])



  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      setRecipes(response.data.meals); 
      // console.log(response)
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const imageStyle = {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    margin: 0,
    padding: 0,
    height:"70vh",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://cdn.pickuplimes.com/cache/07/4d/074d68fe6284ba5090730004d49bb40a.jpg)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    
  };

  const textStyle = {
    fontFamily: 'Merriweather', 
    fontSize: '50px', 
    fontWeight: 'bold', 
    color: '#333', 
    textAlign: 'center', 
    backgroundColor: '#F0F0F0' ,
    padding:"20px"
  };



  return (
    <div style={{textAlign :'center'}  }>
      <div style={imageStyle}>
      <FormControl sx={{ m: 1, width: "80%", backgroundColor:"#e0f2f1", borderRadius:"15px"   }} color='success' variant="outlined" >
        <InputLabel htmlFor="SearchBar">Search for recepies</InputLabel>
        <OutlinedInput
          id="query"
          onSubmit={()=>handleSearch(query)}
          onChange={(e)=>setQuery(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton>
              <SearchIcon 
                onClick={()=>handleSearch(query)}
                aria-label="Search for recepies"
                edge="end"
              >
              </SearchIcon>
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
        </div>

          <div style={textStyle}>
            Recipes
          </div>



      <Box sx={{ flexGrow: 1 , backgroundColor:"#F0F0F0", display:"flex", justifyContent:"space-around"}}>
      <Grid container spacing={3} width="100%">
          {recipes.map(recipe=>(
            <Grid key={recipe.idMeal} xs={12} sm={6} md={4} lg={4} sx={{marginLeft:""}}>
              <RecipeCard key={recipe.idMeal} recipe={recipe} onClick={() => handleRecipeClick(recipe)}  />
            </Grid>
           ))}
    </Grid>
    </Box>


      </div>
  );
}
