# Content Package Conventions

When producing a content package (blog + LinkedIn + newsletter), follow these format-specific conventions. All defaults can be overridden by the user's preferences stored in memory.

---

## LinkedIn Post

### Format defaults
- **Length:** 1,400–1,800 characters (under LinkedIn's 3,000 limit). Long enough for substance, short enough that people finish it.
- **Bold headers:** Use Unicode bold characters (e.g., 𝗦𝗲𝗰𝘁𝗶𝗼𝗻 𝗡𝗮𝗺𝗲) for section labels. These render as bold natively on LinkedIn without markdown support.
- **No external link in the post body.** LinkedIn's algorithm suppresses reach on posts with external links by 40–50%. The blog link goes in the first comment only.
- **Arrow bullets (→)** for framework steps or key points. Mobile-readable and visually distinct.
- **Line breaks** are deliberate for mobile readability. LinkedIn is primarily consumed on phones.

### Structure
1. **Hook** (first 2-3 lines visible above "see more"): A surprising stat, a real scenario, or a provocative claim. This determines click-through. Make it count.
2. **Body:** Condensed version of the blog's core argument. 2-3 proof points with specific metrics or case study references.
3. **Closing:** Punchy line that reframes the stakes or delivers the core takeaway.
4. **"Link in comments 👇"** as the final line.

### First comment template
Post immediately after publishing:

```
Full article: [INSERT BLOG URL]

[Soft CTA using the user's booking link or email]
```

### Publishing notes (include with every LinkedIn post)

**Timing:** Tuesday–Thursday. 8:00–10:00 AM in the target audience's primary timezone.

**First-hour engagement playbook:**
- Post the first comment with the link immediately after publishing
- Reply to every comment within 60 minutes
- Have 2–3 team members or colleagues leave genuine comments in the first 30 minutes
- This signals LinkedIn's algorithm to push distribution significantly

**Hashtags:** 3–5 relevant tags. Mix broad (#StartupLife, #SoftwareDevelopment) with topic-specific (#MVPDevelopment, #AIIntegration).

---

## Email Newsletter

### Format defaults
- **Subject line:** Provide 3 options ranging from provocative to direct. Let the user pick.
- **Preview text:** One sentence that creates curiosity or delivers a compelling stat.
- **Body tone:** Conversational, first-person. Reads like an email from a person, not a marketing blast.
- **Arrow formatting (→)** for scannable key points.
- **Length:** 300–500 words. Short enough to read in 2 minutes, valuable enough that someone who doesn't click the article link still walks away with a takeaway.
- **CTA:** Soft framing by default. "Happy to take a look" / "We'll tell you what we think, even if the answer is 'you're fine.'" Adjust to match user's CTA style preference.

### Structure
1. **Opening question or scenario** — Makes the reader think about their own situation.
2. **Key insights (3-4 points with → arrows)** — Delivers value from the blog article in scannable format.
3. **Brief case study reference** — One specific example with a metric. Builds credibility.
4. **CTA** — Link to the blog article + soft offer using the user's booking/contact links.
5. **Sign-off** using the user's name, title, company, and email.

### Send notes (include with every newsletter)

**Timing:** Tuesday, Wednesday, or Thursday. 10:00 AM in the primary audience timezone. Avoid Monday (inbox overload) and Friday (checked out).

**Sequence:** Send 1–2 hours after the blog article is live so all links work.

**Segmentation suggestion:** For warm leads currently in pipeline, forward separately with a personal note: "Thought of you — this is relevant to what we discussed."

**Format:** Plain text or light HTML. White background, single column, 16px minimum font. Arrow symbols (→) and bold text translate to HTML bold tags.

---

## Publish sequence

The default publishing sequence (can be customized in user profile):

1. **Blog article goes live first** — So all links work and search engines begin indexing.
2. **Newsletter sends 1–2 hours later** — Primes the warmest audience.
3. **LinkedIn post goes up 2–3 hours after newsletter** — Newsletter readers engage early with the LinkedIn post, signaling the algorithm to push distribution.

Always include `[INSERT BLOG URL]` placeholders in LinkedIn and newsletter files. These get replaced once the blog is published.

---

## Tags

After producing a blog article, suggest 5–7 tags for the user's website. Prioritize:
- High-value SEO topic tags (e.g., "MVP Development," "AI Integration")
- Audience tags (e.g., "Founder Resources," "Startup Development")
- Practice tags (e.g., "Engineering Best Practices," "Software Architecture")

Keep to 5–7 max to avoid tag dilution. Granular technology names (React, Node.js) are usually better served by the article's body content than by tags.

---

## Shortcode handling in content packages

If the user has defined shortcodes in their profile, apply them consistently across all three pieces:

- `{{booking_link}}` → Replace with actual URL or leave as placeholder per user preference
- `{{email}}` → Replace with contact email
- `{{case_study:name}}` → Replace with case study URL
- `{{cta:soft}}` → Insert the user's preferred soft CTA paragraph
- `{{cta:direct}}` → Insert the user's preferred direct CTA paragraph
- Custom shortcodes defined by the user

In the blog article, expand shortcodes to actual content by default (readers see the final version). In raw drafts intended for CMS import, leave shortcodes as-is if the user prefers that workflow. Ask on first use if unclear.
