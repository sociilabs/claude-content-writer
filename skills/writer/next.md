---
name: writer:next
description: Auto-advance to next phase - detects current phase and runs next step automatically
---

# /writer:next - Auto-Advance

@~/.claude/skills/shared-context.md

## Objective
Automatically advance to the next phase in the workflow.

## Process
1. Check current phase from memory
2. If no phase: Run `/writer:discuss`
3. If discuss: Run `/writer:plan`
4. If plan: Run `/writer:execute`
5. If execute: Run `/writer:verify`
6. If verify: Run `/writer:ship`
7. If ship: Workflow complete

## Smart Navigation
Detects current state and executes the appropriate next command.
