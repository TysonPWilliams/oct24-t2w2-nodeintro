import express from 'express' // E6 Modules
import post_routes from './routes/post_routes.js'


// const express = require('express') // CommonJS modules
const app = express()
const port = 8080

const person = {
  name: "Matt",
  age: 52
}

app.use(post_routes)


// Start the dev server on the given port
// The callback is called when the server is running
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
