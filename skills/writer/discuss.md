---
name: writer:discuss
description: Start a new content project - gather requirements, clarify decisions, identify content type and framework
---

# /writer:discuss - Start Content Project

@~/.claude/skills/shared-context.md

## Objective

Gather requirements and clarify decisions for a new content project. Identify content type, target platform, and appropriate framework.

## Process

1. **Check for Profile**
   - Verify writer profile exists in memory
   - If not found: Direct user to `/writer:profile-create`
   - Load profile data for context

2. **Gather Requirements**
   Ask user about:
   - Content type (blog, social media, email, web, sales)
   - Platform (if applicable)
   - Topic/subject
   - Target audience
   - Key message/goal
   - Tone preferences (if different from profile)
   - Length requirements
   - Deadline/urgency

3. **Identify Content Type**
   Based on requirements, determine:
   - Blog article
   - LinkedIn post
   - Twitter thread
   - Facebook post
   - Instagram caption
   - Newsletter
   - Email campaign
   - Email sequence
   - Landing page
   - Web page
   - Product page
   - Sales funnel
   - Case study
   - Testimonial
   - Product description
   - SEO metadata

4. **Select Framework**
   Recommend appropriate framework:
   - **AIDA** - General marketing content
   - **PAS** - Problem-focused content
   - **BAB** - Transformation stories
   - **FAB** - Product features
   - **LEMA** - Lead generation
   - **4-Point** - Sales content
   - **CONVERT** - Landing pages

5. **Store State**
   Save to memory:
   ```javascript
   {
     phase: "discuss",
     contentType: string,
     platform: string,
     topic: string,
     targetAudience: string,
     keyMessage: string,
     tone: string,
     length: number,
     framework: string,
     requirements: object
   }
   ```

6. **Next Steps**
   Inform user:
   - Requirements captured
   - Framework selected
   - Ready for planning phase
   - Run `/writer:plan` or `/writer:next`

## Output

Present summary:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Requirements Captured
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Content Type: {type}
  Platform: {platform}
  Topic: {topic}
  Framework: {framework}
  
  Next: /writer:plan or /writer:next

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```
