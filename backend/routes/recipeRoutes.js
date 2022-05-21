const express = require('express')
const router = express.Router()
// Enter controller actions here

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Get recipes from recipeRoutes' })
})

router.post('/', (req, res) => {
  res.status(200).json({ message: 'Post recipes from recipeRoutes' })
})

router.put('/:id', (req, res) => {
  res.status(200).json({ message: `Update recipe ${req.params.id} from recipeRoutes` })
})

router.delete('/:id', (req, res) => {
  res.status(200).json({ message: `Delete recipe ${req.params.id} from recipeRoutes` })
})

module.exports = router
