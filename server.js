const express = require('express')
const mongoose = require('mongoose')
const foodRouter = require('./routes/food')
const app = express()

mongoose.connect('mongodb://localhost/FoodGo')

app.set('view engine', 'ejs')

app.use('/foods', foodRouter)

app.get('/', (req, res) => {
    const foods = [{
        title: 'Test Food',
        createdAt: new Date(),
        description: 'Test description'
    }]
    res.render('foods/index', { foods: foods })
})

app.listen(5000)