import React from 'react'
import RecipeItem from './RecipeItem'
import { Link } from 'react-router-dom'
import Recipe from '../pages/Recipe'

function RecipeList({ recipes }) {
  return (
    <>
      <section className='heading'>
        <h1>Now viewing all recipes</h1>
      </section>

      <section className='content'>
        <div className='recipes'>
          {recipes.map((recipe) => (
            <Link
              to={`${recipe._id}`}
              key={recipe._id}
              element={<Recipe recipe={recipe} />}
            >
              <RecipeItem
                recipe={recipe}
                element={<Recipe recipe={recipe} id={recipe._id} />}
              />
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

export default RecipeList
