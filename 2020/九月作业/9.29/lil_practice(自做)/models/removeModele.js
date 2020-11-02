const pool = require('../config/dbconfig')

module.exports.removedata = (id, callback) => {
    pool.query('DELETE from users WHERE uid = ?', id, function (error, results) {
        if (error) throw error
        callback(results)
    })
}