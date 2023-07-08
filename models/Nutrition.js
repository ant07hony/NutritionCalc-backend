// DEPENDENCIES
const mongoose = require("mongoose")

// MODELS
const NutritionSchema = new mongoose.Schema({
    fdcId: { type: Number},
    datatype: { type: String },
    description: { type: String },
    foodNutrients: { type: Array }
},{
    timestamps: true
})


const Nutrition = mongoose.model("Nutrition", NutritionSchema)

module.exports = Nutrition