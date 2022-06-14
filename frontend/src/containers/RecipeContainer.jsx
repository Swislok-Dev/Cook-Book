import { useEffect } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getRecipes } from '../features/recipes/recipeSlice.js'
import Spinner from '../components/Spinner'
import Recipe from '../pages/Recipe'
import RecipeList from '../components/RecipeList'

function RecipeContainer() {
  const dispatch = useDispatch()
  const fetchRecipes = () => dispatch(getRecipes())

  const { recipes, isLoading } = useSelector((state) => state.recipes)

  useEffect(() => {
    if (recipes.length > 0) {
      return
    } else {
      fetchRecipes()
    }
  })

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <Routes>
        <Route>
          <Route path='/' element={<RecipeList recipes={recipes} />} />
          <Route path={`:id`} element={<Recipe recipes={recipes} />} />
        </Route>
      </Routes>
      <Outlet />
    </>
  )
}

export default RecipeContainer
