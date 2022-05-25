import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createRecipe } from '../features/recipes/recipeSlice.js'

function RecipeForm() {
  const [formData, setFormData] = useState({
    name: '',
    ingredients: '',
    instructions: '',
  })

  const { name, ingredients, instructions } = formData

  const dispatch = useDispatch()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createRecipe(formData))
    setFormData({
      name: '',
      ingredients: '',
      instructions: '',
    })
  }

  return (
    <>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Recipe</label>
            <input
              type='text'
              name='name'
              id='name'
              autoFocus
              value={name}
              onChange={onChange}
              placeholder={'Recipe Name'}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='ingredients'>Ingredients</label>
            <input
              type='text'
              name='ingredients'
              id='ingredients'
              value={ingredients}
              onChange={onChange}
              placeholder={'Ingredients'}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='instructions'>Instructions</label>
            <input
              type='text'
              name='instructions'
              id='instructions'
              value={instructions}
              onChange={onChange}
              placeholder={'Instructions'}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default RecipeForm
