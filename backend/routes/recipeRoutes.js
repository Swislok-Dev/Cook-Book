const express = require('express')
const router = express.Router()
const { getRecipes, setRecipe, updateRecipe, deleteRecipe} = require('../controllers/recipeController')

router.route('/').get(getRecipes).post(setRecipe)

router.route('/:id').put(updateRecipe).delete(deleteRecipe)

module.exports = router
