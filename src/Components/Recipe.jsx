import { useLocation } from "react-router-dom";
import { Container, Typography, Grid, Link } from '@mui/material';


export default function Recipe() {
  let location = useLocation();
  const recipe = location.state.recipe;

  // Display recipe details
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
    <Typography variant="h4" gutterBottom>
      {recipe.strMeal}
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{ width: '100%', height:"auto", marginBottom: 20 }} />
        <Typography variant="h6" gutterBottom>
          Category: {recipe.strCategory}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Area: {recipe.strArea}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Ingredients:
        </Typography>
        <ul>
          {Object.keys(recipe)
            .filter(key => key.startsWith('strIngredient') && recipe[key])
            .map(ingredientKey => (
              <li key={ingredientKey}>
                {recipe[ingredientKey]} - {recipe[`strMeasure${ingredientKey.slice(13)}`]}
              </li>
            ))}
        </ul>
      </Grid>
      <Grid item xs={12} md={6}>
       
        <Typography variant="h5" gutterBottom>
          Instructions: 
          <Typography variant="body1" gutterBottom>
          {recipe.strInstructions}
        </Typography>
        </Typography>
       
        {recipe.strYoutube && (
          <Link href={recipe.strYoutube} target="_blank" rel="noopener noreferrer">
            Watch Video
          </Link>
        )}
        {recipe.strSource && (
          <Link href={recipe.strSource} target="_blank" rel="noopener noreferrer">
            Recipe Source
          </Link>
        )}
      </Grid>
    </Grid>
  </Container>
  );
}
