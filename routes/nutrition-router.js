const express = require("express")
const router = express.Router()


// NUTRITON INDEX ROUTE
router.get('/', async (request, response) => {
    response.status(200).json({message: "nutrition index route"})
})

// NUTRITION CREATE ROUTE
router.post('/', async (request, response) => {
    response.status(200).json({message: "Nutrition create route"})
})

// NUTRITON SHOW ROUTE
router.get('/:id', async (request, response) => {
    response.status(200).json({message: "Nutrition show route: " + request.params.id})
})

// NUTRITION UPDATE ROUTE
router.put('/:id', async (request, response) => {
    response.status(200).json({message: "Nutrition update route: " + request.params.id})
})

// NUTRITION DESTROY ROUTE
router.delete('/:id', async (request, response) => {
    response.status(200).json({message: "Nutrition delete route: " + request.params.id})
})

module.exports = router