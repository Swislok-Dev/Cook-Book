const mongoose = require('mongoose')

const recipeSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    ingredients: {
      type: String,
      required: [true, 'Please add the ingredients'],
    },
    instructions: {
      type: String,
      required: [true, 'Please add some instructions'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Recipe', recipeSchema)
