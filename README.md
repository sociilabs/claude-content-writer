# CONTENT WRITER

**A professional content generation system with GSD-style phased workflow, integrated SEO optimization, and anti-AI auditing for Claude Code.**

**Generates content that sounds human — not AI-generated.**

[![Version](https://img.shields.io/badge/version-2.1.0-blue.svg)](https://github.com/sociilabs/claude-content-writer)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

<br>

```bash
npx skills add sociilabs/claude-content-writer
```

**Works with Claude Code, Cursor, Windsurf, and other Claude-based IDEs.**

<br>

*"Finally, content that doesn't sound like ChatGPT wrote it."*

*"The profile system is brilliant. It actually captures my voice."*

*"Best content generation tool I've used. The phased workflow ensures quality every time."*

<br>

[Why This Exists](#why-this-exists) · [How It Works](#how-it-works) · [Commands](#commands) · [Content Types](#content-types)

---

## Why This Exists

AI content generation has a problem: everything sounds the same. Generic, corporate, obviously AI-written.

Content Writer fixes that. It's a context engineering system that makes Claude generate content that sounds like a specific human wrote it — your voice, your style, your brand.

The system uses:
- **Profile-first enforcement** — Must capture your voice before generating anything
- **GSD-style phased workflow** — Structured process ensures consistent quality
- **Integrated SEO** — Built-in optimization via claude-seo
- **Anti-AI auditing** — Removes 25+ AI writing patterns via humanizer

No more generic AI slop. Just professional content that sounds human.

---

## Who This Is For

Content creators, marketers, and founders who need to produce high-quality content at scale without it sounding like AI wrote it.

---

## Getting Started

```bash
npx skills add sociilabs/claude-content-writer
```

Verify installation:
```
/writer:help
```

Create your profile first (required):
```
/writer:profile-create
```

Then start creating content:
```
/writer:discuss "blog post about SaaS pricing strategies"
```

---

## How It Works

Content Writer uses a **5-phase workflow** that ensures quality and consistency:

### 1. Discuss Phase
**Goal:** Understand what to write and why

**What happens:**
- Profile check (creates if missing)
- Topic and angle clarification
- Platform selection
- Framework recommendation
- Audience and goal definition

**Output:** Content brief with all requirements

### 2. Plan Phase
**Goal:** Research and create execution strategy

**What happens:**
- URL analysis (if provided)
- Framework application
- Detailed outline creation
- SEO strategy (keywords, meta tags)
- Example and data point planning

**Output:** Detailed content plan with structure

### 3. Execute Phase
**Goal:** Generate the content

**What happens:**
- Voice calibration from profile
- Content generation following plan
- Framework application
- Platform-specific formatting
- CTA insertion
- Metadata generation

**Output:** Complete content draft

### 4. Verify Phase
**Goal:** Quality assurance

**What happens:**
- SEO check via claude-seo
- Anti-AI audit via humanizer
- Readability analysis
- Link validation
- Metadata verification

**Output:** Quality report with issues and fixes

### 5. Ship Phase
**Goal:** Deliver final content

**What happens:**
- Save to file with metadata
- Generate publishing checklist
- Platform-specific notes
- Next steps recommendations

**Output:** Production-ready content

---

## Why It Works

### Profile-First System
Creates a comprehensive profile of your brand voice before generating any content. Includes:
- URL scanning for automatic tone detection
- 10-step interactive questionnaire
- Voice calibration from writing samples
- Enforcement — can't generate without profile

### Context Engineering
Behind the scenes: XML prompt formatting, subagent orchestration, state management. What you see: commands that just work.

### Integrated Quality Tools
- **claude-seo** — Automatic SEO optimization
- **humanizer** — Removes AI writing patterns
- **Best-in-class frameworks** — AIDA, PAS, BAB, LEMA, CONVERT

### Platform-Specific Optimization
Each content type has detailed conventions:
- Structure guidelines
- Length recommendations
- Format specifications
- Best practices
- SEO optimization

---

## Commands

### Core Workflow

**`/writer:discuss [topic]`**
Start new content project. Gathers requirements and clarifies decisions.

**`/writer:plan`**
Create execution strategy with research and SEO planning.

**`/writer:execute`**
Generate content following the plan.

**`/writer:verify`**
Run SEO check and anti-AI audit.

**`/writer:ship`**
Save final content with publishing notes.

### Profile Management

**`/writer:profile-create`**
Create new profile with URL scanning and questionnaire.

**`/writer:profile-view`**
Display current profile.

**`/writer:profile-edit`**
Modify existing profile.

**`/writer:profile-delete`**
Remove current profile.

### Utilities

**`/writer:status`**
Show current phase and profile status.

**`/writer:help`**
Display all available commands.

---

## Content Types

### Blog & Articles
- **Blog articles** — 1,500-2,500 words, SEO-optimized

### Social Media
- **LinkedIn posts** — 1,400-1,800 characters, professional
- **Twitter/X** — Single tweets or threads
- **Instagram** — Captions with hashtags
- **Facebook** — Conversational posts

### Email
- **Newsletters** — 300-800 words, scannable
- **Email campaigns** — 200-500 words, promotional
- **Email sequences** — 3-10 email nurture flows

### Web Content
- **Landing pages** — 1,000-2,500 words, conversion-focused
- **Web pages** — 500-1,500 words, informational
- **Product pages** — 800-2,000 words, e-commerce optimized

### Sales Content
- **Sales funnels** — Multi-stage conversion paths
- **Case studies** — 1,000-2,000 words, story-driven
- **Testimonials** — 50-300 words, social proof
- **Product descriptions** — 150-500 words, benefit-focused

### SEO
- **Meta descriptions** — Search-optimized
- **Title tags** — Click-optimized
- **Schema markup** — Structured data

---

## Examples

### Example 1: Blog Article

```
/writer:discuss "blog post about SaaS pricing strategies"

[Answer profile questions if first time]
[Answer content questions: audience, goal, length, etc.]

/writer:plan
[Reviews research and outline]

/writer:execute
[Generates full article]

/writer:verify
[Runs SEO and anti-AI checks]

/writer:ship
[Saves to file with metadata]
```

### Example 2: LinkedIn Post

```
/writer:discuss "LinkedIn post announcing new product feature"

/writer:plan
/writer:execute
/writer:verify
/writer:ship
```

### Example 3: Email Sequence

```
/writer:discuss "5-email onboarding sequence for new users"

/writer:plan
/writer:execute
/writer:verify
/writer:ship
```

---

## Configuration

The skill auto-installs two dependencies:
- **claude-seo** — SEO optimization (https://github.com/AgriciDaniel/claude-seo)
- **humanizer** — Anti-AI auditing (https://github.com/blader/humanizer)

Both are installed automatically during setup.

---

## Documentation

- **[SKILL.md](SKILL.md)** — Complete skill documentation
- **[CHANGELOG.md](CHANGELOG.md)** — Version history
- **[references/](references/)** — Content frameworks and conventions

---

## Troubleshooting

**Profile not found**
Run `/writer:profile-create` to create your profile first.

**SEO check fails**
Ensure claude-seo is installed: `npx skills add AgriciDaniel/claude-seo`

**Anti-AI audit fails**
Ensure humanizer is installed: `npx skills add blader/humanizer`

**Content sounds generic**
Update your profile with more voice samples and specific tone preferences.

---

## Contributing

Contributions welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) first.

---

## License

MIT License - see [LICENSE](LICENSE) file for details.

---

## Acknowledgments

Built with inspiration from:
- **Get Shit Done** — GSD-style phased workflow methodology
- **claude-seo** — SEO optimization integration
- **humanizer** — Anti-AI writing detection

---

**Made by [Sociilabs](https://github.com/sociilabs)**
