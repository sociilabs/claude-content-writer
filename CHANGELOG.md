# Changelog

All notable changes to the Content Writer skill will be documented in this file.

---

## [Unreleased]

---

## [2.1.0] - 2026-04-01

### Added

**Command-Per-Skill Architecture**
- Each command is now a separate skill file (like GSD)
- Better command discovery in Claude Code
- Proper autocomplete support for all commands
- Individual skill folders: writer-discuss, writer-plan, writer-execute, etc.

**Shared Context System**
- Centralized shared-context.md for common content
- Separate reference files for platform conventions
- Organized skill structure for maintainability

### Changed

- Migrated from monolithic SKILL.md to command-per-file structure
- Updated installation script to copy individual skill folders
- Enhanced postinstall.js with better error handling
- Improved command organization and discovery

### Removed

- Old monolithic content-writer skill directory
- Single SKILL.md file (replaced with individual command files)

---

## [2.0.1] - 2026-04-01

### Added

**Auto-Update Notification System**
- Automatic version checking on skill load
- Update notifications shown once per session
- `/writer:update` command for manual updates
- Changelog preview before updating
- Session-based notification tracking

### Changed

- Enhanced SKILL.md with update check workflow
- Added detailed update command documentation

---

## [Unreleased - Future]

### Planned

**New Content Types**
- Email campaigns - Promotional, time-sensitive offers (200-500 words)
- Email sequences - Automated nurture flows (150-400 words per email, 3-10 emails)
- Landing pages - Conversion-focused pages (1,000-2,500 words)
- Web pages - Informational pages (500-1,500 words)
- Product pages - E-commerce optimized (800-2,000 words)
- Sales funnels - Multi-stage conversion paths
- Case studies - Story-driven with metrics (1,000-2,000 words)
- Testimonials - Social proof quotes (50-300 words)
- Product descriptions - Benefit-focused copy (150-500 words)

**Reference Documentation**
- `references/web-content-conventions.md` - Landing pages, web pages, product pages
- `references/email-content-conventions.md` - Newsletters, campaigns, sequences
- `references/sales-content-conventions.md` - Sales funnels, case studies, testimonials

### Changed

- Removed all emojis from documentation
- Enhanced profile questionnaire to include all 16 content types
- Updated SKILL.md and README.md descriptions

---

## [2.0.0] - 2026-03-31

###  Major Release: Professional Content Generation System

This release transforms Content Writer from a standalone skill into a comprehensive, professional-grade content generation system with integrated SEO optimization, anti-AI auditing, and structured workflows.

---

###  New Features

#### **Skill Dependencies (Auto-Installed)**
- **claude-seo** - Comprehensive SEO analysis and optimization
  - Technical SEO, E-E-A-T analysis, schema markup
  - Core Web Vitals, AI search optimization (GEO/AEO)
  - Local SEO, Google APIs integration
- **humanizer** - Advanced anti-AI writing detection
  - Removes 25+ AI writing patterns
  - Based on Wikipedia's "Signs of AI writing" guide
  - Ensures human-like voice and tone

#### **GSD-Style Phased Workflow**
New structured command system inspired by Get Shit Done methodology:

- `/writer:discuss` - Gather requirements, clarify decisions, identify gray areas
- `/writer:plan` - Research approach, create detailed execution plan
- `/writer:execute` - Generate content following the plan
- `/writer:verify` - Review output, run anti-AI audit, check SEO compliance
- `/writer:ship` - Save to dedicated markdown file, present to user
- `/writer:next` - Auto-advance to next phase in workflow

**Benefits:**
- Structured workflow prevents rushed content
- Each phase has clear purpose and deliverables
- Higher quality through deliberate process
- Professional development methodology

#### **Enhanced Profile Creation**

**URL Scanning & Automatic Tone Detection:**
- Accept multiple URLs (blog posts, articles, social content)
- Automatically analyze and extract:
  - Tone and voice patterns
  - Vocabulary and sentence structure
  - Writing quirks and personality markers
  - Content style and formatting preferences
- Build profile automatically from URL analysis

**Comprehensive Brand Questionnaire:**
- **Brand Identity** - Name, domain, tagline, mission, values
- **Industry & Market** - Sector, competitors, positioning, differentiation
- **Target Audience** - Demographics, pain points, goals, objections
- **Voice & Tone** - Adjectives, influences, things to avoid, examples
- **Content Strategy** - Types, pillars, goals, frequency, distribution
- **Products/Services** - Offerings, pricing, target customers, use cases
- **Case Studies** - Projects, outcomes, metrics, testimonials, NDA status
- **CTAs** - Booking links, email, resources, platform-specific CTAs
- **Publishing Workflow** - Platforms, timing, formats, approval process
- **SEO Strategy** - Keywords, topics, optimization goals, target rankings

**Interactive Selection System:**
- Multiple choice options where applicable
- Numbered selections for easy input
- Skip/default options for optional fields
- Progress indicators throughout
- Incremental saving (no data loss)

#### **Profile-First Enforcement**
- **Hard requirement:** Profile must exist before content generation
- Automatic prompt to create profile if missing
- Graceful handling with clear instructions
- Professional workflow enforcement

**Flow:**
```
User: "write a blog post about X"
↓
System: Profile exists? NO
↓
"No profile found. Let's create your writer profile first."
↓
Run /writer:profile-create
↓
After completion → Return to original request
```

#### **Smart Output Management**
- **In Claude Code:** Saves to user's current working directory
- **Outside Claude Code:** Uses standard output location (`/mnt/user-data/outputs/`)
- **Organized structure:**
  ```
  content-writer-output/
  ├── profile/
  ├── blog/
  ├── linkedin/
  ├── facebook/
  ├── instagram/
  ├── twitter/
  ├── seo/
  ├── packages/
  └── research/
  ```

#### **Dual Storage System**
- **Files:** Version-controlled, shareable, portable
- **Memory:** Fast runtime access, cross-session persistence
- **Sync:** Automatic synchronization between file and memory storage
- **Benefits:** Best of both worlds - performance + portability

---

###  Changed

#### **Command Structure**
- **Old:** Flat commands (`/write-blog`, `/write-linkedin`, etc.)
- **New:** Phased workflow (`/writer:discuss` → `plan` → `execute` → `verify` → `ship`)
- **Reason:** Structured approach ensures higher quality, better SEO, more human-like content

#### **Profile Management**
- **Old:** Simple Q&A interview, memory-only storage
- **New:** URL scanning + comprehensive questionnaire, dual storage (files + memory)
- **Reason:** Richer profiles, automatic tone detection, better portability

#### **Content Generation**
- **Old:** Direct generation with basic anti-AI check
- **New:** Multi-phase process with SEO optimization and advanced anti-AI audit
- **Reason:** Professional quality, SEO-optimized, truly human-like content

#### **Output Files**
- **Old:** Generic output location
- **New:** Smart location detection (current dir in Claude Code, standard output otherwise)
- **Reason:** Better user experience, organized structure

---

### 🗑️ Removed

#### **Deprecated Commands**
All v1.x flat commands have been removed in favor of the new phased workflow:
- ~~`/write-blog`~~ → Use `/writer:discuss` → `/writer:execute`
- ~~`/write-linkedin`~~ → Use `/writer:discuss` → `/writer:execute`
- ~~`/write-facebook`~~ → Use `/writer:discuss` → `/writer:execute`
- ~~`/write-instagram`~~ → Use `/writer:discuss` → `/writer:execute`
- ~~`/write-tweet`~~ → Use `/writer:discuss` → `/writer:execute`
- ~~`/write-thread`~~ → Use `/writer:discuss` → `/writer:execute`
- ~~`/write-seo-meta`~~ → Use `/writer:discuss` → `/writer:execute`
- ~~`/write-package`~~ → Use `/writer:discuss` → `/writer:execute`

**Reason:** Phased workflow provides better quality and more professional results. Old commands were too simplistic for professional content generation.

---

### 📦 Dependencies

#### **New Required Skills**
- **claude-seo** (v1.7.0+) - Auto-installed during setup
- **humanizer** (latest) - Auto-installed during setup

**Installation:** Both skills are automatically installed when you install or update Content Writer. No manual action required.

---

###  Technical Improvements

- **Modular architecture** - Separated concerns for better maintainability
- **Error handling** - Graceful failures with helpful error messages
- **Performance** - Dual storage system for fast access
- **Extensibility** - Easy to add new platforms and content types
- **Documentation** - Comprehensive inline documentation and examples

---

### 📚 Documentation

- **New:** Comprehensive SKILL.md with phased workflow documentation
- **New:** Enhanced README.md with examples and tutorials
- **New:** Reference files for all social platforms
- **New:** Profile management documentation
- **New:** SEO and anti-AI integration guides

---

###  Migration Guide

#### **For v1.x Users**

**What You Need to Know:**
1. **Profile recreation required** - Old profiles won't migrate automatically
2. **New command structure** - Learn the phased workflow (`/writer:discuss` → `plan` → `execute` → `verify` → `ship`)
3. **Dependencies auto-install** - claude-seo and humanizer will be installed automatically
4. **Output location changes** - Files now save to organized directories

**Migration Steps:**
1. Update to v2.0.0: `npm update -g claude-content-writer`
2. Create new profile: `/writer:profile-create`
3. Provide URLs for automatic tone detection (optional but recommended)
4. Complete comprehensive questionnaire
5. Start using new phased workflow

**Quick Start:**
```
/writer:profile-create
[Complete profile setup]

/writer:discuss "blog post about SaaS onboarding"
/writer:plan
/writer:execute
/writer:verify
/writer:ship
```

Or use auto-advance:
```
/writer:discuss "blog post about SaaS onboarding"
/writer:next  # Automatically runs plan
/writer:next  # Automatically runs execute
/writer:next  # Automatically runs verify
/writer:next  # Automatically runs ship
```

---

###  What's Next

**Planned for v2.1:**
- Multi-language support
- Content calendar integration
- A/B testing for headlines
- Analytics integration
- Team collaboration features

---

###  Tips for v2.0

1. **Take time with profile creation** - The richer your profile, the better your content
2. **Provide multiple URLs** - More examples = better tone detection
3. **Use the phased workflow** - Don't skip steps, each phase adds value
4. **Review verify phase carefully** - This is where quality is ensured
5. **Leverage claude-seo** - SEO optimization is now built-in
6. **Trust the humanizer** - Anti-AI audit catches patterns you might miss

---

###  Bug Fixes

- Fixed memory persistence issues with profile data
- Fixed shortcode expansion in different contexts
- Fixed case study rotation tracking
- Fixed CTA platform compatibility checks
- Fixed output file naming conflicts

---

###  Acknowledgments

- **GSD (Get Shit Done)** - Inspiration for phased workflow structure
- **claude-seo** - Comprehensive SEO integration
- **humanizer** - Advanced anti-AI detection
- **Community feedback** - Feature requests and bug reports

---

## [1.2.0] - Previous Release

See git history for previous release notes.

---

## Installation

```bash
npm install -g claude-content-writer@2.0.0
```

Or update existing installation:

```bash
npm update -g claude-content-writer
```

---

## Support

- **Issues:** https://github.com/sociilabs/claude-content-writer/issues
- **Documentation:** https://github.com/sociilabs/claude-content-writer#readme
- **Discussions:** https://github.com/sociilabs/claude-content-writer/discussions

---

**Full Changelog:** https://github.com/sociilabs/claude-content-writer/compare/v1.2.0...v2.0.0
