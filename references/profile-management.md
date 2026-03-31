# Profile Management System

Guidelines for managing writer profiles, products/services, and CTAs using memory storage.

---

## Overview

The profile management system uses memory storage to maintain:
- **Writer profiles** - Personal brand, voice, audience, content strategy
- **Products/services** - Offerings that can be referenced in content
- **CTAs** - Call-to-action templates for different contexts
- **Case studies** - Project examples with metrics and outcomes

All data is stored in memory with the `[Content Writer]` prefix for easy retrieval.

---

## Writer Profile Management

### Profile structure

A complete writer profile includes:
- **Identity** - Name, title, company, industry
- **Audience** - Target audience description
- **Voice** - Tone, style, adjectives, things to avoid
- **Content strategy** - Types, themes, goals, blog URL
- **Publishing preferences** - Formats, workflows, timing

### Commands

**Create/Update Profile:**
- Runs the onboarding interview (see SKILL.md)
- Saves incrementally to memory as sections are completed
- Each section stored as separate memory entry with `[Content Writer]` prefix

**View Profile:**
- Retrieves all memory entries with `[Content Writer]` prefix
- Displays in organized format by section
- Shows what's complete and what's missing

**Edit Profile:**
- Allows updating specific sections without full re-interview
- User specifies what to change (e.g., "update my voice description")
- Updates only the relevant memory entries

**Delete Profile:**
- Removes all `[Content Writer]` memory entries
- Requires confirmation before deletion
- Cannot be undone

### Memory entry format

```
[Content Writer] Name: John Smith, Title: Founder & CEO, Company: Acme Corp
[Content Writer] Business: We help B2B SaaS companies validate and build MVPs in 6 weeks instead of 6 months.
[Content Writer] Audience: Startup founders and product managers at early-stage B2B SaaS companies
[Content Writer] Industry: Software development, startup consulting
[Content Writer] Voice: Direct, opinionated, data-driven, conversational. Avoids: corporate jargon, buzzwords, inspirational fluff
[Content Writer] Voice notes: Uses "we" and "I" frequently. Shares specific client examples. Challenges conventional startup wisdom.
[Content Writer] Content types: Blog articles, LinkedIn posts, Twitter threads, content packages
[Content Writer] Content pillars: MVP validation, product development, startup mistakes, technical decision-making
[Content Writer] Content goals: Thought leadership, lead generation, LLM citation
[Content Writer] Blog URL: https://acmecorp.com/blog
[Content Writer] Article length: 1,500-2,500 words
[Content Writer] Output format: Markdown
[Content Writer] Publishing workflow: Blog first, newsletter 2 hours later, LinkedIn 2 hours after that
[Content Writer] LinkedIn prefs: 1,400-1,800 characters, bold headers, link in first comment
[Content Writer] Newsletter prefs: ConvertKit, 300-500 words, 3 subject line options
```

---

## Products/Services Management

### Product structure

Each product/service entry includes:
- **Name** - Product or service name
- **Description** - What it is and who it's for
- **Key benefits** - Main value propositions (3-5 bullets)
- **Pricing** - Price range or model
- **Target audience** - Who should use this
- **Use cases** - When to mention in content

### Commands

**Add Product:**
- Prompts for: name, description, benefits, pricing, audience, use cases
- Stores as memory entry with `[Content Writer Product]` prefix
- Can add multiple products

**Edit Product:**
- Lists existing products
- User selects which to edit
- Updates specific fields

**View Products:**
- Retrieves all `[Content Writer Product]` memory entries
- Displays in organized list format
- Shows which products are most relevant for different content types

**Delete Product:**
- Lists existing products
- User selects which to delete
- Removes from memory

### Memory entry format

```
[Content Writer Product] MVP Validation Sprint: 3-week process to validate product ideas before building. Includes customer interviews, landing page testing, paid pilots. $5K-$15K. For: Early-stage founders. Use when: Discussing validation, avoiding waste, pre-development planning.

[Content Writer Product] Technical Advisory: Ongoing CTO-level guidance for non-technical founders. Architecture reviews, hiring help, vendor evaluation. $3K/month retainer. For: Funded startups without technical co-founder. Use when: Discussing technical decisions, hiring, scaling.

[Content Writer Product] MVP Development: Full-service MVP build in 6-12 weeks. Design, development, deployment, handoff. $40K-$100K. For: Validated ideas ready to build. Use when: Discussing development, timelines, costs.
```

### Using products in content

When writing content, reference products naturally:
- **In blog articles** - Mention as examples of solutions, link in CTAs
- **In social posts** - Reference when relevant to the topic
- **In case studies** - Describe which product/service was used
- **In CTAs** - Offer as next step for readers

Don't force product mentions. Only include when genuinely relevant to the content.

---

## CTA Management

### CTA structure

Each CTA includes:
- **Name/Label** - Identifier (e.g., "soft_cta", "booking_cta", "email_cta")
- **Type** - Soft, direct, or specific offer
- **Text** - The actual CTA copy
- **Context** - When to use (blog, LinkedIn, Twitter, etc.)
- **Link** - URL or shortcode

### Commands

**Add CTA:**
- Prompts for: name, type, text, context, link
- Stores as memory entry with `[Content Writer CTA]` prefix
- Can add multiple CTAs for different contexts

**Edit CTA:**
- Lists existing CTAs
- User selects which to edit
- Updates specific fields

**View CTAs:**
- Retrieves all `[Content Writer CTA]` memory entries
- Displays organized by type and context
- Shows which CTAs work for which platforms

**Delete CTA:**
- Lists existing CTAs
- User selects which to delete
- Removes from memory

### Memory entry format

```
[Content Writer CTA] soft_booking: Type: Soft. Text: "If you're dealing with this, let's talk. Book a 30-minute call and we'll tell you what we think - even if the answer is 'you're fine, keep going.'" Context: Blog articles, LinkedIn posts. Link: https://cal.com/acmecorp

[Content Writer CTA] direct_booking: Type: Direct. Text: "Ready to validate your idea? Book a discovery call to see if our 3-week validation sprint is right for you." Context: Blog articles (closing CTA), content packages. Link: https://cal.com/acmecorp

[Content Writer CTA] email: Type: Soft. Text: "Questions about this? Email me at hello@acmecorp.com - I respond to every message." Context: Blog articles, newsletters. Link: hello@acmecorp.com

[Content Writer CTA] case_study: Type: Specific offer. Text: "Want to see how this works in practice? Check out our case study library." Context: Blog articles, LinkedIn. Link: https://acmecorp.com/case-studies

[Content Writer CTA] newsletter: Type: Soft. Text: "I write about this stuff weekly. Join 2,000+ founders getting practical startup advice." Context: Blog articles (sidebar/footer). Link: https://acmecorp.com/newsletter

[Content Writer CTA] twitter_soft: Type: Soft. Text: "DM me if you're dealing with this - happy to share what's worked for us." Context: Twitter threads, tweets. Link: DM

[Content Writer CTA] linkedin_soft: Type: Soft. Text: "Dealing with this? Drop a comment or DM me - I'll share what we've learned." Context: LinkedIn posts. Link: Comment/DM
```

### CTA types

**Soft CTAs:**
- Conversational, low-pressure
- "Happy to chat," "Let me know if you have questions"
- Works well in: Blog articles (embedded), social posts, newsletters
- Use when: Building relationship, not explicitly selling

**Direct CTAs:**
- Clear ask, specific action
- "Book a call," "Download the guide," "Get started"
- Works well in: Blog article closings, landing pages, email campaigns
- Use when: Reader is ready to take action

**Specific offer CTAs:**
- Tied to a particular product/service/resource
- "Check out our case studies," "Download our MVP checklist"
- Works well in: Contextual mentions, related content
- Use when: Content directly relates to the offer

### Platform-specific CTA guidelines

**Blog articles:**
- 2-3 embedded soft CTAs throughout
- 1 direct CTA at the end
- Optional: Transparent commercial section

**LinkedIn posts:**
- 1 soft CTA in the post
- Link to blog/resource in first comment
- Conversational, discussion-oriented

**Twitter/X:**
- Soft CTAs only ("DM me")
- No direct links in tweets (kills engagement)
- Link in bio or thread reply

**Facebook:**
- Soft CTAs in post
- Link in first comment (not post body)
- Question-based CTAs work well

**Instagram:**
- "Link in bio" is standard
- Question-based CTAs for comments
- No clickable links in captions

**Newsletters:**
- 1-2 soft CTAs embedded
- 1 direct CTA at the end
- Can be more sales-oriented than social

---

## Case Studies Management

### Case study structure

Each case study includes:
- **Name/Label** - Project identifier (can be anonymized)
- **Client context** - Industry, company size, situation
- **Problem** - What they were facing
- **Approach** - What you did
- **Outcome** - Specific metrics and results
- **Testimonial** - Quote (if available)
- **NDA status** - Can name client? Yes/No
- **Rotation status** - Active, rest, retired

### Commands

**Add Case Study:**
- Prompts for: name, context, problem, approach, outcome, testimonial, NDA status
- Stores as memory entry with `[Content Writer Case Study]` prefix
- Can add multiple case studies

**Edit Case Study:**
- Lists existing case studies
- User selects which to edit
- Updates specific fields

**View Case Studies:**
- Retrieves all `[Content Writer Case Study]` memory entries
- Displays with rotation status
- Shows which are overused and should rest

**Delete Case Study:**
- Lists existing case studies
- User selects which to delete
- Removes from memory

### Memory entry format

```
[Content Writer Case Study] HealthTech Platform: Healthcare startup, 8 months of development, zero users. Problem: Built without customer validation. Approach: Interviewed 30 providers in 2 weeks, found different problem, built focused MVP in 6 weeks, launched to 5 paid pilots. Outcome: $120K revenue in 6 months, 40 customers. NDA: No (can name). Rotation: Active.

[Content Writer Case Study] Fintech MVP: Series A fintech, wanted 15 features. Problem: Scope too large, 6-month timeline. Approach: Used feature prioritization framework, reduced to 3 core features. Outcome: 6-week timeline, launched on time, validated with real users. NDA: Yes (anonymize). Rotation: Active.

[Content Writer Case Study] E-commerce Rebuild: Mid-market e-commerce, legacy platform. Problem: $200K migration quote, 12-month timeline. Approach: Phased migration, started with checkout flow. Outcome: $60K total cost, 4-month timeline, 40% conversion improvement. Testimonial: "Saved us $140K and 8 months." NDA: No (can name). Rotation: Rest (overused in Q1).
```

### Case study rotation

To avoid overusing the same examples:
- **Active** - Use freely in content
- **Rest** - Used heavily recently, give it a break
- **Retired** - Outdated or no longer relevant

When writing content:
1. Check rotation status in memory
2. Prioritize "Active" case studies
3. Avoid "Rest" case studies unless perfect fit
4. Never use "Retired" case studies

Update rotation status quarterly or when a case study appears in 3+ pieces in a month.

---

## Shortcodes System

### What are shortcodes?

Shortcodes are placeholders that get replaced with actual content. They allow:
- Dynamic content insertion
- CMS integration
- Easy updates across multiple pieces
- Consistent formatting

### Shortcode format

```
{{shortcode_name}}
{{shortcode_name:parameter}}
```

### Standard shortcodes

```
{{booking_link}} → https://cal.com/acmecorp
{{email}} → hello@acmecorp.com
{{website}} → https://acmecorp.com
{{blog}} → https://acmecorp.com/blog
{{newsletter}} → https://acmecorp.com/newsletter

{{cta:soft}} → Inserts soft CTA text
{{cta:direct}} → Inserts direct CTA text
{{cta:email}} → Inserts email CTA text

{{case_study:healthtech}} → Links to specific case study
{{case_study:fintech}} → Links to specific case study

{{product:mvp_validation}} → Links to product page
{{product:advisory}} → Links to product page

{{author_name}} → John Smith
{{author_title}} → Founder & CEO
{{company_name}} → Acme Corp
```

### Using shortcodes

**In content generation:**
- By default, expand shortcodes to actual content
- User can request to leave as shortcodes for CMS integration
- Ask on first use if unclear

**In memory storage:**
- Store the shortcode definitions in memory
- Format: `[Content Writer Shortcode] booking_link: https://cal.com/acmecorp`

**In different formats:**
- **Blog articles** - Expand to actual content (readers see final version)
- **CMS drafts** - Leave as shortcodes if user prefers
- **Social posts** - Expand to actual content
- **Templates** - Leave as shortcodes

---

## Memory Management Best Practices

### Naming conventions

All memory entries use prefixes:
- `[Content Writer]` - Profile information
- `[Content Writer Product]` - Products/services
- `[Content Writer CTA]` - Call-to-action templates
- `[Content Writer Case Study]` - Case studies
- `[Content Writer Shortcode]` - Shortcode definitions

### Memory entry guidelines

- **Keep entries concise** - Under 500 characters per entry
- **Split long content** - Multiple entries for complex information
- **Use consistent formatting** - Makes retrieval easier
- **Update regularly** - Keep information current
- **Delete outdated entries** - Don't let stale data accumulate

### Retrieving profile data

Before writing any content:
1. Retrieve all `[Content Writer]` memory entries
2. Check for completeness
3. If profile is incomplete, run onboarding
4. If profile exists, proceed with production mode

### Updating profile data

When user provides new information:
1. Identify which memory entries need updating
2. Use memory tool to update specific entries
3. Confirm changes with user
4. Don't create duplicate entries

---

## Profile Management Workflows

### First-time setup

1. User triggers profile creation
2. Run onboarding interview (6 sections)
3. Save each section to memory incrementally
4. Confirm complete profile with user
5. Ready to generate content

### Viewing profile

1. Retrieve all `[Content Writer]` memory entries
2. Organize by section (Identity, Voice, Strategy, etc.)
3. Display in readable format
4. Highlight any missing sections

### Editing profile

1. User specifies what to change
2. Retrieve relevant memory entries
3. Show current values
4. Prompt for new values
5. Update memory entries
6. Confirm changes

### Adding products/CTAs/case studies

1. User triggers add command
2. Prompt for required fields
3. Validate completeness
4. Save to memory with appropriate prefix
5. Confirm addition

### Deleting data

1. User triggers delete command
2. Show what will be deleted
3. Require explicit confirmation
4. Delete from memory
5. Confirm deletion

---

## Integration with Content Generation

### Before writing any content

1. **Check for profile** - Retrieve `[Content Writer]` memories
2. **If no profile** - Run onboarding interview
3. **If profile exists** - Load voice, audience, strategy
4. **Retrieve products** - Load `[Content Writer Product]` entries
5. **Retrieve CTAs** - Load `[Content Writer CTA]` entries
6. **Retrieve case studies** - Load `[Content Writer Case Study]` entries with rotation status

### During content generation

1. **Apply voice** - Use voice guidelines from profile
2. **Target audience** - Write for specified audience
3. **Reference products** - Mention when relevant
4. **Insert CTAs** - Use appropriate CTAs for platform
5. **Include case studies** - Use active case studies, respect rotation
6. **Expand shortcodes** - Replace with actual content (or leave as-is per user preference)

### After content generation

1. **Run anti-AI checklist** - Ensure human voice
2. **Verify CTAs** - Check links and placement
3. **Check case study rotation** - Update if needed
4. **Save to outputs** - Store in `/mnt/user-data/outputs/`
5. **Present to user** - Deliver with publishing notes

---

## Example: Complete Profile in Memory

```
[Content Writer] Name: Sarah Chen, Title: Head of Product, Company: BuildRight
[Content Writer] Business: We help non-technical founders build and launch MVPs without getting ripped off by agencies or hiring the wrong developers.
[Content Writer] Audience: Non-technical startup founders, first-time entrepreneurs, bootstrapped companies
[Content Writer] Industry: Product development, startup consulting
[Content Writer] Voice: Direct, protective, data-driven, slightly irreverent. Avoids: tech jargon, corporate speak, "just hire a developer" advice
[Content Writer] Voice notes: Writes like talking to a friend who's about to make an expensive mistake. Uses "you" and "I" frequently. Shares horror stories and lessons learned.
[Content Writer] Content types: Blog articles, LinkedIn posts, Twitter threads, newsletters
[Content Writer] Content pillars: MVP development, agency red flags, hiring developers, product validation, avoiding scams
[Content Writer] Content goals: Lead generation, thought leadership, founder education
[Content Writer] Blog URL: https://buildright.io/blog
[Content Writer] Article length: 1,200-2,000 words
[Content Writer] Output format: Markdown
[Content Writer] Publishing workflow: Blog live first, LinkedIn 2 hours later, newsletter next day, Twitter thread 1 week later
[Content Writer] LinkedIn prefs: 1,500 characters, conversational, link in comments
[Content Writer] Newsletter prefs: ConvertKit, 400 words, single subject line (no options)

[Content Writer Product] MVP Validation: 2-week validation sprint before building anything. Customer interviews, landing page, pilot signups. $3K-$8K. For: Pre-product founders. Use when: Discussing validation, avoiding waste.

[Content Writer Product] MVP Development: Full MVP build in 8-12 weeks. Design, development, launch support. $30K-$80K. For: Validated ideas. Use when: Discussing development, timelines, costs.

[Content Writer Product] Developer Vetting: Help hiring your first technical co-founder or developer. Interview prep, technical assessment, offer negotiation. $2K flat fee. For: Non-technical founders hiring. Use when: Discussing hiring, team building.

[Content Writer CTA] soft_email: Type: Soft. Text: "Not sure if you need help? Email me at sarah@buildright.io - I'll tell you honestly if you do or don't." Context: Blog, LinkedIn. Link: sarah@buildright.io

[Content Writer CTA] direct_booking: Type: Direct. Text: "Ready to build your MVP the right way? Book a free 30-minute consultation." Context: Blog closing, packages. Link: https://cal.com/buildright

[Content Writer CTA] horror_stories: Type: Specific. Text: "Want to avoid these mistakes? I've compiled 47 agency red flags in a free guide." Context: Agency-related content. Link: https://buildright.io/agency-red-flags

[Content Writer Case Study] HealthTech Disaster: Founder paid $120K to agency, got unusable code. Problem: No technical oversight, agency cut corners. Approach: Code audit, found 200+ critical issues, rebuilt from scratch. Outcome: $45K rebuild, launched in 10 weeks, now at $80K MRR. NDA: Yes (anonymize). Rotation: Active.

[Content Writer Case Study] Fintech MVP: Non-technical founder, validated idea, $50K budget. Problem: Didn't know how to hire or what to build. Approach: Validation sprint, focused MVP scope, managed development. Outcome: Launched in 9 weeks, $42K total cost, 100 beta users in month 1. Testimonial: "Sarah saved me from making $100K in mistakes." NDA: No (can name). Rotation: Active.

[Content Writer Shortcode] booking_link: https://cal.com/buildright
[Content Writer Shortcode] email: sarah@buildright.io
[Content Writer Shortcode] website: https://buildright.io
```

This complete profile enables the skill to generate content that sounds like Sarah, references her products naturally, uses her CTAs appropriately, and includes her case studies with proper rotation.
