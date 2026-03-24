#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const SKILL_NAME = 'content-writer';
const pkgDir = path.join(__dirname, '..');
const targetDir = path.join(os.homedir(), '.claude', 'skills', SKILL_NAME);
const refsDir = path.join(targetDir, 'references');

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

  console.log(`\nclaude-content-writer: skill installed to ${targetDir}\n`);
} catch (err) {
  // Non-fatal — don't block npm install if something goes wrong
  console.warn(`\nclaude-content-writer: could not install skill files (${err.message})`);
  console.warn(`  You can install manually by copying SKILL.md and references/ to ${targetDir}\n`);
}
