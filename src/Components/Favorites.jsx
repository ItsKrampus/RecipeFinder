import {  useContext } from "react"
import {Context} from "../App"
export default function Favorites(){


    const [favorites,setFavorites]=useContext(Context)

    return(
        <div>


        {console.log(favorites)}












        </div>
    )    
}