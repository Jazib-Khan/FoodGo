const express = require('express')
const Food = require('./../models/food')
const router = express.Router()

router.get('/new', (req, res) => {
    res.render('foods/new', { food: new Food() })
})

router.get('/:slug', async (req, res) => {
    const food = await Food.findOne({ slug: req.params.slug })
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
        res.redirect(`/foods/${food.slug}`)
    } catch (e) {
        console.log(e)
        res.render(`foods/new`, { food: food})
    }  
})

router.delete('/:id', async (req, res) => {
    await Food.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

module.exports = router 