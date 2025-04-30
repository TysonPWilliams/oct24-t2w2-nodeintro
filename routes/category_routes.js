// import express from 'express'  // Import the default import
import { Router } from 'express' // Destructures Router from within the default export
import Category from '../models/category.js'
import { model } from 'mongoose'

// Default visibility of all module contents is private

// Flask: Blueprint
const router = Router()


// Get all categories
router.get('/categories', async (req, res) => {
    // res.send(posts)
    res.send(
        await Category
            .find()
            .select('-__v'))
})
// Get one category
router.get('/categories/:id', async (req, res) => {
    // 2. Get the ID of the category
    const category_id = req.params.id // All params values are strings
    // 3. Get the category with the given ID
    const category = await Category
        .findOne({_id: category_id})
        .select('-__v')
    
    // categories.find(p => p.id == post_id) // Using == means tpe coercion will happen

    // 4. Send the category back to the client
    if (category) {
        res.send(category)
    } else {
        return res.status(404).send({ error: `Category with id ${category_id} not found`})
    }
})
// Create a new category

// Update a category

// Delete a category

// One default export allowed per module
// Default export is anonymous
export default router