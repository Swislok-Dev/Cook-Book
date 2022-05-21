const asyncHandler = require('express-async-handler')

// Get recipes    GET /api/recipes       Public
const getRecipes = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get Recipes from controller action' })
})

// Post recipe    POST /api/recipes      Private
const setRecipe = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Set Recipe from controller' })
})

// Update recipe  PUT /api/recipes/:id    Private
const updateRecipe = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Update Recipe from controller' })
})

// Delete recipe  DELETE /api/recipes/:id Private
const deleteRecipe = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Delete Recipe from controller' })
})

module.exports = {
  getRecipes,
  setRecipe,
  updateRecipe,
  deleteRecipe,
}
