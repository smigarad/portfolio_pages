# Project Rules

## Git Workflow

### Main Branch Protection

The `main` branch is **read-only**. Never push directly to main.

All work must be done on feature branches.

### Merging to Main

Never merge to main directly via CLI (`git merge`). Always use Pull Requests through GitHub (`gh pr create` + `gh pr merge`).

Never delete branches when merging (do not use `--delete-branch` flag).

### Commit Messages

Never use `Co-Authored-By` lines in commits.
