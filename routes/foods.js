const express = require('express')
const Food = require('./../models/food')
const router = express.Router()

router.get('/new', (req, res) => {
    res.render('foods/new')
})

router.get('/:id', (req, res) => {

})

router.post('/', async (req, res) => {
    const food = new Food({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    })
    try {
        food = await food.save()
        res.redirect('/foods/${food.id}')
    } catch (e) {
        res.render('foods/new', { food: food})
    }  
})

module.exports = router 