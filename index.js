import express from 'express' // E6 Modules
import mongoose from 'mongoose'
import post_routes from './routes/post_routes.js'


// const express = require('express') // CommonJS modules
const app = express()
const port = 8080

const person = {
  name: "Matt",
  age: 52
}

// Inserts middleware to parse a JSON body
app.use(express.json())

// Python: app.register_blueprint(post_routes)
// app.use inserts middleware into the request-response cycle
app.use(post_routes)


// Start the dev server on the given port
// The callback is called when the server is running
app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`)
  // Connect to MongoDB
  await mongoose.connect('mongodb://127.0.0.1:27017/nodeintro_db')
  console.log(mongoose.connection.readyState == 1 ? 'Mongoose connected' : 'Mongoose failed to connect!')
})
