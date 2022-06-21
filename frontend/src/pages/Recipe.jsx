import { useParams } from 'react-router-dom'

function Recipe({ recipes }) {
  let recipeId = useParams()

  const recipe = recipes.filter((recipe) => recipe._id === recipeId.id)[0]

  const recipeDate = () => {
    return new Date(recipe.createdAt).toLocaleString('en-US')
  }

  const ingredientList = () => {
    return recipe.ingredients
      .split(', ')
      .map((item) => <li className='ingredient-item'>{item}</li>)
  }

  const instructionList = () => {
    return recipe['instructions']
      .split('.')
      .map((item) => <li className='instruction-item'>{item}</li>)
  }

  return (
    <>
      <section className='heading'>
        <h1>{recipe.name}</h1>
      </section>
      
      <h2>Ingredients</h2>
      <p>{ingredientList()}</p>

      <h2>Instructions</h2>
      <p>{instructionList()}</p>

      {/* <p>{recipe.user}</p> */}
      <h3>Date posted</h3>
      <p>{recipeDate()}</p>
    </>
  )
}

export default Recipe
