# oct24-t2w2-nodeintro

### fit pull vs git fetch

- `git fetch` downloads any changes on your current branch from the remote
- `git pull` does a `git fetch` first, then a `git merge`
- `git merge` actually attemps to auto-merge the incoming changes into your local working copy
- Best practice is to `git fetch` whenever you switch branches, especially if you've switched to `main`