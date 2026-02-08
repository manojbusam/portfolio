# Quick Deploy to Sarvatattva's Portfolio

## Step 1: Push to GitHub

```bash
cd /Users/mbusam/Desktop/git/Power-BI
./GIT_SETUP.sh
git push -u origin main
```

## Step 2: Deploy to Vercel (Sarvatattva)

### Via Dashboard:
1. Go to https://vercel.com
2. Sign in as **Sarvatattva**
3. Click "Add New Project"
4. Import `manojbusam/portfolio`
5. **IMPORTANT Settings:**
   - Project Name: `portfolio`
   - Root Directory: `frontend` ← **CRITICAL**
   - Framework: Vite (auto)
6. Deploy!

### Via CLI:
```bash
cd frontend
vercel --scope sarvatattva
# Project name: portfolio
# Directory: ./
```

## Done! 🎉

Your portfolio will be live at: `https://portfolio-sarvatattva.vercel.app`
