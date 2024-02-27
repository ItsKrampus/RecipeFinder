import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function RecipeCard({ recipe, onClick }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const onClickWithTimeout = () => {
    setTimeout(() => {
      onClick();
    }, 250);
  };

  const toggleFavorite = () => {
    setIsFavorite(prevState => !prevState);    
  };

  return (
    <motion.div key={recipe.idMeal} whileHover={{ scale: 1.02 }} style={{ display: 'flex', flexWrap: 1 }}>
      <Card sx={{ height: '300px', padding: "0px" }} raised="true">
        <CardActionArea style={{ flexGrow: 1 }} onClick={onClickWithTimeout}>
          <CardMedia
            component="img"
            height="140"
            image={recipe.strMealThumb}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" >
              {recipe.strMeal}
            </Typography >
            <Typography variant="body2" color="text.secondary" sx={{ padding: "24px" }}>
              {recipe.strInstructions.split(' ').slice(0, 20).join(' ').toLowerCase()}...
            </Typography>
          </CardContent>
        </CardActionArea>
        <IconButton onClick={toggleFavorite} color={isFavorite ? 'error' : 'default'} style={{ position: 'absolute', bottom: '3px', right: '3px' }}>
          <FavoriteIcon />
        </IconButton>
      </Card>
    </motion.div>
  );
}
