const asyncHandler = require('express-async-handler')
const Recipe = require('../models/recipeModel')
const User = require('../models/userModel')

// Get all recipes  GET /api/recipes    Public
const getRecipes = asyncHandler(async (req, res) => {
  const allRecipes = await Recipe.find()
  if (!allRecipes) {
    res.status(400)
    throw new Error("No recipes found")
  } else {
    console.log("recipeController found all the recipes!")
  }
  res.status(200).json(allRecipes)
})

// Get recipes    GET /api/recipes/mine    Private
const getUserRecipes = asyncHandler(async (req, res) => {
  const recipes = await Recipe.find({ user: req.user.id })

  res.status(200).json(recipes)
})

// Post recipe    POST /api/recipes      Private
const setRecipe = asyncHandler(async (req, res) => {
  const { name, ingredients, instructions } = req.body

  if (!req.user.id) {
    res.status(401)
    throw new Error('Not logged into correct user')
  }

  if (!name) {
    res.status(400)
    throw new Error('Please give the recipe a name')
  }

  if (!ingredients) {
    res.status(400)
    throw new Error('Please give some ingredients')
  }

  if (!instructions) {
    res.status(400)
    throw new Error('Please tell us how to make this!')
  }

  const newRecipe = await Recipe.create({
    name: req.body.name,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    user: req.user.id,
  })

  res.status(200).json(newRecipe)
})

// Update recipe  PUT /api/recipes/:id    Private
const updateRecipe = asyncHandler(async (req, res) => {
  const recipe = await Recipe.findById(req.params.id)

  // Check for recipe
  if (!recipe) {
    res.status(400)
    throw new Error('recipe not found')
  }

  // Check for user
  if (!recipe.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Match user to recipes
  if (recipe.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized or does not own this recipe')
  }

  const updatedRecipe = await Recipe.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  )

  res.status(200).json(updatedRecipe)
})

// Delete recipe  DELETE /api/recipes/:id Private
const deleteRecipe = asyncHandler(async (req, res) => {
  const recipe = await Recipe.findById(req.params.id)

  if (!recipe) {
    res.status(400)
    throw new Error('Recipe not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the recipe user
  if (recipe.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await recipe.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getRecipes,
  getUserRecipes,
  setRecipe,
  updateRecipe,
  deleteRecipe,
}
