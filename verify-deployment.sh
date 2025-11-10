#!/bin/bash

# Pre-Deployment Verification Script for Vercel
echo "🔍 Running pre-deployment checks..."
echo ""

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check 1: Node version
echo "1️⃣ Checking Node.js version..."
NODE_VERSION=$(node -v)
echo "   Node version: $NODE_VERSION"
if [[ "$NODE_VERSION" == v18* ]] || [[ "$NODE_VERSION" == v20* ]]; then
    echo -e "   ${GREEN}✓${NC} Node.js version compatible with Vercel"
else
    echo -e "   ${YELLOW}⚠${NC} Warning: Recommended Node.js 18.x or 20.x for Vercel"
fi
echo ""

# Check 2: Dependencies installed
echo "2️⃣ Checking dependencies..."
if [ -d "node_modules" ]; then
    echo -e "   ${GREEN}✓${NC} node_modules exists"
else
    echo -e "   ${RED}✗${NC} node_modules missing - run: npm install"
    exit 1
fi
echo ""

# Check 3: Build test
echo "3️⃣ Testing production build..."
npm run build > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo -e "   ${GREEN}✓${NC} Build successful"
else
    echo -e "   ${RED}✗${NC} Build failed - fix errors before deploying"
    echo "   Run 'npm run build' to see detailed errors"
    exit 1
fi
echo ""

# Check 4: Required files
echo "4️⃣ Checking required files..."
REQUIRED_FILES=("package.json" "next.config.ts" "tsconfig.json")
for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo -e "   ${GREEN}✓${NC} $file exists"
    else
        echo -e "   ${RED}✗${NC} $file missing"
        exit 1
    fi
done
echo ""

# Check 5: Environment variables template
echo "5️⃣ Checking environment configuration..."
if [ -f ".env.example" ]; then
    echo -e "   ${GREEN}✓${NC} .env.example exists"
    echo "   📝 Remember to add these variables to Vercel Dashboard"
else
    echo -e "   ${YELLOW}⚠${NC} .env.example not found (optional)"
fi
echo ""

# Check 6: Git status
echo "6️⃣ Checking Git status..."
if [ -d ".git" ]; then
    echo -e "   ${GREEN}✓${NC} Git repository initialized"
    
    # Check for uncommitted changes
    if git diff-index --quiet HEAD --; then
        echo -e "   ${GREEN}✓${NC} No uncommitted changes"
    else
        echo -e "   ${YELLOW}⚠${NC} You have uncommitted changes"
        echo "   Run: git add . && git commit -m 'Prepare for deployment'"
    fi
    
    # Check remote
    if git remote -v | grep -q "origin"; then
        echo -e "   ${GREEN}✓${NC} Git remote configured"
    else
        echo -e "   ${YELLOW}⚠${NC} No git remote found"
        echo "   Add remote: git remote add origin <your-repo-url>"
    fi
else
    echo -e "   ${RED}✗${NC} Not a git repository"
    echo "   Initialize: git init && git add . && git commit -m 'Initial commit'"
fi
echo ""

# Check 7: Certificate images
echo "7️⃣ Checking certificate images..."
CERT_IMAGES=("cert-atul-soni.jpg" "cert-gajendra.jpg" "cert-nipun.jpg")
MISSING=0
for img in "${CERT_IMAGES[@]}"; do
    if [ -f "public/images/$img" ]; then
        echo -e "   ${GREEN}✓${NC} $img exists"
    else
        echo -e "   ${RED}✗${NC} $img missing"
        MISSING=$((MISSING+1))
    fi
done

if [ $MISSING -eq 0 ]; then
    echo -e "   ${GREEN}✓${NC} All certificate images present"
fi
echo ""

# Check 8: Vercel configuration
echo "8️⃣ Checking Vercel setup..."
if command -v vercel &> /dev/null; then
    echo -e "   ${GREEN}✓${NC} Vercel CLI installed"
    echo "   You can deploy with: vercel --prod"
else
    echo -e "   ${YELLOW}ℹ${NC} Vercel CLI not installed (optional)"
    echo "   Install with: npm install -g vercel"
fi
echo ""

# Summary
echo "═══════════════════════════════════════════════"
echo "📊 PRE-DEPLOYMENT SUMMARY"
echo "═══════════════════════════════════════════════"
echo ""
echo "✅ Ready for Vercel deployment!"
echo ""
echo "📋 Next Steps:"
echo "   1. Push to GitHub: git push origin main"
echo "   2. Go to: https://vercel.com/new"
echo "   3. Import your GitHub repository"
echo "   4. Add environment variables (see .env.example)"
echo "   5. Click Deploy!"
echo ""
echo "Or deploy via CLI:"
echo "   $ vercel --prod"
echo ""
echo "📖 Full guide: VERCEL_DEPLOYMENT_GUIDE.md"
echo "═══════════════════════════════════════════════"
