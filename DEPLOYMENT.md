# Deployment Guide - Sarvatattva's Portfolio

## Git Setup & Push to GitHub

Run these commands in your terminal:

```bash
# Navigate to project directory
cd /Users/mbusam/Desktop/git/Power-BI

# Initialize git (if not already done)
git init

# Add remote repository
git remote add origin https://github.com/manojbusam/portfolio.git

# Or if remote already exists, update it:
git remote set-url origin https://github.com/manojbusam/portfolio.git

# Stage all files
git add .

# Commit
git commit -m "Initial commit: Power BI Portfolio Website"

# Push to GitHub
git branch -M main
git push -u origin main
```

## Vercel Deployment to Sarvatattva's Projects

### Option 1: Via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with **Sarvatattva** account
2. Click "Add New Project" or go to **Sarvatattva's** dashboard
3. Import your GitHub repository: `manojbusam/portfolio`
4. Configure the project:
   - **Project Name**: `portfolio`
   - **Root Directory**: `frontend` ⚠️ **IMPORTANT: Set this to `frontend`**
   - **Framework Preset**: Vite (should auto-detect)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `dist` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)
5. **Organization**: Make sure you're deploying under **Sarvatattva** (not personal account)
6. Click "Deploy"

**Deployment URL will be**: `https://portfolio-sarvatattva.vercel.app` (or similar)

### Option 2: Via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Navigate to frontend directory
cd frontend

# Deploy to Sarvatattva organization
vercel --scope sarvatattva

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Select **Sarvatattva**
# - Link to existing project? No (first time) or Yes (if redeploying)
# - Project name: portfolio
# - Directory: ./
# - Override settings? No
```

### Option 3: Link to Existing Project (If Already Created)

If the project already exists in Sarvatattva's account:

```bash
cd frontend
vercel link --scope sarvatattva
# Select project: portfolio
vercel --prod
```

### Environment Variables (if needed)

If you need environment variables in the future:
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add any required variables

## Post-Deployment

After deployment, your site will be available at:
- `https://portfolio-sarvatattva.vercel.app` (or similar)
- Or your custom domain if configured

## Verification Checklist

- ✅ Project deployed under **Sarvatattva** organization
- ✅ Project name is `portfolio`
- ✅ Root Directory set to `frontend`
- ✅ Build completes successfully
- ✅ Site is accessible and all routes work
- ✅ All dashboards load correctly

## Troubleshooting

### If deployment fails:
1. Check that Root Directory is set to `frontend` (not root)
2. Verify `frontend/package.json` has build script
3. Check Vercel build logs for errors
4. Ensure all dependencies are in `package.json`

### If routes don't work:
- The `vercel.json` file includes SPA routing configuration
- All routes should redirect to `index.html` for React Router

## Notes

- The `vercel.json` file is configured for Vite/React deployment
- Only the `frontend` directory is deployed (backend is not needed for static site)
- All build outputs are in `frontend/dist/`
- The site uses React Router, so make sure SPA routing is enabled (already configured in vercel.json)
- Deployment is under **Sarvatattva's** organization/account
