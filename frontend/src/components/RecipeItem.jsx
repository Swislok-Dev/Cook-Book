import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { deleteRecipe } from '../features/recipes/recipeSlice.js'

function RecipeItem({ recipe }) {
  const location = useLocation()

  const dispatch = useDispatch()

  const deleteButton = () => {
    if (location.pathname === '/dashboard') {
      return (
        <button
          onClick={() => dispatch(deleteRecipe(recipe._id))}
          className='close'
        >
          X
        </button>
      )
    }
  }
  return (
    <div className='recipe'>
      <div>{new Date(recipe.createdAt).toLocaleString('en-US')}</div>
      <h2>{recipe.name}</h2>
      {deleteButton()}
    </div>
  )
}

export default RecipeItem
