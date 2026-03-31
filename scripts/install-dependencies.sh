#!/bin/bash
# Content Writer v2.0 - Dependency Installation Script
# Auto-installs required skills: claude-seo and humanizer

set -e

SKILLS_DIR="${HOME}/.claude/skills"
CONTENT_WRITER_DIR="${SKILLS_DIR}/content-writer"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Content Writer v2.0 - Installing Dependencies"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "This will install required skills:"
echo "  • claude-seo (SEO optimization)"
echo "  • humanizer (anti-AI auditing)"
echo ""

# Function to check if a skill is installed
check_skill() {
    local skill_name=$1
    local skill_dir="${SKILLS_DIR}/${skill_name}"
    
    if [ -d "$skill_dir" ] && [ -f "${skill_dir}/SKILL.md" ]; then
        return 0  # Skill exists
    else
        return 1  # Skill doesn't exist
    fi
}

# Function to install claude-seo
install_claude_seo() {
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "  Installing claude-seo..."
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    
    cd "${SKILLS_DIR}"
    
    # Clone the repository
    if git clone --depth 1 https://github.com/AgriciDaniel/claude-seo.git 2>/dev/null; then
        echo "✓ claude-seo cloned successfully"
        
        # Run install script if it exists
        if [ -f "claude-seo/install.sh" ]; then
            cd claude-seo
            bash install.sh
            cd ..
        fi
        
        echo "✓ claude-seo installed"
    else
        echo "⚠ Failed to clone claude-seo (may already exist)"
    fi
    
    echo ""
}

# Function to install humanizer
install_humanizer() {
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "  Installing humanizer..."
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    
    cd "${SKILLS_DIR}"
    
    # Clone the repository
    if git clone https://github.com/blader/humanizer.git 2>/dev/null; then
        echo "✓ humanizer cloned successfully"
        echo "✓ humanizer installed"
    else
        echo "⚠ Failed to clone humanizer (may already exist)"
    fi
    
    echo ""
}

# Check and install claude-seo
if check_skill "claude-seo"; then
    echo "✓ claude-seo already installed"
    echo ""
else
    echo "⚠ claude-seo not found"
    install_claude_seo
fi

# Check and install humanizer
if check_skill "humanizer"; then
    echo "✓ humanizer already installed"
    echo ""
else
    echo "⚠ humanizer not found"
    install_humanizer
fi

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Dependency Installation Complete!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Installed skills:"
echo "  • claude-seo - Comprehensive SEO analysis and optimization"
echo "  • humanizer - Advanced anti-AI writing detection"
echo ""
echo "Content Writer is now ready to use!"
echo ""
echo "Next steps:"
echo "  1. Create your writer profile: /writer:profile-create"
echo "  2. Start generating content with phased workflow"
echo ""
echo "Documentation: ${CONTENT_WRITER_DIR}/README.md"
echo ""
