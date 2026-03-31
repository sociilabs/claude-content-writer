# Content Research Workflow

Guidelines for conducting research before creating marketing content or articles.

---

## When to Use Research

Use the research workflow when:
- Starting a new content piece on an unfamiliar topic
- The user asks to research a topic before writing
- You need to validate claims or find supporting data
- The user provides a URL to research and draw inspiration from
- Creating content for a new industry or audience
- Building a content strategy around a specific theme

---

## Research Process

### Step 1: Define the research goal

Before starting, clarify:
- **What are we researching?** (Topic, industry, competitor, trend)
- **Why are we researching?** (To write an article, validate an idea, understand an audience)
- **What format will the output be?** (Blog post, LinkedIn post, content package, etc.)
- **Who is the target audience?** (From the user's writer profile)

### Step 2: Gather sources

Use multiple source types:

**Primary sources (best):**
- User's existing content and case studies
- Customer interview transcripts or notes
- Internal data and metrics
- Direct experience and observations

**Secondary sources (good):**
- Industry reports and whitepapers
- Competitor content and positioning
- Academic research and studies
- Expert interviews and podcasts
- Trade publications

**Tertiary sources (use sparingly):**
- General business publications
- Aggregated listicles
- Social media discussions
- Wikipedia (for background only)

### Step 3: Extract key insights

For each source, identify:
- **Surprising statistics** - Numbers that challenge assumptions
- **Contrarian takes** - Opinions that go against conventional wisdom
- **Specific examples** - Real companies, real outcomes, real numbers
- **Common mistakes** - What people get wrong
- **Frameworks or processes** - Repeatable approaches
- **Quotes** - Memorable phrases or expert opinions (attribute properly)

### Step 4: Identify content angles

Based on research, determine:
- **What's the contrarian angle?** - What commonly-held belief can we challenge?
- **What's the expensive problem?** - What pain point costs the audience money/time?
- **What's the proof?** - What specific examples or data support the argument?
- **What's the framework?** - What's the repeatable process or approach?
- **What's the hook?** - What surprising stat or insight opens the piece?

### Step 5: Organize findings

Create a research brief that includes:
- **Topic and angle** - One sentence summary
- **Target audience** - Who this is for
- **Key insights** (3-5 bullets) - Most important findings
- **Supporting data** - Specific numbers and sources
- **Examples and case studies** - Real-world proof
- **Contrarian angle** - What we're arguing against
- **Framework or solution** - What we're recommending
- **Sources** - Links and citations

---

## Research from URLs

When the user provides a URL to research:

### Step 1: Read and analyze the source

Use `read_url_content` to fetch the content, then analyze:
- **What's the main argument?** - Core thesis
- **What data supports it?** - Numbers, studies, examples
- **What's the author's perspective?** - Industry, role, bias
- **What's missing?** - Gaps in the argument
- **What can we build on?** - Insights to expand or challenge

### Step 2: Find the unique angle

Don't just summarize the source. Find:
- **A different perspective** - How would our audience see this differently?
- **A contrarian take** - Where do we disagree or add nuance?
- **A specific application** - How does this apply to our audience's situation?
- **Additional proof** - What examples from our experience support or challenge this?

### Step 3: Validate with additional sources

Cross-reference with:
- 2-3 other articles on the same topic
- Industry data or reports
- User's own experience and case studies
- Opposing viewpoints

### Step 4: Extract content-ready insights

Transform research into content by:
- **Making it specific** - "Most startups" → "3 out of 5 startups we've worked with"
- **Adding proof** - General claims → Specific examples with numbers
- **Connecting to audience** - Industry insight → How it affects your target audience
- **Creating tension** - Neutral observation → Provocative question or challenge

---

## Research for Different Content Types

### Blog article research
- **Depth:** High - Need multiple sources, data points, examples
- **Focus:** Framework or process, supported by case studies
- **Sources:** 5-10 sources minimum
- **Time:** 1-2 hours of research before writing

### LinkedIn post research
- **Depth:** Medium - One strong insight with proof
- **Focus:** Single contrarian take or surprising stat
- **Sources:** 2-3 sources to validate the insight
- **Time:** 15-30 minutes of research

### Twitter thread research
- **Depth:** Medium - Framework with specific steps
- **Focus:** Actionable process with clear outcomes
- **Sources:** 3-5 sources for validation
- **Time:** 30-45 minutes of research

### Content package research
- **Depth:** High - Comprehensive research for multiple formats
- **Focus:** Core insight that works across blog, LinkedIn, newsletter
- **Sources:** 5-10 sources, including user's own data
- **Time:** 1-2 hours of research before writing

---

## Research Quality Checklist

Before moving from research to writing, verify:

- [ ] **Specific numbers** - Do we have concrete metrics, not vague claims?
- [ ] **Real examples** - Do we have actual companies/projects, not hypotheticals?
- [ ] **Contrarian angle** - Are we challenging a commonly-held belief?
- [ ] **Audience relevance** - Does this matter to the target audience?
- [ ] **Proof points** - Can we back up every claim with data or examples?
- [ ] **Unique perspective** - Are we adding something new, not just summarizing?
- [ ] **Source quality** - Are sources credible and recent?
- [ ] **Attribution** - Do we know where each stat/quote came from?

---

## Research Documentation

### Research brief template

```
# Research Brief: [Topic]

**Target audience:** [From user profile]
**Content format:** [Blog / LinkedIn / Twitter / Package]
**Angle:** [One sentence - what's the contrarian take or unique perspective?]

## Key Insights
1. [Insight with supporting data]
2. [Insight with supporting data]
3. [Insight with supporting data]

## Supporting Data
- [Stat or metric with source]
- [Stat or metric with source]
- [Stat or metric with source]

## Examples and Case Studies
- [Real example with outcome]
- [Real example with outcome]

## Contrarian Angle
[What commonly-held belief are we challenging? Why is it wrong?]

## Framework/Solution
[What's the repeatable process or approach we're recommending?]

## Hook Options
1. [Surprising stat or insight]
2. [Provocative question]
3. [Specific scenario]

## Sources
- [URL or citation]
- [URL or citation]
- [URL or citation]
```

### Save research briefs

When conducting research, save the brief to `/mnt/user-data/research/` for future reference. This helps:
- Avoid re-researching the same topics
- Build a knowledge base for the user's content
- Track sources and citations
- Reuse insights across multiple content pieces

---

## Research Ethics and Attribution

### Always attribute sources

- **Direct quotes:** Use quotation marks and cite the source
- **Statistics:** Include the source and year
- **Frameworks:** Credit the creator if it's not original
- **Case studies:** Get permission if using client work

### Avoid plagiarism

- **Don't copy-paste** - Synthesize and rewrite in your own voice
- **Don't paraphrase too closely** - Transform the insight, don't just reword it
- **Add original analysis** - Don't just summarize; add perspective
- **Cite liberally** - When in doubt, cite the source

### Verify claims

- **Check dates** - Is the data recent?
- **Check sources** - Is the source credible?
- **Cross-reference** - Do multiple sources agree?
- **Question outliers** - If a stat seems too good to be true, verify it

---

## Research Tools and Techniques

### Web search strategies

**For statistics and data:**
- Use site-specific searches: `site:statista.com [topic]`
- Search for reports: `[topic] report 2024 filetype:pdf`
- Find studies: `[topic] study site:.edu`

**For examples and case studies:**
- Search for specific outcomes: `[topic] "increased revenue by"`
- Find customer stories: `[company] case study`
- Look for testimonials: `[product] review site:g2.com`

**For industry insights:**
- Follow thought leaders: `[expert name] [topic]`
- Find recent discussions: `[topic] site:reddit.com OR site:news.ycombinator.com`
- Check trade publications: `site:[industry-publication].com [topic]`

### Evaluating source credibility

**High credibility:**
- Peer-reviewed research
- Industry reports from recognized firms
- Government data and statistics
- Direct experience and first-party data
- Expert interviews with attribution

**Medium credibility:**
- Trade publications
- Established business media
- Company case studies (with verification)
- Expert blog posts with citations

**Low credibility:**
- Uncited claims
- Anonymous sources
- Outdated data (>3 years old)
- Aggregated listicles without sources
- Social media posts without verification

---

## From Research to Content

### Transforming research into writing

1. **Start with the hook** - Use the most surprising insight from research
2. **Build the argument** - Structure insights into a logical flow
3. **Add proof** - Insert specific examples and data throughout
4. **Apply to audience** - Connect every insight to the target audience's situation
5. **Create the framework** - Turn insights into actionable steps
6. **End with stakes** - Reframe what happens if they ignore this

### Maintaining voice during research

Research should inform the content, not dictate it. Remember:
- **Use the user's voice** - Don't let research make the writing sound generic
- **Add personality** - Research provides facts; voice provides perspective
- **Be opinionated** - Don't just report findings; react to them
- **Stay specific** - Use research to add specificity, not vagueness
- **Run the anti-AI checklist** - Research-heavy content often sounds like AI

---

## Research Workflow Summary

1. **Define the goal** - What are we researching and why?
2. **Gather sources** - Primary > Secondary > Tertiary
3. **Extract insights** - Surprising stats, contrarian takes, specific examples
4. **Identify angles** - What's the unique perspective?
5. **Organize findings** - Create a research brief
6. **Validate quality** - Check the research quality checklist
7. **Transform to content** - Turn research into writing with voice
8. **Attribute sources** - Cite properly and ethically

Good research makes content credible. Good writing makes it compelling. Both are required.
