import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { motion } from 'framer-motion';
import Recipe from './Recipe';




export default function RecipeCard({recipe}) {
  return (

    <motion.div whileHover={{scale:1.01}}>
    <Card sx={{ height: '100%' }}>
      <CardActionArea   href="/Recipe"
 >
        <CardMedia
          component="img"
          height="140"
          image={recipe.strMealThumb}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
            {recipe.strMeal}
          </Typography >
          <Typography variant="body2" color="text.secondary">
            {recipe.strInstructions.split(' ').slice(0, 20).join(' ')}...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </motion.div>
  );
}