const bl = require('bl')
const http = require('http')
const url = process.argv[2]

http.get(url, (response) => {
  response.pipe(bl( (err, data) => {
    if (err) throw err
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})
