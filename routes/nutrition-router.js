const express = require("express")
const router = express.Router()
const nutritionCtrl = require


// NUTRITON INDEX ROUTE
router.get('/', nutritionCtrl.index)

// NUTRITION CREATE ROUTE
router.post('/', nutritionCtrl.create)

// NUTRITON SHOW ROUTE
router.get('/:id', nutritionCtrl.getOne)

// NUTRITION UPDATE ROUTE
router.put('/:id', async (request, response) => {
    response.status(200).json({message: "Nutrition update route: " + request.params.id})
})

// NUTRITION DESTROY ROUTE
router.delete('/:id', async (request, response) => {
    response.status(200).json({message: "Nutrition delete route: " + request.params.id})
})

module.exports = router