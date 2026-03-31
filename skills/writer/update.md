---
name: writer:update
description: Check for updates and upgrade to latest version with changelog preview
---

# /writer:update - Update Content Writer

@~/.claude/skills/shared-context.md

## Objective
Check for updates and upgrade Content Writer to latest version.

## Process
1. Read installed version from ~/.claude/skills/writer-update/.version
2. Check npm registry: npm view claude-content-writer version
3. Compare versions
4. If update available:
   - Show changelog preview
   - Ask for confirmation
   - Run: npm install -g claude-content-writer@latest
   - Display what's new
5. If already latest:
   - Confirm up to date
   - Show current version

## Output
Update status and changelog if applicable.
