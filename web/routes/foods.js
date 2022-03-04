const express = require('express')
const Food = require('./../models/food')
const router = express.Router()

router.get('/new', (req, res) => {
    res.render('foods/new', { food: new Food() })
})

router.get('/edit/:id', async(req, res) => {
    const food = await Food.findById(req.params.id)
    res.render('foods/edit', { food: food })
})

router.get('/:slug', async (req, res) => {
    const food = await Food.findOne({ slug: req.params.slug })
    if (food == null) res.redirect('/')
    res.render('foods/show', { food: food })
})

router.post('/', async (req, res, next) => {
    req.food = new Food()
    next()
}, saveFoodAndRedirect('new'))

router.put('/:id', async (req, res, next) => {
    req.food = await Food.findById(req.params.id)
    next()
}, saveFoodAndRedirect('edit'))

router.delete('/:id', async (req, res) => {
    await Food.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

function saveFoodAndRedirect(path) {
    return async (req, res) => {
        let food = req.food
        food.title = req.body.title
        food.description = req.body.description
        food.markdown = req.body.markdown
        try {
            food = await food.save()
            res.redirect(`/foods/${food.slug}`)
        } catch (e) {
            console.log(e)
            res.render(`foods/${path}`, { food: food })
        }  
    }
}

module.exports = router 