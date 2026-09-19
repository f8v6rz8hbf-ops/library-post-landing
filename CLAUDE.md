## Repository safety rules

For this project, the canonical working copy is:

`/Users/joseba/library-post-landing-v2`

Production changes must be made only from:
- branch: `main`
- repo path: `/Users/joseba/library-post-landing-v2`

Before editing anything, always verify:
- current path
- current branch
- HEAD commit
- `git status`
- whether this checkout is a worktree
- whether `main` is up to date with `origin/main`

If you are not in `/Users/joseba/library-post-landing-v2` on clean, updated `main`:
- DO NOT edit
- DO NOT commit
- DO NOT push
- stop and tell me

Before any push, always verify:
- `git branch --show-current` returns `main`
- `git status` contains only approved files
- `git log -1 --oneline` shows the intended commit
- `git diff origin/main...HEAD --name-only` contains only approved files

Never push from a Claude worktree or divergent branch unless I explicitly instruct you to do so.
