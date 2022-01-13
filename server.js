const express = require('express')
const mongoose = require('mongoose')
const foodRouter = require('./routes/foods')
const app = express()

mongoose.connect('mongodb://localhost/FoodGo')

app.set('view engine', 'ejs')

app.use('/foods', foodRouter)
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    const foods = [{
        title: 'Test Food',
        createdAt: new Date(),
        description: 'Test description'
    }]
    res.render('foods/index', { foods: foods })
})

app.listen(5000)