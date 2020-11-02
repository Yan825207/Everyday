const express = require('express');

const adminloginRoutes = express.Router();

const {loginUser} = require('../controllers/adminLoginCtrl')

adminloginRoutes.post('/login',loginUser)
module.exports = adminloginRoutes