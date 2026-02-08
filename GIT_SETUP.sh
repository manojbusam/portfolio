#!/bin/bash

# Git Setup Script for Portfolio Deployment
# Run this script to set up Git and push to GitHub

echo "🚀 Setting up Git repository..."

# Initialize git if not already done
if [ ! -d ".git" ]; then
    git init
    echo "✅ Git repository initialized"
else
    echo "ℹ️  Git repository already exists"
fi

# Add remote (remove if exists, then add)
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/manojbusam/portfolio.git
echo "✅ Remote repository added: https://github.com/manojbusam/portfolio.git"

# Stage all files
git add .
echo "✅ Files staged"

# Commit
git commit -m "Initial commit: Power BI Portfolio Website with professional dashboards" || echo "ℹ️  No changes to commit"

# Set main branch
git branch -M main

echo ""
echo "📤 Ready to push! Run the following command:"
echo "   git push -u origin main"
echo ""
echo "Or if you need to force push (if repository already has content):"
echo "   git push -u origin main --force"
echo ""
echo "🚀 After pushing, deploy to Vercel:"
echo "   1. Go to https://vercel.com"
echo "   2. Sign in as Sarvatattva"
echo "   3. Import repository: manojbusam/portfolio"
echo "   4. Set Root Directory to: frontend"
echo "   5. Project name: portfolio"
echo "   6. Deploy!"
echo ""
