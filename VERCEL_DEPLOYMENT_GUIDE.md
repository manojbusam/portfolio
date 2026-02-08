# 🚀 Vercel Deployment Guide - Step by Step

## Prerequisites
- ✅ Code is pushed to GitHub: `manojbusam/portfolio`
- ✅ You have a Vercel account (Sarvatattva)
- ✅ GitHub is connected to Vercel

## Method 1: Via Vercel Dashboard (Recommended - Easiest)

### Step 1: Go to Vercel
1. Open your browser and go to: **https://vercel.com**
2. **Sign in** with your **Sarvatattva** account credentials

### Step 2: Create New Project
1. Click the **"Add New..."** button (top right)
2. Select **"Project"** from the dropdown
3. Or click **"Import Project"** if you see it

### Step 3: Import from GitHub
1. You'll see a list of your GitHub repositories
2. Find and click on **`manojbusam/portfolio`**
3. If you don't see it, click **"Adjust GitHub App Permissions"** and grant access

### Step 4: Configure Project Settings
**⚠️ IMPORTANT - These settings are critical:**

1. **Project Name**: 
   - Enter: `portfolio`
   - Or leave as default if it's already `portfolio`

2. **Root Directory**: 
   - Click **"Edit"** next to Root Directory
   - Change from `.` (root) to: `frontend`
   - ⚠️ **THIS IS CRITICAL** - The build must happen in the `frontend` folder

3. **Framework Preset**: 
   - Should auto-detect as **"Vite"**
   - If not, select **"Vite"** manually

4. **Build and Output Settings** (should auto-fill, but verify):
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

5. **Environment Variables**: 
   - Leave empty for now (not needed for this project)

### Step 5: Deploy
1. Click the **"Deploy"** button (bottom right)
2. Wait for the build to complete (usually 1-2 minutes)
3. You'll see build logs in real-time

### Step 6: Verify Deployment
1. Once deployment completes, you'll see a success message
2. Click on the deployment URL (e.g., `https://portfolio-sarvatattva.vercel.app`)
3. Your site should load!

## Method 2: Via Vercel CLI (Alternative)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Navigate to Frontend Directory
```bash
cd /Users/mbusam/Desktop/git/Power-BI/frontend
```

### Step 3: Login to Vercel
```bash
vercel login
```
- This will open a browser window for authentication
- Sign in with your Sarvatattva account

### Step 4: Deploy
```bash
vercel --scope sarvatattva
```

### Step 5: Follow Prompts
When prompted:
- **Set up and deploy?** → Type `Y` and press Enter
- **Which scope?** → Select **Sarvatattva** (use arrow keys, press Enter)
- **Link to existing project?** → Type `N` (first time) or `Y` (if redeploying)
- **Project name:** → Type `portfolio` and press Enter
- **Directory:** → Type `./` and press Enter
- **Override settings?** → Type `N` and press Enter

### Step 6: Production Deploy
After initial deployment, deploy to production:
```bash
vercel --prod
```

## ⚠️ Common Issues & Solutions

### Issue 1: Blank Screen / Loading Forever
**Solution**: 
- Check that **Root Directory** is set to `frontend` (not root)
- Verify `vercel.json` exists in `frontend/` folder
- Check browser console (F12) for errors

### Issue 2: Build Fails
**Solution**:
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version (Vercel uses Node 18+ by default)

### Issue 3: Routes Don't Work (404 on refresh)
**Solution**:
- Verify `vercel.json` has the rewrite rules
- Check that `rewrites` section includes: `"source": "/((?!assets|data|_next).*)", "destination": "/index.html"`

### Issue 4: Data Not Loading
**Solution**:
- Verify CSV files are in `frontend/public/data/`
- Check Network tab in browser (F12) to see if CSV files load (should be 200 status)

## 📋 Deployment Checklist

Before deploying, verify:
- [ ] Code is pushed to GitHub (`manojbusam/portfolio`)
- [ ] `frontend/vercel.json` exists and is correct
- [ ] `frontend/public/data/` contains all CSV files
- [ ] `frontend/package.json` has build script
- [ ] Root Directory will be set to `frontend` in Vercel

After deployment, verify:
- [ ] Site loads at the Vercel URL
- [ ] About Me page displays correctly
- [ ] Portfolio page loads with dashboards
- [ ] All 4 dashboards (Healthcare, Finance, Retail, Marketing) work
- [ ] Data displays correctly (not all zeros)

## 🔗 Your Deployment URL

After successful deployment, your site will be at:
- **Production**: `https://portfolio-sarvatattva.vercel.app`
- Or: `https://portfolio-[random-id].vercel.app`

You can also set a custom domain later in Vercel settings.

## 📞 Need Help?

If deployment fails:
1. Check Vercel build logs (click on the deployment)
2. Check browser console for errors (F12)
3. Verify all files are in `frontend/` directory
4. Ensure Root Directory is set to `frontend` in Vercel settings

---

**Good luck with your deployment! 🚀**
