import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { motion } from 'framer-motion';
import Recipe from './Recipe';
import { Link } from 'react-router-dom';




export default function RecipeCard({recipe,onClick}) {

  const onClickWithTimeout=()=>{
    setTimeout(() => {
      onClick()
    }, 250);
  }

  return (

    <motion.div whileHover={{scale:1.02}} style={{display:'flex', flexWrap:1}} >
    <Card sx={{ height: '300px', width:"95%", padding:"0px" }} raised="true">
    <CardActionArea style={{flexGrow:1}}  onClick={onClickWithTimeout}
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
          <Typography variant="body2" color="text.secondary" sx={{padding:"23px"}}>
            {recipe.strInstructions.split(' ').slice(0, 20).join(' ').toLowerCase() }...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </motion.div>
  );
}