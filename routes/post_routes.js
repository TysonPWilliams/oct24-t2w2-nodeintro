// import express from 'express'  // Import the default import
import { Router } from 'express' // Destructures Router from within the default export
import Post from '../models/post.js'
import { model } from 'mongoose'

// Default visibility of all module contents is private

// Flask: Blueprint
const router = Router()


// Get all posts
router.get('/posts', async (req, res) => {
    // res.send(posts)
    res.send(await Post.find(req.query.draft ? {} : { isPublished: true}))
})



// Get one post
// 1. Declare the route
router.get('/posts/:id', async (req, res) => {
    // 2. Get the ID of the post
    const post_id = req.params.id // All params values are strings
    // 3. Get the post with the given ID
    const post = await Post.findOne({_id: post_id})
    
    // posts.find(p => p.id == post_id) // Using == means tpe coercion will happen

    // 4. Send the post back to the client
    if (post) {
        res.send(post)
    } else {
        return res.status(404).send({ error: `Post with id ${post_id} not found` })
    }
})

// Create a post POST /posts
router.post('/posts', async (req, res) => {
    try {
        // Get post data from the request body
        const bodyData = req.body

        // Create and save new Post instance
        const post = await Post.create(bodyData)   

        // Send post to the client with 201 status
        res.status(201).send(post)
    }
    catch (err) {
        // TODO: Log the error file
        res.status(400).send({ error: err.message})
    }
})


// Update a post
async function update(req, res) {
    // 1. Fetch the post from the db with the provided id, then update it
    //    with the contents of req.body
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {returnDocument: 'after'})
    if (post) {
        // 4. Send the post to the client
        res.send(post)
    } else {
        res.status(404).send({error: `Post with id ${req.params.id} not found`})
    }
}

router.put('/posts/:id', update)
router.patch('/posts/:id', update)

// Delete a post
router.delete('/posts/:id', async (req, res) => {
    const post = await Post.findByIdAndDelete(req.params.id)
    if (post) {
        // 4. Send the post to the client
        res.send(post)
    } else {
        res.status(404).send({error: `Post with id ${req.params.id} not found`})
    }
})

// One default export allowed per module
// Default export is anonymous
export default router