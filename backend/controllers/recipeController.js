const asyncHandler = require('express-async-handler')

// const Recipe = require('../models/recipeModel')

// Get recipes    GET /api/recipes    Public
const getRecipes = asyncHandler(async (req, res) => {
  // const recipes = await Recipe.find()
  // const  { name, ingredients, instructions} = req.body

  // if (!name || !ingredients || !instructions) {
  //   res.status(400)
  //   throw new Error('Please add all fields')
  // }



  res.status(200).json({message: "Get Recipes from controller action"})
})

module.exports = {
  getRecipes,
}
