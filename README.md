# oct24-t2w2-nodeintro

### fit pull vs git fetch

- `git fetch` downloads any changes on your current branch from the remote
- `git pull` does a `git fetch` first, then a `git merge`
- `git merge` actually attemps to auto-merge the incoming changes into your local working copy
- Best practice is to `git fetch` whenever you switch branches, especially if you've switched to `main`


## GOAL: Use JWT for auth

- Register: Create an account
- Login: email/password login that generates and returns a JWT
- Routes: authenticate the token to protect one or more routes
- Logout: Invalidates the token

### Models
- User model

### Routes
- Auth routes

### Middleware
- Auth middleware: for JWT validation
