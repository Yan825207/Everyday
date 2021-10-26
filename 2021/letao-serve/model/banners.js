const { query } = require("../db/query")

module.exports.getbannersList = async () => {
  return await query("select * from brand")
}