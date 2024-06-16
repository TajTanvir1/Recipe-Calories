import { useState } from 'react'
import './App.css'
import CookContainer from './components/CookContainer'
import Header from './components/Header'
import NavBar from './components/NavBar'
import OurRecipesText from './components/OurRecipesText'
import RecipesContainer from './components/RecipesContainer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  const [recipe, setRecipes]= useState([])
  const [currentRecipe, setCurrentRecipes]= useState([])

  const handleRecipeBtn = (rcp) => {
    const isExist = recipe.find(recipes=>recipes.recipe_id == rcp.recipe_id);
    if(!isExist){
      setRecipes([...recipe, rcp])
    }
    else{
      toast("Already exist");
    }
  }
  
  const handlePreparing = (id) => {
    const newPrepare = recipe.filter(preparing => preparing.recipe_id != id);
    setRecipes(newPrepare);
  }

  const handleCurrent = recipes => {
    const newCurrentCooking = [...currentRecipe, recipes]
    setCurrentRecipes(newCurrentCooking)
  }

  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
      <OurRecipesText></OurRecipesText>
      <div className='md:flex md:justify-between'>
        <RecipesContainer handleRecipeBtn={handleRecipeBtn}></RecipesContainer>
        <ToastContainer />
        <CookContainer 
        recipe={recipe} 
        handlePreparing={handlePreparing}
        handleCurrent={handleCurrent}
        currentRecipe={currentRecipe}
        ></CookContainer>
      </div>
    </>
  )
}

export default App
