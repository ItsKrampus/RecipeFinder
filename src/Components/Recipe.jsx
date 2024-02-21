import { useLocation } from "react-router-dom";
import { Container, Typography, Grid, Link } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SendIcon from '@mui/icons-material/Send';
import { motion } from "framer-motion";
export default function Recipe() {
  let location = useLocation();
  const recipe = location.state.recipe;

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
                <motion.li whileHover={{scale:1.05}}  
                key={ingredientKey} style={{color:"#006400"}}>
                  {recipe[ingredientKey]} -{" "}
                  {recipe[`strMeasure${ingredientKey.slice(13)}`]}
                </motion.li>
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
