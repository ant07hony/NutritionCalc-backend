// DEPENDENCIES
const mongoose = require("mongoose")

// MODELS
const NutritionSchema = new mongoose.Schema({
    
},{
    timestamps: true
})


const Nutrition = mongoose.model("Nutrition", NutritionSchema)

module.exports = Nutrition