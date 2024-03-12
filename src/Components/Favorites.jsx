import {  useContext, useState, useEffect } from "react"
import {Context} from "../App"
import axios from "axios";


const URL="https://www.themealdb.com/api/json/v1/1/lookup.php?i="



export default function Favorites(){


    const [favorites,setFavorites]=useContext(Context)
    const [recipes, setRecipes]= useState([])



    async function fetchData() {
        try {
            favorites.map(async(ID)=>{
                const response = await axios.get(`${URL}${ID}`);
                setRecipes(response.data.meals[0])
                console.log(recipes)
            })
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      }



    useEffect(()=>{
        fetchData()
        
      },[])



    return(
        <div>


        {/* {console.log(favorites)} */}












        </div>
    )    
}