const express = require('express')
const router = express.Router()
const {
  getRecipes,
  setRecipe,
  updateRecipe,
  deleteRecipe,
} = require('../controllers/recipeController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getRecipes).post(protect, setRecipe)

router.route('/:id').put(protect, updateRecipe).delete(protect, deleteRecipe)

module.exports = router
