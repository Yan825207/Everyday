const express = require("express")
const adminIndexRouder = express.Router()
const {indexPage} =  require('../controllers/adminIndexCtrl')

adminIndexRouder.get('/',indexPage)

module.exports = adminIndexRouder