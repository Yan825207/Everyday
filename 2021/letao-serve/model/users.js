const {
    query
} = require("../db/query")
module.exports.register = async (username, password, mobile) => {
    // console.log(username, password, mobile);
    return await query(`insert into user ( username, password, mobile ) values ("${username}", "${password}" , "${mobile}")`);
}
module.exports.login = async (username, password) => {
    return await query("select * from user where username = ? and password = ?", [username, password])
}