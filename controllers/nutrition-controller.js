const express = require('express')
const { Nutrition } = require('../models')


// NUTRITION INDEX ACTION
async function index ( req, res, next) {
    try {
        // get all nutrition
        res.json(await Nutrition.find({}))
    } catch (error) {
        // send error
        res.status(400).json(error)
    }
}

// NUTRITION CREATE ACTION
async function create (req, res, next) {
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
async function detail (req, res, next){
    try {
        // send one nutrition
        res.json(await Nutrition.findById(req.params.id))
        console.log(req.params.id)
    } catch (error){
        // send error
        res.status(400).json(error)
    }
}

// NUTRITION DESTROY ACTION
async function destroy (req, res, next){
    try {
        res.json(await Nutrition.findByIdAndRemove(req.params.id))
    } catch (error){
        res.status(400).json(error)
    }
}

// NUTRITION UPDATE ACTION
async function update (req, res, next){
    try {
        res.json(await Nutrition.findByIdAndUpdate(req.params.id, req.body, {  new:true }))
    } catch (error){
        res.status(400).json(error)
    }
}


// EXPORT Controller Action
module.exports = {
    index,
    create,
    getOne: detail,
    delete: destroy,
    update
}