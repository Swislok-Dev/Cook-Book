const express = require('express')
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')
const colors = require('colors')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5001

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/recipes', require('./routes/recipeRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`.magenta))
