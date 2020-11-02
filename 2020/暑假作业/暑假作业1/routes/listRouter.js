const express = require('express');

const listRouter = express.Router();

const{ listpage,adminlist} = require('../controllers/adminLIstCtrl')

listRouter.get('/list',listpage)


module.exports = listRouter