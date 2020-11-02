const pool = require('../config/dbconfig')
module.exports.editData = (id, callback) => {
    pool.query('SELECT * FROM users WHERE uid = ?', id, function (error, results) {
        if (error) throw error
        callback(results)
    })
}

module.exports.editSave = (id, updatedata, callback) => {
    pool.query(`UPDATE users set ? WHERE uid = "${id}"`, updatedata, (error, result) => {
        if (error) throw error;
        callback(result)
    })
}