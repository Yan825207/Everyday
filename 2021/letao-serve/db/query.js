var mysql = require('mysql');
const {
    config
} = require('./config')
var pool = mysql.createPool(config[process.env.DB_ENV]);

module.exports.query = (sql, values) => {
    return new Promise(function (resolev, reject) {
        pool.getConnection(function (err, connection) {
            if (err) throw err; // not connected!

            // Use the connection
            connection.query(sql, values, function (error, results, fields) {
                // When done with the connection, release it.
                connection.release();

                // Handle error after the release.
                if (error) throw error;

                resolev(results)
                // Don't use the connection here, it has been returned to the pool.
            });
        });
    })
}