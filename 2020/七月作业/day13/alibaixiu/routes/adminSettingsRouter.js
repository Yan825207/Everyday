const express = require("express")
const adminSettingsRouter = express.Router()

adminSettingsRouter.get('/settings', (req, res) => {
    res.render('./admin/settings',{title:'后台管理系统-设置'})
})
module.exports = adminSettingsRouter