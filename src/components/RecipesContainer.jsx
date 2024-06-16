import { useEffect, useState } from "react";
import Recipes from "./Recipes";
import PropTypes from 'prop-types'


const RecipesContainer = ({handleRecipeBtn}) => {
   const [recipe, setRecipes] = useState([]);


   useEffect(() =>{
      fetch('recipes.json')
      .then(res => res.json())
      .then(data => setRecipes(data))         
   } , [])

   return (
      <div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-6">
         {
            recipe.map((recipes, index) => <Recipes 
               key={index} 
               recipes={recipes}
               handleRecipeBtn={handleRecipeBtn}
               ></Recipes>)
         }
         </div>
      </div>
   );
};

RecipesContainer.propTypes = {
   handleRecipeBtn: PropTypes.func
}

export default RecipesContainer;