require('./index')
const filter = require('./filter')
let dirName = process.argv[2]
let filterStr = process.argv[3]

filter(dirName, filterStr, (err, files) => {
  if (err) throw err

  files.forEach( (file) => {
    console.log(file)
  })
})
