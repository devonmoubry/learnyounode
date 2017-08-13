const fs = require('fs')
const path = require('path')

module.exports = (dirName, filterStr, callback) => {
  let fileExt = "." + filterStr;
  fs.readdir(dirName, (err, files) => {
    if (err) {
      return callback(err)
    }

    result = files.filter( (file) => {
      return path.extname(file) === fileExt
    })
    callback(null, result)
  })
}
