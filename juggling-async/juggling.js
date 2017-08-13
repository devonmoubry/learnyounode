const http = require('http');
const bl = require('bl');
let results = [];
let count = 0;

function printResults() {
  for (let i = 0; i < 3; i++) {
    console.log(results[i]);
  }
}

function httpGet(index) {
  let url = process.argv[2 + index]
  http.get(url, (response) => {
    response.pipe(bl((err, data) => {
      if (err) throw err

      results[index] = data.toString()
      count++

      if (count === 3) {
        printResults()
      }
    }))
  })
}

for (let i = 0; i < 3; i++) {
  httpGet(i)
}
