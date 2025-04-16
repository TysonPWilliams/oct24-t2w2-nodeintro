// import express from 'express'  // Import the default import
import { Router } from 'express' // Destructures Router from within the default export
import Post from '../models/post.js'

// Default visibility of all module contents is private

const posts = [
    {
      id: 1,
      title: 'Post 1',
      body: 'Lorem ipsum dolor sit amet',
      isPublished: false
    },
    {
      id: 2,
      title: 'Post 2',
      body: 'This is the body of post 2',
      isPublished: true
    }
  ]

// Flask: Blueprint
const router = Router()


// Get all posts
router.get('/posts', async (req, res) => {
    // res.send(posts)
    res.send(await Post.find())
})



// Get one post
// 1. Declare the route
router.get('/posts/:id', (req, res) => {
    // 2. Get the ID of the post
    const postId = req.params.id // All params values are strings
    // 3. Get the post with the given ID
    const post = posts.find(p => p.id == postId) // Using == means tpe coercion will happen

    // 4. Send the post back to the client
    if (post) {
        res.send(post)
    } else {
        return res.status(404).send({ error: `Post with id ${postId} not found` })
    }
})

// Create a post POST /posts
router.post('/posts', (req, res) => {
    // Get post data from the request body
    const bodyData = req.body
    console.log(bodyData)
    // Create a new Post instance
    // Commit new Post instance to DB
    // Send _ to the client
    res.send('POST /posts')
})


// Update a post
// Delete a post

// One default export allowed per module
// Default export is anonymous
export default router