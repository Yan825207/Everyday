const express = require('express');

const adminEditRoutes = express.Router();


adminEditRoutes.get('/edit',(req,res)=>{
    res.render('edit')
})
module.exports = adminEditRoutes