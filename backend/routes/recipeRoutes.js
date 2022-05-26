const express = require('express')
const router = express.Router()
const {
  getRecipes,
  getUserRecipes,
  setRecipe,
  updateRecipe,
  deleteRecipe,
} = require('../controllers/recipeController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(getRecipes).post(protect, setRecipe)
router.route('/mine').get(protect, getUserRecipes)

router.route('/:id').put(protect, updateRecipe).delete(protect, deleteRecipe)

module.exports = router
