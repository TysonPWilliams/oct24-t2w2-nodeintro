// middleware/auth.js
import { expressjwt } from 'express-jwt'
import User from './models/user.js' // Import the User model

// Custom middleware
// next() is a function that is called to pass control to the next middleware function
// We need to wrap the call to expressjwt() in a function because if we just
// make it a constant, it will be called immediately and not when the middleware is called
export function auth(req, res, next) {
    return expressjwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] })(req, res, next)
}

export function adminOnly(req, res, next) {
    if (req.auth) {
        User.findOne({ email: req.auth.email }).then(user => {
            // Check if the user is an admin
            if (user && user.isAdmin) {
                next()
            } else {
                res.status(403).send({ error: 'Admin Only' })
            }
        })
    } else {
        // If the user is not an admin, send a 403 Forbidden response
        res.status(403).send({ error: 'You are not authorized to perform this action' })
    }
}

export default { auth, adminOnly }