import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { getUserRecipes, reset } from '../features/recipes/recipeSlice.js'
import Spinner from '../components/Spinner'
import RecipeForm from '../components/RecipeForm'
import RecipeItem from '../components/RecipeItem'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { recipes, isLoading, isError, message } = useSelector(
    (state) => state.recipes
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
      toast.error(message)
    }

    if (!user) {
      navigate('/login')
    }

    if (user) {
      dispatch(getUserRecipes())
    }

    return () => {
      dispatch(reset())
    }
  }, [user, isError, message, navigate, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Recipes Dashboard</p>
      </section>

      <RecipeForm />

      <section className='content'>
        {recipes.length > 0 ? (
          <div className='recipes'>
            {recipes.map((recipe) => (
              <RecipeItem key={recipe._id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <h3>You have not created any recipes yet!</h3>
        )}
      </section>
    </>
  )
}

export default Dashboard
