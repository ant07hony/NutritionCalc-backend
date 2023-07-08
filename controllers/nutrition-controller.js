const express = require('express')
const { Nutrition } = require('../models')


// NUTRITION INDEX ACTION
async function index ( rec = request, res = response, next) {
    try {
        // get all nutrition
        res.json(await Nutrition.find({}))
    } catch (error) {
        // send error
        res.status(400).json(error)
    }
}

// NUTRITION CREATE ACTION
async function create (res = request, res = response, next) {
    try {
        // create new nutrient
        res.json(await Nutrition.create(req.body))
        console.log(req.body)
    } catch (error){
        // send error
        res.status(400).json(error)
    }
}

// NUTRITION SHOW ACTION
async function detail (req =request, res = response, next){
    try {
        // send one nutrition
        res.json(await Nutrition.findById(req.params.id))
        console.log(request.params.id)
    } catch (error){
        // send error
        res.status(400).json(error)
    }
}

// NUTRITION DESTROY ACTION

// NUTRITION UPDATE ACTION


// EXPORT Controller Action
module.exports = {
    index,
    create,
    getOne: detail
}