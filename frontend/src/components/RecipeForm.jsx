import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createRecipe, reset } from '../features/recipes/recipeSlice.js'


function RecipeForm() {
  const [formData, setFormData] = useState({
    name: '',
    ingredients: '',
    instructions: '',
  })

  const { name, ingredients, instructions } = formData
  const { isError, message } = useSelector((state) => state.recipes)

  const dispatch = useDispatch()

  useEffect(() => {
    if (isError) {
      dispatch(reset())
    }
  }, [isError, message, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!isError) {
      dispatch(createRecipe(formData))
    }
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
