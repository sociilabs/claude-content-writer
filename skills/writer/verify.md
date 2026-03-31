---
name: writer:verify
description: Quality check - run SEO optimization and anti-AI audit
---

# /writer:verify - Verify Content Quality

@~/.claude/skills/shared-context.md

## Objective
Run SEO optimization (claude-seo) and anti-AI audit (humanizer).

## Process
1. Load content from memory
2. Run SEO check: `/seo:analyze`
3. Run anti-AI audit: `/humanizer:audit`
4. Store results in memory
5. If issues found, suggest improvements
6. Inform user ready to ship

## Next
Run `/writer:ship` or `/writer:next`
