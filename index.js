import 'dotenv/config' // Load environment variables from .env file
import express from 'express' // E6 Modules
import helmet from 'helmet'
import cors from 'cors'
import post_routes from './routes/post_routes.js'
import category_routes from './routes/category_routes.js'
import auth_routes from './routes/auth_routes.js'
import { connect } from './db.js'

// console.log(process.env) // Check if the environment variable is loaded correctly

// const express = require('express') // CommonJS modules
const app = express()
const port = 8080

// Generally, security-related middleware should happen as early as possible

app.use(helmet()) // Adds security headers to the response
app.use(cors()) // Allows cross-origin requests

// Inserts middleware to parse a JSON body
app.use(express.json())

// Python: app.register_blueprint(post_routes)
// app.use inserts middleware into the request-response cycle
app.use(auth_routes)
app.use(post_routes)
app.use(category_routes)

// Error handling middleware
app.use((err, req, res, next) => {
  // console.error(err.stack)
  // console.log(err)
  res.status(err.status).send({error: err.message})
})


// Start the dev server on the given port
// The callback is called when the server is running
app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`)
  connect()
})
