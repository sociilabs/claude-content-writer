# Content Writer v3.0 - Professional Content System

## Overview

Transform content-writer from a standalone skill into a professional content generation system with:
- **Skill dependencies** (claude-seo, humanizer)
- **GSD-style phased workflow** (/cw:discuss → plan → execute → verify → ship)
- **Enhanced profile creation** with URL scanning and automatic tone detection
- **Profile-first enforcement** (no content without profile)
- **Dedicated output files** (all content saved to `.content-writer/`)

---

## Key Requirements

### 1. Skill Dependencies
- Install `claude-seo` automatically (comprehensive SEO principles)
- Install `humanizer` automatically (removes AI writing patterns)
- Both skills must be available before content-writer can function
- Installation script handles dependency installation

### 2. GSD-Style Command Structure

Replace flat commands with phased workflow:

**Current:** `/write-blog`, `/write-linkedin`, etc.
**New:** `/cw:discuss` → `/cw:plan` → `/cw:execute` → `/cw:verify` → `/cw:ship`

**Phases:**
- **Discuss** - Gather requirements, clarify gray areas, make decisions
- **Plan** - Research approach, create execution plan
- **Execute** - Generate content following plan
- **Verify** - Review output, run anti-AI audit, check SEO
- **Ship** - Save to dedicated markdown file, present to user

**Benefits:**
- Structured workflow prevents rushed content
- Each phase has clear purpose
- Better quality through deliberate process
- Matches GSD's proven methodology

### 3. Enhanced Profile Creation

**Current:** Manual Q&A interview
**New:** Automated + Manual hybrid

**URL Scanning:**
- Accept multiple URLs (blog posts, articles, social posts)
- Fetch and analyze each URL
- Extract tone, voice patterns, vocabulary, sentence structure
- Identify writing quirks and personality markers
- Build profile automatically from analysis

**Comprehensive Questionnaire:**
- **Brand Identity** (name, domain, tagline, mission)
- **Industry & Market** (sector, competitors, positioning)
- **Target Audience** (demographics, pain points, goals)
- **Voice & Tone** (adjectives, influences, things to avoid)
- **Content Strategy** (types, pillars, goals, frequency)
- **Products/Services** (offerings, pricing, target customers)
- **Case Studies** (projects, outcomes, metrics)
- **CTAs** (booking links, email, resources)
- **Publishing Workflow** (platforms, timing, formats)
- **SEO Strategy** (keywords, topics, optimization goals)

**Interactive Selection:**
- Multiple choice where applicable
- Numbered options for easy selection
- Skip/default options for optional fields
- Progress indicators
- Save incrementally (no data loss)

### 4. Profile-First Enforcement

**Hard requirement:** Profile must exist before any content generation

**Flow:**
```
User: "write a blog post about X"
↓
System checks: Profile exists?
↓
NO → "No profile found. Let's create one first."
     → Run /cw:profile-create
     → After completion, return to original request
↓
YES → Proceed with content generation
```

**Benefits:**
- Ensures quality (no generic content)
- Forces proper setup
- Consistent voice across all content
- Professional workflow

### 5. Dedicated Output Files

**Structure:**
```
.content-writer/
├── profile/
│   ├── PROFILE.md (main profile)
│   ├── BRAND.md (brand details)
│   ├── PRODUCTS.md (products/services)
│   ├── CTAS.md (call-to-action templates)
│   └── CASE-STUDIES.md (project examples)
├── content/
│   ├── blog/
│   │   ├── 001-article-title.md
│   │   ├── 002-another-article.md
│   │   └── ...
│   ├── linkedin/
│   │   ├── 001-post-title.md
│   │   └── ...
│   ├── facebook/
│   ├── instagram/
│   ├── twitter/
│   └── seo/
├── packages/
│   ├── 001-package-name/
│   │   ├── blog.md
│   │   ├── linkedin.md
│   │   ├── newsletter.md
│   │   └── PACKAGE.md (metadata)
│   └── ...
└── research/
    ├── 001-topic-name.md
    └── ...
```

**Benefits:**
- Organized output
- Easy to find content
- Version control friendly
- Professional structure
- Supports content packages

---

## Implementation Plan

### Phase 1: Installation & Dependencies
- Create `install.sh` script
- Check for claude-seo, install if missing
- Check for humanizer, install if missing
- Update `postinstall.js` to run dependency check
- Update `package.json` with dependency info

### Phase 2: Directory Structure
- Create `.content-writer/` directory structure
- Add `.gitignore` for output files
- Create directory documentation
- Add helper functions for file management

### Phase 3: Enhanced Profile Creation
- Design URL scanning workflow
- Implement tone detection from URLs
- Create comprehensive questionnaire
- Build interactive selection system
- Add progress tracking
- Implement incremental saving

### Phase 4: Profile-First Enforcement
- Add profile check to all content commands
- Create profile prompt workflow
- Add profile status indicators
- Implement graceful handling

### Phase 5: GSD-Style Commands
- Design phased command structure
- Implement `/cw:discuss` (requirements gathering)
- Implement `/cw:plan` (research & planning)
- Implement `/cw:execute` (content generation)
- Implement `/cw:verify` (quality check)
- Implement `/cw:ship` (save & present)
- Add `/cw:next` (auto-advance to next phase)

### Phase 6: Output File Generation
- Update all commands to save to `.content-writer/`
- Implement file naming conventions
- Add metadata to output files
- Create package bundling
- Add file presentation

### Phase 7: Integration
- Integrate claude-seo for SEO optimization
- Integrate humanizer for anti-AI audit
- Update workflows to use both skills
- Add skill availability checks

### Phase 8: Documentation
- Update SKILL.md with new workflows
- Update README.md with new features
- Create migration guide for v2 users
- Add examples and tutorials

---

## Technical Decisions

### Command Naming
**Prefix:** `/cw:` (content-writer)
**Rationale:** Matches GSD's `/gsd:` pattern, clear namespace

### File Naming
**Format:** `{number}-{slug}.md`
**Example:** `001-why-saas-onboarding-fails.md`
**Rationale:** Sortable, readable, URL-friendly

### Profile Storage
**Location:** `.content-writer/profile/` (files) + Memory (for quick access)
**Rationale:** Files for version control, memory for runtime performance

### Dependency Installation
**Method:** Git clone + install script
**Rationale:** Matches claude-seo and humanizer installation patterns

---

## Migration Path

### For Existing Users (v2.x)

1. **Automatic migration on first run:**
   - Detect old memory format
   - Convert to new file structure
   - Preserve all data
   - Add migration notice

2. **Command compatibility:**
   - Old commands still work (deprecated warnings)
   - Redirect to new phased workflow
   - Gradual transition period

3. **Data preservation:**
   - Export memory to files
   - Keep memory entries for compatibility
   - Dual-write during transition

---

## Success Criteria

-  claude-seo and humanizer install automatically
-  Profile creation scans URLs and detects tone
-  Comprehensive questionnaire with interactive selection
-  Profile-first enforcement blocks content without profile
-  All commands follow GSD-style phased workflow
-  All output saved to dedicated markdown files in `.content-writer/`
-  SEO optimization integrated via claude-seo
-  Anti-AI audit integrated via humanizer
-  Professional directory structure
-  Complete documentation

---

## Questions for User

1. **Command prefix:** `/cw:` or `/content:` or something else?
2. **Profile location:** `.content-writer/profile/` or root level `CONTENT-PROFILE.md`?
3. **Auto-install dependencies:** Should we ask permission first or install automatically?
4. **Migration:** Should old commands continue working or force migration?
5. **Output location:** `.content-writer/` or `content-output/` or user-configurable?

---

## Next Steps

Once approved:
1. Create installation script with dependency management
2. Build enhanced profile creation with URL scanning
3. Implement GSD-style phased commands
4. Add profile-first enforcement
5. Update all workflows to generate dedicated files
6. Integrate claude-seo and humanizer
7. Update documentation

**Estimated effort:** 2-3 days of focused development
**Risk level:** Medium (dependency management, data migration)
**Impact:** High (transforms skill into professional system)
