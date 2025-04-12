const express = require('express')
const app = express()
const port = 3000

// Python:
// @app.route('/', methods=['GET'])  // default get request
// def home():
//    return 'Hello World!'
//
// app.[http-verb]([path], [callback])
// Callback accepts a request and response object
app.get('/', (req, res) => {
  res.send('Hello Here!')
})


// Start the dev server on the given port
// The callback is called when the server is running
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
