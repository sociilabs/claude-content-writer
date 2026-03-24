# claude-content-writer

A Claude Code skill that writes blog articles, LinkedIn posts, and email newsletters that sound like a specific human wrote them — not like AI generated them.

## What it does

Install this skill and Claude Code gains the ability to:

- Write long-form blog articles (1,500–2,500 words by default) grounded in your real case studies and voice
- Produce LinkedIn posts and email newsletters as a coordinated content package from a single brief
- Review and humanize existing drafts — identifying and eliminating AI writing patterns
- Remember your brand, voice, CTAs, case studies, and formatting preferences across sessions

Every draft goes through a built-in anti-AI audit before delivery. The goal is content that reads like a specific person wrote it, not like a language model was asked to write about a topic.

---

## Installation

```bash
npm install -g claude-content-writer
```

The postinstall script copies the skill files to `~/.claude/skills/content-writer/`. Claude Code picks them up automatically on next launch — no config required.

---

## How it works

The skill has two modes:

### 1. Onboarding (first use)

On first use, Claude runs a structured interview across 6 areas:

| Area | What gets captured |
|---|---|
| Identity & business | Name, title, company, audience, industry |
| Voice & tone | Adjectives, influences, things to avoid |
| Content strategy | Types, themes, goals, article length |
| Case studies | Projects, outcomes, metrics, NDA constraints |
| CTAs & shortcodes | Links, booking URLs, shortcode definitions |
| Formatting & publishing | Output format, platform, timing workflow |

After the interview, Claude summarizes the profile and saves it to memory. Every future session reads from this profile — you don't repeat yourself.

### 2. Production (subsequent use)

With a profile in memory, Claude:

1. Reads the anti-AI checklist and content package conventions
2. Fetches live samples from your blog URL (if provided) to calibrate voice
3. Plans the piece: angle, case study selection, data points, CTA placement
4. Writes the draft
5. Runs a two-pass anti-AI audit and revises
6. Delivers the finished content

---

## Usage

Once installed, just talk to Claude Code naturally:

```
write a blog post about why most SaaS onboarding fails
```

```
content package on our Helm case study
```

```
humanize this draft [paste content]
```

```
add a new case study to my profile
```

```
LinkedIn post about our new pricing model
```

Claude recognizes these requests and routes them through the skill automatically.

---

## Content packages

Ask for a "content package" and Claude produces all three formats from a single brief:

1. **Blog article** — the anchor piece, full length
2. **LinkedIn post** — adapted for the feed, not just a link share
3. **Email newsletter** — platform-ready with subject line options

All three are delivered as separate files with publishing sequence notes.

---

## Voice fidelity

The skill fetches published articles from your blog URL to calibrate sentence patterns, vocabulary level, and personality — not just general tone. If you don't have a blog, it calibrates from the voice description captured during onboarding.

The anti-AI audit eliminates specific patterns: parallel list structures, rule-of-three constructions, throat-clearing openers, high-frequency AI vocabulary (leverage, seamless, robust, pivotal, etc.), em dash overuse, and generic conclusions. The checklist is based on Wikipedia's "Signs of AI writing" guide and is applied to every draft before delivery.

---

## Updating your profile

Tell Claude to update your profile at any time:

```
remember that we no longer reference the Acme project in content
change my booking link to cal.com/newlink
add this case study: [paste details]
we stopped using Mailchimp, switch to Beehiiv
```

Claude updates the relevant memory entries and uses the new information in all future sessions.

---

## Shortcodes

Define shortcodes during onboarding for CTA links and recurring text blocks:

```
{{booking_link}}   → https://cal.com/yourname
{{cta:soft}}       → your standard soft close paragraph
{{case_study:acme}} → https://yourdomain.com/case-study/acme
```

By default, Claude expands shortcodes to actual URLs in the draft. If you use a CMS that handles substitution, tell Claude to leave them as placeholders instead.

---

## Requirements

- Node.js 14+
- Claude Code (any version with skills support)

---

## License

MIT — [Sociilabs](https://sociilabs.com)
