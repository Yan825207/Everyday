const express = require('express')
const detailRouter = express.Router()

detailRouter.get('/detail', (req, res) => {
    res.render('./detail')
})

module.exports = detailRouter