import express from 'express' // E6 Modules
import post_routes from './routes/post_routes.js'
import category_routes from './routes/category_routes.js'
import { connect } from './db.js'

// const express = require('express') // CommonJS modules
const app = express()
const port = 8080

// Inserts middleware to parse a JSON body
app.use(express.json())

// Python: app.register_blueprint(post_routes)
// app.use inserts middleware into the request-response cycle
app.use(post_routes)
app.use(category_routes)


// Start the dev server on the given port
// The callback is called when the server is running
app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`)
  connect()
})
