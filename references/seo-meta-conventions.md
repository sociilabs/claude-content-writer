# SEO and Social Meta Data Conventions

Guidelines for creating search engine and social media metadata that drives clicks and improves discoverability.

---

## Overview

Meta data is the information that appears when your content is shared on social media or displayed in search results. It includes:

- **Title tags** - The clickable headline in search results
- **Meta descriptions** - The preview text under the title
- **Open Graph tags** - How content appears on Facebook, LinkedIn
- **Twitter Cards** - How content appears on Twitter/X
- **Schema markup** - Structured data for rich results

Good metadata increases click-through rates by 20-40% and improves social sharing engagement.

---

## Title Tags (SEO)

### Format defaults
- **Length:** 50-60 characters (Google truncates at ~60)
- **Include primary keyword** near the beginning
- **Include brand name** at the end (separated by | or -)
- **Be specific and compelling** - This is your search result headline

### Title tag patterns

**Pattern 1: How-to format**
```
How to [Achieve Outcome] in [Timeframe] | [Brand]
```
Example: `How to Validate Your MVP in 3 Weeks | Sociilabs`

**Pattern 2: Problem/solution format**
```
[Problem]: [Solution] | [Brand]
```
Example: `The $40K MVP Mistake: How to Validate Before You Build | Sociilabs`

**Pattern 3: List format**
```
[Number] [Things] to [Outcome] | [Brand]
```
Example: `7 Questions to Ask Before Writing Any Code | Sociilabs`

**Pattern 4: Definitive guide format**
```
[Topic]: The Complete Guide for [Audience] | [Brand]
```
Example: `MVP Development: The Complete Guide for Founders | Sociilabs`

### Title tag best practices
- **Front-load keywords:** Put the most important words first
- **Use numbers:** "7 Ways" performs better than "Ways"
- **Include power words:** Free, Guide, Complete, Ultimate, Proven, Fast
- **Match search intent:** If people search "how to," use "How to" in the title
- **Avoid clickbait:** Be compelling but accurate
- **Test variations:** Different titles for different audiences

---

## Meta Descriptions (SEO)

### Format defaults
- **Length:** 150-160 characters (Google truncates at ~160)
- **Include primary keyword** naturally
- **Include a call to action** when appropriate
- **Be specific** - Mention numbers, outcomes, or unique value

### Meta description patterns

**Pattern 1: Problem + solution**
```
[Target audience] often [problem]. Here's [solution] that [specific outcome]. [Proof point or metric].
```
Example: `Founders often waste 6 months building features nobody wants. Here's a 3-week validation framework that saves $40K+ in unnecessary development. Used by 100+ startups.`

**Pattern 2: Value proposition**
```
Learn [specific outcome] with [method/framework]. Includes [what's included]. [Proof or credibility].
```
Example: `Learn how to validate your MVP before writing code. Includes customer interview scripts, landing page templates, and pilot program frameworks. Proven with 100+ startups.`

**Pattern 3: Question format**
```
[Question your audience asks]? [Brief answer]. [What they'll learn or get].
```
Example: `Should you build a mobile app or web app first? Most startups waste $100K on the wrong choice. Learn the framework we use to decide.`

### Meta description best practices
- **Don't duplicate the title** - Add new information
- **Include a benefit** - What will the reader gain?
- **Use active voice** - "Learn how to" > "How to learn"
- **Add credibility** - Numbers, case studies, social proof
- **Match search intent** - Answer the question they're asking
- **Avoid generic phrases** - "Click here to learn more" adds no value

---

## Open Graph Tags (Facebook, LinkedIn)

Open Graph tags control how your content appears when shared on Facebook, LinkedIn, and other platforms.

### Required OG tags

```html
<meta property="og:title" content="The $40K MVP Mistake: How to Validate Before You Build" />
<meta property="og:description" content="Most founders waste 6 months building features nobody wants. Here's the 3-week validation framework we use with every client. Saves $40K+ in unnecessary development." />
<meta property="og:image" content="https://yourdomain.com/images/mvp-validation-og.jpg" />
<meta property="og:url" content="https://yourdomain.com/blog/mvp-validation-framework" />
<meta property="og:type" content="article" />
<meta property="og:site_name" content="Sociilabs" />
```

### OG title guidelines
- **Length:** 60-90 characters (longer than SEO title is OK)
- **Can be different from SEO title** - Optimize for social sharing
- **More conversational** than SEO titles
- **Include numbers and specifics** - "3-Week Framework" > "Framework"

### OG description guidelines
- **Length:** 200-300 characters (longer than meta description is OK)
- **More storytelling** than SEO descriptions
- **Include social proof** - "Used by 100+ startups"
- **Create curiosity** - Make people want to click

### OG image guidelines
- **Size:** 1200 x 630 pixels (Facebook's recommended size)
- **Format:** JPG or PNG
- **File size:** Under 8MB
- **Include text overlay** - Key headline or stat from the article
- **Use high contrast** - Readable on mobile
- **Brand consistently** - Include logo or brand colors
- **Avoid small text** - Must be readable at thumbnail size

---

## Twitter Card Tags

Twitter Cards control how your content appears on Twitter/X.

### Required Twitter Card tags

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="="twitter:title" content="The $40K MVP Mistake: How to Validate Before You Build" />
<meta name="twitter:description" content="Most founders waste 6 months building features nobody wants. Here's the 3-week validation framework that saves $40K+ in development." />
<meta name="twitter:image" content="https://yourdomain.com/images/mvp-validation-twitter.jpg" />
<meta name="twitter:site" content="@yourtwitterhandle" />
<meta name="twitter:creator" content="@authorhandle" />
```

### Twitter Card types
- **summary_large_image** - Large image card (recommended for blog posts)
- **summary** - Small image card (good for short updates)
- **player** - For video content
- **app** - For mobile app promotions

### Twitter title guidelines
- **Length:** 70 characters max
- **More punchy** than OG titles
- **Direct and provocative** - Twitter rewards strong takes
- **Front-load the hook** - Most interesting part first

### Twitter description guidelines
- **Length:** 200 characters max
- **More conversational** than SEO descriptions
- **Create urgency or curiosity**
- **Include a specific benefit or outcome**

### Twitter image guidelines
- **Size:** 1200 x 675 pixels (16:9 aspect ratio)
- **Format:** JPG or PNG
- **File size:** Under 5MB
- **Mobile-optimized** - Twitter is primarily mobile
- **High contrast text** - Must be readable at small sizes

---

## Schema Markup (Structured Data)

Schema markup helps search engines understand your content and can generate rich results (star ratings, FAQs, how-tos, etc.).

### Article schema (for blog posts)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The $40K MVP Mistake: How to Validate Before You Build",
  "description": "Most founders waste 6 months building features nobody wants. Here's the 3-week validation framework we use with every client.",
  "image": "https://yourdomain.com/images/mvp-validation.jpg",
  "author": {
    "@type": "Person",
    "name": "Your Name",
    "url": "https://yourdomain.com/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Sociilabs",
    "logo": {
      "@type": "ImageObject",
      "url": "https://yourdomain.com/logo.png"
    }
  },
  "datePublished": "2024-03-15",
  "dateModified": "2024-03-15"
}
```

### FAQ schema (for articles with Q&A sections)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does MVP validation take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our 3-week validation framework includes 1 week of customer interviews, 1 week of landing page testing, and 1 week of paid pilots. This approach validates ideas 8x faster than traditional development."
      }
    },
    {
      "@type": "Question",
      "name": "How much does MVP validation cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Validation costs $5K-$15K depending on scope, compared to $40K-$100K for building an unvalidated product. The ROI is significant - you either validate demand or avoid wasting months on the wrong solution."
      }
    }
  ]
}
```

### HowTo schema (for tutorial articles)

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Validate Your MVP in 3 Weeks",
  "description": "A step-by-step framework for validating product ideas before writing code.",
  "totalTime": "PT3W",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Week 1: Customer Interviews",
      "text": "Conduct 20 customer interviews to identify the expensive problem. Focus on their current process, what breaks, and what it costs them.",
      "url": "https://yourdomain.com/blog/mvp-validation-framework#week-1"
    },
    {
      "@type": "HowToStep",
      "name": "Week 2: Landing Page Validation",
      "text": "Build a landing page describing the solution. Drive 100-200 visitors and target 20%+ email capture rate.",
      "url": "https://yourdomain.com/blog/mvp-validation-framework#week-2"
    },
    {
      "@type": "HowToStep",
      "name": "Week 3: Paid Pilot",
      "text": "Offer to build a basic version for 3-5 customers. Charge something (even $500). If nobody will pay, you don't have a business yet.",
      "url": "https://yourdomain.com/blog/mvp-validation-framework#week-3"
    }
  ]
}
```

---

## Platform-Specific Recommendations

### Google Search
- **Focus on:** Title tags, meta descriptions, schema markup
- **Optimize for:** Search intent, E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
- **Include:** Specific numbers, dates, author credentials
- **Avoid:** Keyword stuffing, duplicate content, thin content

### Facebook
- **Focus on:** OG image, OG description
- **Optimize for:** Visual appeal, social proof, curiosity
- **Include:** Compelling image with text overlay, specific outcomes
- **Avoid:** External links in post body (put in comments)

### LinkedIn
- **Focus on:** OG title, OG description, professional credibility
- **Optimize for:** Professional value, thought leadership, specific insights
- **Include:** Numbers, case studies, frameworks
- **Avoid:** Overly casual language, clickbait

### Twitter/X
- **Focus on:** Twitter Card image, punchy title
- **Optimize for:** Immediate hook, provocative takes, visual impact
- **Include:** Specific numbers, contrarian angles
- **Avoid:** Long descriptions, corporate speak

### Instagram
- **Focus on:** Visual content (Instagram doesn't use meta tags for posts)
- **Optimize for:** Stories with link stickers, bio link
- **Include:** "Link in bio" CTAs
- **Note:** Meta tags only matter for Instagram profile links

---

## Complete Meta Data Template

Here's a complete template for all meta tags:

```html
<!-- Primary Meta Tags -->
<title>The $40K MVP Mistake: How to Validate Before You Build | Sociilabs</title>
<meta name="title" content="The $40K MVP Mistake: How to Validate Before You Build | Sociilabs" />
<meta name="description" content="Most founders waste 6 months building features nobody wants. Here's a 3-week validation framework that saves $40K+ in unnecessary development. Used by 100+ startups." />
<meta name="keywords" content="MVP validation, product validation, startup development, MVP framework, customer validation" />
<meta name="author" content="Your Name" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="article" />
<meta property="og:url" content="https://yourdomain.com/blog/mvp-validation-framework" />
<meta property="og:title" content="The $40K MVP Mistake: How to Validate Before You Build" />
<meta property="og:description" content="Most founders waste 6 months building features nobody wants. Here's the 3-week validation framework we use with every client. Saves $40K+ in unnecessary development." />
<meta property="og:image" content="https://yourdomain.com/images/mvp-validation-og.jpg" />
<meta property="og:site_name" content="Sociilabs" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="https://yourdomain.com/blog/mvp-validation-framework" />
<meta name="twitter:title" content="The $40K MVP Mistake: How to Validate Before You Build" />
<meta name="twitter:description" content="Most founders waste 6 months building features nobody wants. Here's the 3-week validation framework that saves $40K+ in development." />
<meta name="twitter:image" content="https://yourdomain.com/images/mvp-validation-twitter.jpg" />
<meta name="twitter:site" content="@yourtwitterhandle" />
<meta name="twitter:creator" content="@authorhandle" />

<!-- Canonical URL -->
<link rel="canonical" href="https://yourdomain.com/blog/mvp-validation-framework" />
```

---

## Testing and Validation

### Tools to test your meta data

**SEO Title & Description:**
- Google Search Console - See how your titles/descriptions appear in search
- Moz Title Tag Preview Tool - Check length and appearance
- Yoast SEO (WordPress) - Real-time preview and optimization

**Open Graph (Facebook/LinkedIn):**
- Facebook Sharing Debugger - https://developers.facebook.com/tools/debug/
- LinkedIn Post Inspector - https://www.linkedin.com/post-inspector/
- Shows exactly how your content will appear when shared

**Twitter Cards:**
- Twitter Card Validator - https://cards-dev.twitter.com/validator
- Shows preview of how your content will appear on Twitter

**Schema Markup:**
- Google Rich Results Test - https://search.google.com/test/rich-results
- Schema Markup Validator - https://validator.schema.org/
- Validates your structured data

### Common issues to check

- **Image not showing:** Check image URL, file size, and format
- **Description truncated:** Keep within character limits
- **Title too long:** Google/Facebook will cut it off
- **Schema errors:** Validate with Google's Rich Results Test
- **Cache issues:** Use Facebook Debugger to clear cache after updates

---

## Best Practices Summary

1. **Write for humans first, search engines second** - Compelling copy converts better than keyword-stuffed copy
2. **Be specific** - "3-Week Framework" > "Fast Framework"
3. **Include numbers** - Metrics, timeframes, outcomes
4. **Match platform voice** - Professional for LinkedIn, punchy for Twitter
5. **Test your images** - Use the debugging tools before publishing
6. **Update regularly** - Refresh meta data when you update content
7. **A/B test titles** - Different titles for different audiences
8. **Monitor performance** - Track CTR in Google Search Console

---

## Shortcode handling

If the user has defined shortcodes in their profile:
- `{{brand_name}}` → Replace with company name
- `{{author_name}}` → Replace with author name
- `{{twitter_handle}}` → Replace with @handle
- Custom shortcodes defined by the user

---

## Output format

When generating SEO metadata, provide:

1. **SEO Title** (50-60 chars)
2. **Meta Description** (150-160 chars)
3. **OG Title** (60-90 chars, can differ from SEO title)
4. **OG Description** (200-300 chars)
5. **Twitter Title** (70 chars max)
6. **Twitter Description** (200 chars max)
7. **Image recommendations** (dimensions, text overlay suggestions)
8. **Schema markup** (JSON-LD format, if applicable)
9. **Keywords** (5-7 target keywords)
10. **Complete HTML meta tags** (copy-paste ready)

Provide variations for A/B testing when appropriate.
