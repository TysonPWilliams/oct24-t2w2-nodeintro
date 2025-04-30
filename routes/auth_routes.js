import { Router } from 'express'
import bcrypt from 'bcrypt'
import User from '../models/user.js'

const router = Router()

// Register a new user
// Possibly protect the route so only admins can create new users
router.post('/register', async (req, res) => {
    try {
        
        // Create and save new Post instance
        const user = await User.create({
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 10)  
        })
        // Send post to the client with 201 status
        // TODO: Filter out the password from the response
        res.status(201).send({email: user.email})
    }
    catch (err) {
        res.status(400).send({ error: err.message})
    }
})

// TODO: Login a user
router.post('/login', async (req, res) => {
    res.send({ route: 'POST /login'})
})

export default router