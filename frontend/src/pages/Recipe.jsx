import { useParams } from 'react-router-dom'


function Recipe({ recipes }) {
  let recipeId = useParams()

  const recipe = recipes.filter((recipe) => recipe._id === recipeId.id)[0]

  const convertDate = (recipeDate) => {
    return new Date(recipeDate).toLocaleString('en-US')
  }

  return (
    <>
    <section className="heading">
      <h1>Now viewing {recipe.name}</h1>
    </section>
      <h1>Recipe Show Page</h1>
      <p>{recipe._id}</p>
      <p>{recipe.name}</p>
      <p>{recipe.ingredients}</p>
      <p>{recipe.instructions}</p>
      <p>{recipe.user}</p>
      <p>{convertDate(recipe.createdAt)}</p>
    </>
  )
}

export default Recipe
