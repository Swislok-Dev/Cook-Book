import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRecipes } from '../features/recipes/recipeSlice.js'
import Spinner from '../components/Spinner'
import RecipeItem from '../components/RecipeItem'

function Home() {
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
      <section className='heading'>Now viewing all recipes</section>

      <section className='content'>
        {recipes.length > 0 ? (
          <div className='recipes'>
            <p>Recipes here</p>

            {recipes.map((recipe) => (
              <RecipeItem key={recipe._id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <h3>There are no recipes stored</h3>
        )}
      </section>
    </>
  )
}

export default Home
