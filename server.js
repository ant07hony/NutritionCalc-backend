// DEPENDENCIES
require("dotenv").config()
require("./config/db.connection.js")
const {PORT} = process.env
const express = require("express")
const app = express()
const cors = require("cors")
const morgan = require('morgan')
const nutritionRouter = require("./routes/nutrition-router.js")

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

// MIDDLEWARE ROUTER
app.use("/nutrition", nutritionRouter)

// ROUTES
app.get("/", (request, response) => {
    response.send(" hello world")
})

// LISTENER
app.listen(PORT, () => console.log( `listening on PORT ${PORT}`))