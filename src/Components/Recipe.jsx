import { Container, Typography, Grid, Link } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { motion } from "framer-motion";
import axios from "axios";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";


const URL="https://www.themealdb.com/api/json/v1/1/lookup.php?i="


export default function Recipe() {
  const { id } = useParams();
  const [recipe,setRecipe]= useState([])

  async function fetchData() {
    try {
      const response = await axios.get(`${URL}${id}`);
      setRecipe(response.data.meals[0])
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  }
  
  useEffect(()=>{
    fetchData()
    
  },[])





  return (
    
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        <Typography variant="h3" gutterBottom sx={{color:'#416D19'}}>
        {recipe.strMeal}
        <hr></hr>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            style={{ width: "100%", height: "auto", marginBottom: 20, borderRadius:"10px" }}
          />
          <Typography variant="h5" gutterBottom >
            <span style={{fontWeight:"bold"}}>Category: </span>
             {recipe.strCategory}
          </Typography>
          <Typography variant="h6" gutterBottom>
            <span style={{fontWeight:"bold"}}>Area: </span>
            {recipe.strArea}
          </Typography>
         
        </Grid>
        <Grid item xs={12} md={6} >
          <Typography variant="h5" gutterBottom fontWeight="bold">
            Instructions:
            <Typography variant="body1" gutterBottom>
              {recipe.strInstructions}
            </Typography>
          </Typography>
          <Typography variant="h7" gutterBottom fontWeight="bold">
            Ingredients:
          </Typography>
          <ul>
            {Object.keys(recipe)
              .filter((key) => key.startsWith("strIngredient") && recipe[key])
              .map((ingredientKey) => (
                <li  
                key={ingredientKey} style={{color:"#006400"}}>
                  {recipe[ingredientKey]} -{" "}
                  {recipe[`strMeasure${ingredientKey.slice(13)}`]}
                </li>
              ))}
          </ul>



          {recipe.strYoutube && (
            <h2 style={{display:'flex', alignItems:"center", }}> Video Tutorial :
            <Link
              href={recipe.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div whileHover={{scale:1.1}}>
              <YouTubeIcon
                sx={{ color: "red", width: "40px", height: "50px", paddingTop:"10px" }}
              ></YouTubeIcon>
              </motion.div>
            </Link>
            </h2>
          )}
   

        </Grid>
      </Grid>
    </Container>
  );
}
