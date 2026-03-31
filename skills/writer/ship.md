---
name: writer:ship
description: Finalize and save - generate markdown file with metadata and publishing notes
---

# /writer:ship - Ship Content

@~/.claude/skills/shared-context.md

## Objective
Save content to file with metadata and publishing notes.

## Process
1. Load all state from memory
2. Generate filename: {type}-{topic}-{date}.md
3. Create markdown file with frontmatter
4. Add publishing notes
5. Save to current directory
6. Display success message with file path
7. Clear workflow state

## Output
File saved with complete metadata and publishing guidance.
