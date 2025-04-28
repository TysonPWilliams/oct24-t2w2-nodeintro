import db from './db.js'
import Post from "./models/post.js"
import Category from "./models/category.js"

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

const categories = [
  { name: 'Food' },
  { name: 'Coding' },
  { name: 'Movies' },
  { name: 'Other' },
]

db.connect()

// Delete all existing categories
await Category.deleteMany()
// Creates and saves to MongoDB a new Post for each document in categories array
await Category.create(categories)
console.log('Categories Created')

// Delete all existing posts
await Post.deleteMany()
// Creates and saves to MongoDB a new Post for each document in posts array
await Post.create(posts)
console.log('Posts Created')

// We still have a db connection open, so the script won't end
// So we need to close the connection once we're done with it
db.close()

