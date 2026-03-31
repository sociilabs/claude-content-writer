#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');

const VERSION = '2.1.0';
const pkgDir = path.join(__dirname, '..');
const skillsBaseDir = path.join(os.homedir(), '.claude', 'skills');

// Check if this is a new install or update
let isNewInstall = false;
let isUpdate = false;
let previousVersion = null;

// Version tracking for update command
const updateVersionFile = path.join(skillsBaseDir, 'writer-update', '.version');
if (fs.existsSync(updateVersionFile)) {
  try {
    previousVersion = fs.readFileSync(updateVersionFile, 'utf8').trim();
    if (previousVersion !== VERSION) {
      isUpdate = true;
    }
  } catch (err) {
    // Ignore
  }
} else {
  isNewInstall = true;
}

try {
  // Remove old monolithic skill if it exists
  const oldSkillDir = path.join(skillsBaseDir, 'content-writer');
  if (fs.existsSync(oldSkillDir)) {
    fs.rmSync(oldSkillDir, { recursive: true, force: true });
  }

  // Create individual skill directories for each command
  const commands = [
    'discuss', 'plan', 'execute', 'verify', 'ship', 'next',
    'profile-create', 'profile-view', 'profile-edit', 'profile-delete',
    'update', 'help', 'status'
  ];

  for (const cmd of commands) {
    const skillDir = path.join(skillsBaseDir, `writer-${cmd}`);
    fs.mkdirSync(skillDir, { recursive: true });
    
    // Copy skill file
    fs.copyFileSync(
      path.join(pkgDir, 'skills', 'writer', `${cmd}.md`),
      path.join(skillDir, 'SKILL.md')
    );
  }

  // Copy shared context to a common location
  const sharedDir = path.join(skillsBaseDir, 'writer-shared');
  fs.mkdirSync(sharedDir, { recursive: true });
  fs.copyFileSync(
    path.join(pkgDir, 'skills', 'shared-context.md'),
    path.join(sharedDir, 'shared-context.md')
  );

  // Copy references to writer-references
  const refsDir = path.join(skillsBaseDir, 'writer-references');
  fs.mkdirSync(refsDir, { recursive: true });
  const refFiles = fs.readdirSync(path.join(pkgDir, 'references'));
  for (const file of refFiles) {
    fs.copyFileSync(
      path.join(pkgDir, 'references', file),
      path.join(refsDir, file)
    );
  }

  // Create writer-profiles directory
  const profilesDir = path.join(skillsBaseDir, 'writer-profiles');
  fs.mkdirSync(profilesDir, { recursive: true });

  // Copy CHANGELOG to writer-update
  const updateDir = path.join(skillsBaseDir, 'writer-update');
  fs.mkdirSync(updateDir, { recursive: true });
  if (fs.existsSync(path.join(pkgDir, 'CHANGELOG.md'))) {
    fs.copyFileSync(
      path.join(pkgDir, 'CHANGELOG.md'),
      path.join(updateDir, 'CHANGELOG.md')
    );
  }

  // Write version file
  fs.writeFileSync(updateVersionFile, VERSION);

  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  
  if (isNewInstall) {
    console.log(`  Content Writer v${VERSION} - Installed Successfully!`);
  } else if (isUpdate) {
    console.log(`  Content Writer Updated: v${previousVersion} → v${VERSION}`);
  } else {
    console.log(`  Content Writer v${VERSION} - Reinstalled`);
  }
  
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`\nInstalled ${commands.length} commands to: ${skillsBaseDir}`);
  
  // Install dependencies
  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`  Installing Required Dependencies...`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  
  try {
    const installScript = path.join(pkgDir, 'scripts', 'install-dependencies.sh');
    if (fs.existsSync(installScript)) {
      execSync(`bash "${installScript}"`, { stdio: 'inherit' });
    }
  } catch (err) {
    console.warn(`\n⚠ Could not auto-install dependencies: ${err.message}`);
    console.log(`  Please install manually:`);
    console.log(`  • claude-seo: npx skills add AgriciDaniel/claude-seo`);
    console.log(`  • humanizer: npx skills add blader/humanizer\n`);
  }

  // Display what's new
  if (isUpdate || isNewInstall) {
    console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    console.log(`  What's New in v${VERSION}`);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    console.log(``);
    console.log(`  🎯 Command-Per-Skill Architecture`);
    console.log(`     • Each command is now a separate skill`);
    console.log(`     • Better command discovery in Claude Code`);
    console.log(`     • Proper autocomplete support`);
    console.log(``);
    console.log(`  📦 Auto-Update Notifications`);
    console.log(`     • Automatic version checking`);
    console.log(`     • /writer:update command`);
    console.log(`     • Changelog preview before updating`);
    console.log(``);
    console.log(`  Full changelog: ${updateDir}/CHANGELOG.md`);
    console.log(``);
  }

  // Next steps
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`  Next Steps`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(``);
  
  if (isNewInstall || isUpdate) {
    console.log(`  1. Restart Claude Code to load new commands`);
    console.log(``);
    console.log(`  2. Create your writer profile:`);
    console.log(`     /writer:profile-create`);
    console.log(``);
    console.log(`  3. Start generating content:`);
    console.log(`     /writer:discuss "blog post about X"`);
    console.log(`     /writer:next  (auto-advance through phases)`);
    console.log(``);
  }
  
  console.log(`  Available commands: /writer:help`);
  console.log(``);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
  
} catch (err) {
  console.error(`\n⚠ claude-content-writer: Installation failed: ${err.message}`);
  console.error(`  Stack: ${err.stack}\n`);
  process.exit(1);
}
