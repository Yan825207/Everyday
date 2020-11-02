const pool = require('../config/dbconfig')
module.exports.editData = (id, callback) => {
    pool.query('SELECT * FROM users WHERE uid = ?', id, function (error, results) {
        if (error) throw error
        callback(results)
    })
}