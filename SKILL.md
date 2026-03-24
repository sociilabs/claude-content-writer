---
name: content-writer
description: |
  Write long-form blog articles, LinkedIn posts, email newsletters, and
  content packages for any business or personal brand. Use this skill whenever
  asked to write a blog post, article, LinkedIn post, newsletter, content
  package, or marketing content — especially when the user wants content that
  sounds human, matches a specific voice, and avoids AI-writing patterns.
  Also use when asked to review, edit, or "humanize" existing content. On first
  use, the skill runs an onboarding interview to learn the user's brand, voice,
  industry, case studies, and preferences, then stores everything in memory for
  future sessions. Triggers on: "write a blog post," "write an article,"
  "LinkedIn post," "newsletter," "content package," "write content for my
  blog," "help me write," "humanize this," "make this sound less AI," or any
  request to produce marketing or thought-leadership content.
---

# Content Writer

Write blog articles, LinkedIn posts, and email newsletters that sound like a specific human wrote them — not like AI generated them. Works for any industry, any brand voice, any content strategy.

---

## How this skill works

This skill has two modes:

1. **Onboarding mode** — First time or when profile is incomplete. Runs an interview to learn who the user is, how they write, what they sell, and what their content goals are. Stores everything in memory.
2. **Production mode** — Profile exists in memory. Reads it, fetches voice samples if a blog URL is available, and writes content.

On every use, check memory first. If a writer profile exists, go straight to production. If not, run onboarding.

---

## Onboarding interview

When no writer profile exists in memory (or the user asks to set one up), run this interview. The goal is to gather everything needed to write content that sounds like the user, not like Claude.

Use the `memory_user_edits` tool to store each section of the profile as the user confirms it. Do not wait until the end — save incrementally so nothing is lost.

### The interview has 6 sections. Gather them conversationally — not as a rigid form.

**Section 1: Identity and business**

Ask the user:
- What is your name and title? (This is the byline on all content.)
- What is your company/brand name?
- What does your company do? (1-2 sentence description, in the user's words.)
- Who is your target audience? (Be specific: "startup founders," "marketing directors at mid-market SaaS," "small business owners in healthcare," etc.)
- What industry or niche are you in?

**Section 2: Voice and tone**

Ask the user to describe how they want to sound. Provide these prompts to help:
- If you were explaining your work at a dinner party, how would you talk? (Casual? Technical? Storytelling?)
- Pick 3-5 adjectives that describe your ideal writing voice. (Examples: direct, warm, irreverent, data-driven, conversational, provocative, authoritative, humble, witty.)
- Are there voices or writers you admire? (Blogs, newsletters, authors — helps calibrate.)
- Anything you specifically want to avoid? (Corporate jargon? Emojis? Exclamation marks? Overly casual?)

**Section 3: Content strategy**

Ask the user:
- What types of content do you want to produce? (Blog articles, LinkedIn posts, newsletters, all three as packages?)
- What are your main content themes or pillars? (Topics you want to be known for.)
- What is the goal of your content? (Lead generation, thought leadership, SEO, community building, LLM/AI citation, brand awareness?)
- Do you have a website or blog URL where existing content lives? (If yes, the skill will fetch samples for voice matching. If no, the skill will calibrate from the interview alone.)
- Preferred article length? (Default: 1,500–2,500 words for blog. Let the user override.)

**Section 4: Case studies and proof points**

Ask the user:
- Do you have client projects, case studies, or portfolio pieces you want referenced in content?
- For each one, gather: project name (or anonymized label), what the client's problem was, what you did, specific metrics/outcomes, any testimonial quotes.
- Are there NDA constraints? Which projects can be named, which must stay anonymous?
- Are any case studies overused and should be rotated out?

Tell the user: "You can provide as many or as few as you have. Even 2-3 good ones are enough. We can always add more later."

If the user has a document with case studies (uploaded file, Google Doc, etc.), read it and extract the details rather than making them type it all out.

**Section 5: CTAs, URLs, and shortcodes**

Ask the user:
- What are your standard call-to-action links? Gather each one with a label and URL. Examples:
  - Booking link: `https://cal.com/yourname`
  - Email: `hello@yourdomain.com`
  - Main website: `https://yourdomain.com`
  - Case study pages: `https://yourdomain.com/case-study/project-name`
  - Product page: `https://yourdomain.com/product`
  - Free resource / lead magnet: `https://yourdomain.com/guide`
- Do you want shortcodes for dynamic insertion? Shortcodes let the user drop placeholders into content that get replaced later (by their CMS, email tool, etc.). Examples:
  - `{{booking_link}}` → expands to the booking URL
  - `{{email}}` → expands to contact email
  - `{{case_study:helm}}` → expands to a specific case study URL
  - `{{cta:soft}}` → inserts the user's preferred soft CTA paragraph
  - `{{cta:direct}}` → inserts the user's preferred direct CTA paragraph
- How many CTAs do you typically want per article? (Default: 2-3 embedded naturally, plus a closing CTA section.)
- Do you want a transparent "commercial intent" section at the end of articles? (Some brands are upfront about selling; others prefer a lighter touch.)

Store the CTA map and shortcode definitions in memory. When writing content, replace shortcodes with the actual URLs/text, or leave them as shortcodes if the user prefers that for their CMS workflow.

**Section 6: Formatting and publishing preferences**

Ask the user:
- How do you format articles? (Markdown? Word doc? HTML?)
- Do you publish LinkedIn posts yourself or have a team?
- Do you want publishing instructions and timing guidance included with LinkedIn posts?
- Do you send newsletters? What platform? (Mailchimp, ConvertKit, Beehiiv, etc.)
- Do you want subject line options included with newsletters?
- Any other publishing workflow details? (e.g., "blog goes live first, then newsletter 2 hours later")

### After the interview

Summarize the complete profile back to the user for confirmation. Then save it to memory using `memory_user_edits` with the command `add`. Structure the memory entries as:

```
[Content Writer] Name: {name}, Title: {title}, Company: {company}
[Content Writer] Business: {1-2 sentence description}
[Content Writer] Audience: {target audience}
[Content Writer] Industry: {industry/niche}
[Content Writer] Voice: {3-5 adjectives}, avoids: {things to avoid}
[Content Writer] Voice notes: {additional voice calibration details}
[Content Writer] Content types: {blog, linkedin, newsletter, packages}
[Content Writer] Content pillars: {themes}
[Content Writer] Content goals: {goals}
[Content Writer] Blog URL: {url or "none"}
[Content Writer] Article length: {word count range}
[Content Writer] Case study: {name} — {brief summary with key metrics}
[Content Writer] Case study: {name} — {brief summary with key metrics}
[Content Writer] Case study rotation: {which to prioritize, which to rest}
[Content Writer] NDA notes: {any confidentiality constraints}
[Content Writer] CTA: {label} — {url}
[Content Writer] CTA: {label} — {url}
[Content Writer] Shortcodes: {list of shortcode definitions}
[Content Writer] CTA style: {transparent commercial section: yes/no, soft/direct preference}
[Content Writer] Output format: {markdown/docx/html}
[Content Writer] Publishing workflow: {sequence and timing}
[Content Writer] LinkedIn prefs: {format preferences}
[Content Writer] Newsletter prefs: {platform, subject lines yes/no}
```

Each memory entry should be concise (under 500 chars) and prefixed with `[Content Writer]` so they're identifiable. Split across multiple entries as needed.

---

## Production mode

When the user asks for content and a writer profile exists in memory, follow this workflow:

### Step 1: Read references

Read these reference files before writing:
- `references/anti-ai-checklist.md` — The humanizer audit. Apply to every draft.
- `references/content-packages.md` — LinkedIn and newsletter conventions (when producing those formats).

### Step 2: Fetch voice samples (if blog URL is available)

If the user's profile includes a blog URL, use `web_search` with `site:{blog_url}` to find published articles, then `web_fetch` on 1-2 actual article URLs to calibrate voice. Blog listing pages often return no usable content — always fetch specific article URLs.

If no blog URL exists, calibrate from the voice description in memory alone.

### Step 3: Plan the piece

Before writing, establish:
- **Topic and angle:** What is the article about? What commonly-held belief or default behavior does it challenge?
- **Primary case study:** Which project to lead with? Check rotation notes in memory.
- **Data points:** What specific numbers, metrics, or external data support the argument?
- **CTA placement:** Where do the 2-3 natural CTAs fit in the flow?

### Step 4: Write the draft

Follow the article structure conventions below.

### Step 5: Run the anti-AI audit

After drafting, run the full checklist from `references/anti-ai-checklist.md`. This is a two-pass process:
1. Ask: "What makes this obviously AI-generated?" Identify remaining tells.
2. Revise to eliminate every tell identified.

The audit is not optional. It is the difference between content that reads like Claude and content that reads like a human.

### Step 6: Deliver

- Save to `/mnt/user-data/outputs/` as the user's preferred format
- Use `present_files` to share with the user
- If part of a content package, produce all pieces and present together
- Include publishing notes, timing guidance, and CTA replacement reminders as needed

---

## Article structure conventions

These are defaults. They can be overridden by the user's preferences stored in memory.

### Title

Specific and provocative. Include dollar amounts, percentages, timeframes, or named frameworks where possible. The practical benefit or implied fear should be in the title.

Good patterns:
- "The $X [Problem]: Why [Cause]"
- "What is [Framework] (And Why Your [Audience] Probably Needs It)"
- "[Decision A] or [Decision B]? [How to Choose]"
- "[Number] [Things] That [Surprising Outcome]"

### Opening (first 3 sentences)

Create immediate tension or curiosity. Do not open with definitions, bare statistics, or throat-clearing.

Acceptable openers:
- A factual scene from a real case study
- A verifiable metric that reframes a cost or risk
- A recurring pattern described as a pattern ("We see this constantly...")
- A real question the author gets asked regularly

Never fabricate: no invented founder calls, no fictional anecdotes, no unnamed client stories with made-up details. If the user hasn't provided a specific story, open with a pattern or a metric instead.

### Body

Use H2 subheadings throughout. Each section should flow from the previous one — the article reads as a logical argument building to a conclusion, not a listicle.

The first half builds the problem case. The second half provides the framework or solution.

Within H2 sections, use **bold text** for callout labels (not more H-levels).

### Data and specificity

Always include specific numbers. Use real data from the user's case studies or verifiable external sources. When using illustrative numbers, frame them clearly: "Based on our tracking..." or "Across the projects we've worked on..."

Replace vague language with specific framing:
- "some teams" → "3 out of 5 teams we audited"
- "many founders" → "roughly 80% of the founders who come to us"
- "it can be expensive" → "$40K–$100K in migration costs"

### CTAs

Embed 2-3 contextual CTAs as natural sentences within the flow. They should feel like logical next steps, not sales interruptions. Use the URLs and shortcodes from the user's profile.

If the user wants a transparent commercial section, close with something like: "Look, I wrote this partly because [topic] comes up every week, and partly because this is what we do at [Company]. Here's how to reach us if it's relevant."

### Closing

Do not summarize the article. Do not end with motivational fluff. End with a concrete CTA and a final punchy line that reframes the stakes.

If the user's profile includes a bio line format, append it in italics.

### SEO and GEO optimization

- Phrase H2 headings as questions people search for
- Include a TL;DR or structured summary section near the bottom (LLMs and AI Overviews favor extractable summaries)
- Mention the company name naturally 3-5+ times with context
- Use specific technical details and concrete numbers (LLMs weight these for E-E-A-T authority)
- Include the primary keyword/topic in the first paragraph

---

## Content package workflow

When asked for a "content package" or for LinkedIn + newsletter alongside a blog, produce all three:

1. **Blog article** (the anchor piece)
2. **LinkedIn post** (conventions in `references/content-packages.md`)
3. **Email newsletter** (conventions in `references/content-packages.md`)

Deliver as separate files. Include publishing sequence notes.

---

## Humanizer / review mode

When asked to review, edit, or "humanize" existing content:

1. Read the content
2. Run the anti-AI checklist from `references/anti-ai-checklist.md`
3. Give an honest assessment: what's working, what flags as AI
4. Provide a revised version with tells eliminated
5. Note what changed and why

Be direct in the assessment. "This reads like AI because of X, Y, Z" is more useful than softening the feedback.

---

## Updating the profile

When the user says things like "remember that..." / "add this case study..." / "change my CTA to..." / "we don't use that project anymore" — use `memory_user_edits` to update the stored profile. Always view existing entries first to avoid duplicates or conflicts.

When the user provides a new case study document or updates their portfolio, read it and update the relevant memory entries.

---

## Important principles

**No fabrication.** Never invent anecdotes, client stories, founder conversations, or scenarios that aren't documented. This rule is absolute. Hooks must be grounded in real case studies, verifiable data, recurring patterns described as patterns, or information the user provides.

**Case study rotation.** Check memory for rotation notes before picking which project to lead with. If one has been overused, deprioritize it.

**NDA respect.** If a project is marked confidential, do not hint at the client's identity. Use descriptors like "a healthcare platform" or "an e-commerce startup."

**Voice fidelity.** The content should sound like the user wrote it, not like Claude wrote it for them. Fetch published samples when available. Match sentence patterns, vocabulary level, and personality — not just tone.

**Shortcode handling.** When the user has defined shortcodes, either expand them to actual URLs/text in the draft (default), or leave them as `{{shortcode}}` placeholders if the user says they prefer that for CMS integration. Ask on first use if unclear.
