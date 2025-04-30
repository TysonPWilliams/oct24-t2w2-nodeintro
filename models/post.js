import { model, ObjectId } from 'mongoose'

// Flask: ORM (Object-Relational Mapper - SQLAlchemy) - defined models
// Express: ODM (Object-Document Mapper - Mongoose)
const Post = model('Post', {
    title: { type: String, required: true },
    body: { type: String, required: true },
    isPublished: { type: Boolean, default: false },
    // Reference or 'ref' field (analogous to a foreign key in relational db)
    category: { type: ObjectId, ref: 'Category', required: true }
})

export default Post
