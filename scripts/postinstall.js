#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');

const SKILL_NAME = 'content-writer';
const VERSION = '2.0.0';
const pkgDir = path.join(__dirname, '..');
const targetDir = path.join(os.homedir(), '.claude', 'skills', SKILL_NAME);
const refsDir = path.join(targetDir, 'references');
const versionFile = path.join(targetDir, '.version');

// Check if this is a new install or update
let isNewInstall = false;
let isUpdate = false;
let previousVersion = null;

if (fs.existsSync(versionFile)) {
  try {
    previousVersion = fs.readFileSync(versionFile, 'utf8').trim();
    if (previousVersion !== VERSION) {
      isUpdate = true;
    }
  } catch (err) {
    // Ignore errors reading version file
  }
} else {
  isNewInstall = true;
}

try {
  // Create target directories
  fs.mkdirSync(refsDir, { recursive: true });

  // Copy SKILL.md
  fs.copyFileSync(
    path.join(pkgDir, 'SKILL.md'),
    path.join(targetDir, 'SKILL.md')
  );

  // Copy all reference files
  const refFiles = fs.readdirSync(path.join(pkgDir, 'references'));
  for (const file of refFiles) {
    fs.copyFileSync(
      path.join(pkgDir, 'references', file),
      path.join(refsDir, file)
    );
  }

  // Copy CHANGELOG.md
  if (fs.existsSync(path.join(pkgDir, 'CHANGELOG.md'))) {
    fs.copyFileSync(
      path.join(pkgDir, 'CHANGELOG.md'),
      path.join(targetDir, 'CHANGELOG.md')
    );
  }

  // Write version file
  fs.writeFileSync(versionFile, VERSION);

  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  
  if (isNewInstall) {
    console.log(`  Content Writer v${VERSION} - Installed Successfully!`);
  } else if (isUpdate) {
    console.log(`  Content Writer Updated: v${previousVersion} → v${VERSION}`);
  } else {
    console.log(`  Content Writer v${VERSION} - Reinstalled`);
  }
  
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`\nInstalled to: ${targetDir}`);
  
  // Install dependencies
  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`  Installing Required Dependencies...`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  
  try {
    const installScript = path.join(pkgDir, 'scripts', 'install-dependencies.sh');
    if (fs.existsSync(installScript)) {
      execSync(`bash "${installScript}"`, { stdio: 'inherit' });
    } else {
      console.log(`\n⚠ Dependency install script not found`);
      console.log(`  Please install manually:`);
      console.log(`  • claude-seo: https://github.com/AgriciDaniel/claude-seo`);
      console.log(`  • humanizer: https://github.com/blader/humanizer\n`);
    }
  } catch (err) {
    console.warn(`\n⚠ Could not auto-install dependencies: ${err.message}`);
    console.log(`  Please install manually:`);
    console.log(`  • claude-seo: https://github.com/AgriciDaniel/claude-seo`);
    console.log(`  • humanizer: https://github.com/blader/humanizer\n`);
  }

  // Display what's new for updates
  if (isUpdate || isNewInstall) {
    console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    console.log(`  What's New in v${VERSION}`);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    console.log(``);
    console.log(`  ✨ GSD-Style Phased Workflow`);
    console.log(`     /writer:discuss → plan → execute → verify → ship`);
    console.log(``);
    console.log(`  🔍 Enhanced Profile Creation`);
    console.log(`     • URL scanning with automatic tone detection`);
    console.log(`     • Comprehensive brand questionnaire`);
    console.log(`     • Interactive selection system`);
    console.log(``);
    console.log(`  🚀 Integrated Skills`);
    console.log(`     • claude-seo - SEO optimization`);
    console.log(`     • humanizer - Anti-AI auditing`);
    console.log(``);
    console.log(`  📁 Smart Output Management`);
    console.log(`     • Saves to current directory in Claude Code`);
    console.log(`     • Organized structure for all content types`);
    console.log(``);
    console.log(`  🔒 Profile-First Enforcement`);
    console.log(`     • Must create profile before generating content`);
    console.log(`     • Ensures consistent quality and voice`);
    console.log(``);
    console.log(`  Full changelog: ${targetDir}/CHANGELOG.md`);
    console.log(``);
  }

  // Next steps
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`  Next Steps`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(``);
  
  if (isNewInstall || isUpdate) {
    console.log(`  1. Create your writer profile:`);
    console.log(`     /writer:profile-create`);
    console.log(``);
    console.log(`  2. Start generating content:`);
    console.log(`     /writer:discuss "blog post about X"`);
    console.log(`     /writer:next  (auto-advance through phases)`);
    console.log(``);
  }
  
  console.log(`  Documentation: ${targetDir}/README.md`);
  console.log(`  Changelog: ${targetDir}/CHANGELOG.md`);
  console.log(``);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
  
} catch (err) {
  // Non-fatal — don't block npm install if something goes wrong
  console.warn(`\n⚠ claude-content-writer: could not install skill files (${err.message})`);
  console.warn(`  You can install manually by copying SKILL.md and references/ to ${targetDir}\n`);
}
