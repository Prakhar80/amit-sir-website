#!/bin/bash

echo "🚀 Starting Performance Optimization for Amit Sir Website..."
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Clean previous builds
echo -e "${YELLOW}📦 Cleaning previous builds...${NC}"
rm -rf .next
rm -rf node_modules/.cache
echo -e "${GREEN}✅ Clean complete${NC}"
echo ""

# Step 2: Install dependencies with cache
echo -e "${YELLOW}📥 Installing dependencies...${NC}"
npm ci --prefer-offline --no-audit
echo -e "${GREEN}✅ Dependencies installed${NC}"
echo ""

# Step 3: Build for production
echo -e "${YELLOW}🏗️  Building production optimized version...${NC}"
NODE_ENV=production npm run build
echo -e "${GREEN}✅ Build complete${NC}"
echo ""

# Step 4: Show build size
echo -e "${BLUE}📊 Build Size Analysis:${NC}"
du -sh .next/
echo ""

# Step 5: Performance tips
echo -e "${BLUE}💡 Performance Optimization Complete!${NC}"
echo ""
echo "To run the optimized build:"
echo "  npm start"
echo ""
echo "To run in development (instant reload):"
echo "  npm run dev"
echo ""
echo -e "${GREEN}🎉 All optimizations applied!${NC}"
