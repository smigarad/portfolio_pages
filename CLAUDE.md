# Project Rules

## Superpowers Plugin

Always attempt to use the superpowers plugin skills when applicable:

- **Before creative work** (features, components, modifications): Use `superpowers:brainstorming`
- **Before implementation**: Use `superpowers:writing-plans` for multi-step tasks
- **During implementation**: Use `superpowers:subagent-driven-development` or `superpowers:dispatching-parallel-agents`
- **For debugging**: Use `superpowers:systematic-debugging` before proposing fixes
- **For testing**: Use `superpowers:test-driven-development` before writing implementation
- **Before completion claims**: Use `superpowers:verification-before-completion`
- **For code review**: Use `superpowers:requesting-code-review` after completing work
- **For git worktrees**: Use `superpowers:using-git-worktrees` when isolation is needed

Proactively invoke the Skill tool with appropriate superpowers skills rather than working without them.

## Git Workflow

### Main Branch Protection

The `main` branch is **read-only**. Never push directly to main.

All work must be done on feature branches.

### Merging to Main

Never merge to main directly via CLI (`git merge`). Always use Pull Requests through GitHub (`gh pr create` + `gh pr merge`).

Never delete branches when merging (do not use `--delete-branch` flag).

### Commit Messages

Never use `Co-Authored-By` lines in commits.
