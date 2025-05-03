import { Router } from 'express'
import bcrypt from 'bcrypt'
import User from '../models/user.js'
import jwt from 'jsonwebtoken'

const secret = process.env.JWT_SECRET

const router = Router()

// Register a new user
// Possibly protect the route so only admins can create new users
router.post('/register', async (req, res) => {
    try {
        // TODO: If user is an admin, pass isAdmin to create()
        // Create and save new Post instance
        const user = await User.create({
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 10)  
        })
        // Send user to the client with 201 status code
        // TODO: Create a JWT so that the user can be authenticated
        res.status(201).send({email: user.email})
    }
    catch (err) {
        res.status(400).send({ error: err.message})
    }
})

// TODO: Login a user
router.post('/login', async (req, res) => {
    try {
        
        // Find the user with the provided email
        const user = await User.findOne({
            email: req.body.email})
        if (user) {
            // Validate the password
            const match = await bcrypt.compare(req.body.password || '', user.password)
            if (match) {
                const token = jwt.sign({ 
                    email: user.email,
                    exp: Math.floor(Date.now() / 1000) + (60 * 60), // 1 hour expiration
                }, secret) 
                res.status(200).send({ token, email: user.email })
                // const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' })
            } else {
                res.status(400).send({ error: 'Email or password is incorrect'})
            }
        } else {
            res.status(400).send({ error: 'Email or password is incorrect'})
        }
    }
    catch (err) {
        res.status(400).send({ error: err.message})
    }
})

export default router