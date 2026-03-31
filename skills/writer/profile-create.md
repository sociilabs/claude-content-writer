---
name: writer:profile-create
description: Create writer profile with URL scanning and comprehensive questionnaire
---

# /writer:profile-create - Create Profile

@~/.claude/skills/shared-context.md

## Objective
Create a new writer profile with URL scanning and comprehensive brand questionnaire.

## Process
1. Ask for profile name
2. Offer URL scanning (optional)
   - Scan provided URLs for tone/voice
   - Extract brand information
3. Run 10-step questionnaire:
   - Brand name and industry
   - Target audience
   - Value proposition
   - Tone preferences
   - Style preferences
   - Vocabulary preferences
   - Words to avoid
   - Products/services
   - CTAs
   - Case studies
4. Save profile to ~/.claude/skills/writer-profiles/{name}.json
5. Load profile into memory
6. Confirm profile created

## Output
Profile created and ready for content generation.
