# Content Writer Shared Context

This file contains shared context used by all Content Writer commands.

---

## Profile System

**CRITICAL:** Content Writer requires a writer profile before generating any content.

### Profile Storage
- **Memory:** Active profile loaded in conversation context
- **File:** `~/.claude/skills/writer-profiles/{profile-name}.json`

### Profile Structure
```json
{
  "name": "string",
  "brand": {
    "name": "string",
    "industry": "string",
    "targetAudience": "string",
    "valueProposition": "string"
  },
  "voice": {
    "tone": ["string"],
    "style": ["string"],
    "vocabulary": ["string"],
    "avoidWords": ["string"]
  },
  "urls": ["string"],
  "examples": ["string"],
  "products": [
    {
      "name": "string",
      "description": "string",
      "benefits": ["string"],
      "targetAudience": "string"
    }
  ],
  "ctas": [
    {
      "text": "string",
      "url": "string",
      "context": "string"
    }
  ],
  "caseStudies": [
    {
      "title": "string",
      "challenge": "string",
      "solution": "string",
      "results": "string"
    }
  ]
}
```

---

## Content Frameworks

Load from: `~/.claude/skills/writer-references/content-frameworks.md`

### Available Frameworks
- **AIDA** (Attention, Interest, Desire, Action)
- **PAS** (Problem, Agitate, Solution)
- **BAB** (Before, After, Bridge)
- **FAB** (Features, Advantages, Benefits)
- **LEMA** (Lead, Empathy, Momentum, Action)
- **4-Point** (Problem, Promise, Proof, Proposal)
- **CONVERT** (Context, Outcome, Need, Value, Evidence, Reason, Transition)

---

## Platform Conventions

### Social Media
- **LinkedIn:** `~/.claude/skills/writer-references/linkedin-conventions.md`
- **Twitter:** `~/.claude/skills/writer-references/twitter-conventions.md`
- **Facebook:** `~/.claude/skills/writer-references/facebook-conventions.md`
- **Instagram:** `~/.claude/skills/writer-references/instagram-conventions.md`

### Email Content
- Load from: `~/.claude/skills/writer-references/email-content-conventions.md`
- Newsletters, campaigns, sequences

### Web Content
- Load from: `~/.claude/skills/writer-references/web-content-conventions.md`
- Landing pages, web pages, product pages

### Sales Content
- Load from: `~/.claude/skills/writer-references/sales-content-conventions.md`
- Sales funnels, case studies, testimonials, product descriptions

---

## Integration Points

### SEO Optimization
- **Skill:** claude-seo
- **When:** Verify phase
- **Command:** `/seo:analyze [content]`

### Anti-AI Auditing
- **Skill:** humanizer
- **When:** Verify phase
- **Command:** `/humanizer:audit [content]`

---

## Output Management

### File Naming Convention
```
{content-type}-{topic-slug}-{YYYY-MM-DD}.md
```

Examples:
- `blog-post-ai-writing-2026-04-01.md`
- `linkedin-post-product-launch-2026-04-01.md`
- `newsletter-weekly-update-2026-04-01.md`

### Output Structure
```markdown
---
title: {title}
type: {content-type}
platform: {platform}
date: {YYYY-MM-DD}
profile: {profile-name}
framework: {framework-used}
seo-score: {score}
ai-audit: {pass/fail}
---

{content}

---

## Publishing Notes
{platform-specific notes}
```

---

## Anti-AI Writing Principles

From: `~/.claude/skills/writer-references/content-frameworks.md`

### Avoid These Patterns
1. Inflated symbolism (e.g., "beacon of hope", "tapestry of")
2. Promotional language ("game-changing", "revolutionary")
3. Superficial -ing analyses ("leveraging", "harnessing")
4. Vague attributions ("experts say", "studies show")
5. Em dash overuse
6. Rule of three everywhere
7. AI vocabulary words ("delve", "realm", "landscape")
8. Negative parallelisms ("not just X, but Y")
9. Excessive conjunctive phrases ("moreover", "furthermore")

### Write Like a Human
- Use contractions naturally
- Vary sentence length dramatically
- Include personal anecdotes
- Use specific examples with numbers
- Write with conviction, not hedging
- Break grammar rules when it sounds better
- Use fragments. Sometimes.

---

## Version Check System

Before processing any command, check for updates:

1. Read `~/.claude/skills/writer-update/.version` to get installed version
2. Check npm registry: `npm view claude-content-writer version`
3. Compare versions
4. If update available and not shown this session:
   - Display update notification
   - Mark as shown for this session (store in memory: `updateNotificationShown = true`)
5. Continue with user's command

**Update Notification Format:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  📦 Content Writer Update Available
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Current: v{current_version}
  Latest:  v{latest_version}

  Run /writer:update to upgrade and see what's new.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Phased Workflow State

Track current phase in memory:
```javascript
{
  phase: "discuss" | "plan" | "execute" | "verify" | "ship",
  contentType: string,
  framework: string,
  topic: string,
  requirements: object,
  plan: object,
  content: string,
  seoScore: number,
  aiAuditPassed: boolean
}
```
