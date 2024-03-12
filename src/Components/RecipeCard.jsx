import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { motion } from "framer-motion";
import { Context } from "../App";

export default function RecipeCard({ recipe, onClick }) {
  const [favorites, setFavorites] = useContext(Context);
  const isFavorite = favorites.includes(recipe.idMeal);

  const onClickWithTimeout = () => {
    setTimeout(() => {
      onClick();
    }, 250);
  };

  const toggleFavorite = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const updatedFavorites = isFavorite
      ? favorites.filter((id) => id !== recipe.idMeal)
      : [...favorites, recipe.idMeal];

    setFavorites(updatedFavorites);
  };

  return (
    <motion.div
      key={recipe.idMeal}
      whileHover={{ scale: 1.02 }}
      style={{ display: "flex", flexWrap: 1 }}
    >
      <Card sx={{ height: "300px", padding: "0px" }} raised="true">
        <CardActionArea style={{ flexGrow: 1 }}>
          <CardMedia
            onClick={onClickWithTimeout}
            component="img"
            height="140"
            image={recipe.strMealThumb}
          />
          <CardContent onClick={onClickWithTimeout}>
            <Typography gutterBottom variant="h5" component="div">
              {recipe.strMeal}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                padding: "24px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {recipe.strInstructions
                .split(" ")
                .slice(0, 20)
                .join(" ")
                .toLowerCase()}
              ...
            </Typography>
          </CardContent>
   
        </CardActionArea>
               <IconButton
            onClick={(event) => toggleFavorite(event)}
            color={isFavorite ? "error" : "default"}
            style={{ position: "absolute", bottom: "5px", right: "3px" }}
          >
            <FavoriteIcon />
          </IconButton>
      </Card>
    </motion.div>
  );
}
