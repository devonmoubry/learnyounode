const http = require('http')
const url = process.argv[2]
http.get(url, (response) => {
  response.setEncoding('utf8')
  response.on('data', function (data) {
    console.log(data)
  })
})

// OFFICIAL SOLUTION:

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// }).on('error', console.error)
