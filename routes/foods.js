const express = require('express')
const Food = require('./../models/food')
const router = express.Router()

router.get('/new', (req, res) => {
    res.render('foods/new', { food: new Food() })
})

router.get('/:id', async (req, res) => {
    const food = await Food.findById(req.params.id)
    if (food == null) res.redirect('/')
    res.render('foods/show', { food: food })
})

router.post('/', async (req, res) => {
    let food = new Food({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    })
    try {
        food = await food.save()
        res.redirect(`/foods/${food.id}`)
    } catch (e) {
        console.log(e)
        res.render(`foods/new`, { food: food})
    }  
})

module.exports = router 