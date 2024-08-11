const express = require("express")
const Controller = require("../controllers/controller")
const errorHandler = require("../errorHandler")
const router = express.Router()

router.post('/login', Controller.login)

router.use(errorHandler)
module.exports= router