const express = require('express')

const adminCategories = express.Router()

adminCategories.get('/categories', (req, res) => {
    res.render('./admin/categories')
})
module.exports = adminCategories