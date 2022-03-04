const express = require('express')
const mongoose = require('mongoose')
const Food = require('./models/food')
const foodRouter = require('./routes/foods')
const methodOverride = require('method-override')
const app = express()

mongoose.connect('mongodb://localhost/FoodGo')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', async (req, res) => {
    const foods = await Food.find().sort({
    createdAt: 'desc' })
    res.render('foods/index', { foods: foods })
})

app.use('/foods', foodRouter)

app.listen(5000)