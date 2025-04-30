import db from './db.js'
import Post from "./models/post.js"
import Category from "./models/category.js"

// This script is used to seed the database with initial data

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
const cats = await Category.create(categories)
console.log('Categories Created')

const posts = [
    {
      title: 'Post 1',
      body: 'Lorem ipsum dolor sit amet',
      isPublished: true,
      category: cats[1]
    },
    {
      title: 'Post 2',
      body: 'This is the body of post 2',
      isPublished: true,
      category: cats[2]
    },
    {
      title: 'Post 3',
      body: 'This is the body of post 3',
      isPublished: false,
      category: cats[0]
    }

]





// At this point, cateogies have been inserted into the db and each assigned an ObjectId, both in the db AND in the in-memory object. 

// Delete all existing posts
await Post.deleteMany()
// Creates and saves to MongoDB a new Post for each document in posts array
await Post.create(posts)
console.log('Posts Created')

// We still have a db connection open, so the script won't end
// So we need to close the connection once we're done with it
db.close()

