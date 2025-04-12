const express = require('express') // CommonJS modules
const app = express()
const port = 8080

const person = {
  name: "Matt",
  age: 52
}

const posts = [
  {
    title: 'Post 1',
    body: 'Lorem ipsum dolor sit amet',
    isPublished: false
  },
  {
    title: 'Post 2',
    body: 'This is the body of post 2',
    isPublished: true
  }
]

console.clear()
console.log('Server restarting...', new Date())
// Python:
// @app.route('/', methods=['GET'])  // default get request
// def home():
//    return 'Hello World!'
//
// app.[http-verb]([path], [callback])
// Callback accepts a request and response object
app.get('/', (req, res) => {
  // Serialize person and send to the client
  res.send(person)
})

// Posts routes

// Get all posts
app.get('/posts', (req, res) => {
  res.send(posts)
})
// Get one post
// Create a post
// Update a post
// Delete a post

// Start the dev server on the given port
// The callback is called when the server is running
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
