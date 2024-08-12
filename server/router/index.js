const express = require("express")
const Controller = require("../controllers/controller")
const errorHandler = require("../errorHandler")
const router = express.Router()

router.post('/login', Controller.login)
router.get('/about', Controller.get_about)
router.get('/picture', Controller.get_picture)

router.use(errorHandler)
module.exports= router