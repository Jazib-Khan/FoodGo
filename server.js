const express = require('express')
const foodRouter = require('./routes/food')
const app = express()

app.set('view engine', 'ejs')

app.use('/food', foodRouter)

app.get('/', (req, res) => {
    const foods = [{
        title: 'Test Food',
        createdAt: Date.now(),
        description: 'Test description'
    }]
    res.render('index', { foods: foods })
})

app.listen(5000)