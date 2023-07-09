const express = require("express")
const router = express.Router()
const nutritionCtrl = require('../controllers/nutrition-controller')


// NUTRITON INDEX ROUTE
router.get('/', nutritionCtrl.index)

// NUTRITION CREATE ROUTE
router.post('/', nutritionCtrl.create)

// NUTRITON SHOW ROUTE
router.get('/:id', nutritionCtrl.getOne)

// NUTRITION UPDATE ROUTE
router.put('/:id', async (req, res) => {
    res.status(200).json({message: "Nutrition update route: " + req.params.id})
})

// NUTRITION DESTROY ROUTE
router.delete('/:id', async (req, res) => {
    res.status(200).json({message: "Nutrition delete route: " + req.params.id})
})

module.exports = router