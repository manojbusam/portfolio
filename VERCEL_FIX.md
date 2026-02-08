# 🔧 Vercel Blank Page Fix

## Issue
After connecting to Git, Vercel shows a blank page at https://portfolio-vchinta.vercel.app/

## Root Cause
Vercel needs to be configured with **Root Directory = `frontend`** in the dashboard settings.

## ✅ Solution

### Step 1: Update Vercel Project Settings

1. Go to https://vercel.com/dashboard
2. Click on your **portfolio** project
3. Go to **Settings** → **General**
4. Scroll to **Root Directory**
5. Click **Edit** and set it to: `frontend`
6. Click **Save**

### Step 2: Verify Build Settings

In the same Settings page, verify:
- **Framework Preset:** Vite
- **Build Command:** `npm run build` (auto-detected)
- **Output Directory:** `dist` (auto-detected)
- **Install Command:** `npm install` (auto-detected)

### Step 3: Redeploy

1. Go to **Deployments** tab
2. Click **⋯** (three dots) on the latest deployment
3. Click **Redeploy**
4. Or push a new commit to trigger auto-deploy

## 📝 Important Notes

- **Root Directory MUST be `frontend`** - This is the #1 cause of blank pages
- The `vercel.json` in root is for when Root Directory is NOT set
- The `frontend/vercel.json` is used when Root Directory IS set to `frontend`

## 🔍 Verify Deployment

After redeploying, check:
1. Build logs show successful build
2. No errors in Vercel logs
3. Browser console (F12) shows no errors
4. Network tab shows assets loading (200 status)

## 🐛 If Still Blank

1. **Check Browser Console:**
   - Open DevTools (F12)
   - Look for red errors
   - Check Network tab for failed requests

2. **Check Vercel Logs:**
   - Go to Deployments → Latest → Functions/Logs
   - Look for build or runtime errors

3. **Verify Files:**
   - `frontend/dist/index.html` should exist after build
   - `frontend/public/data/*.csv` files should be copied to dist

4. **Test Locally:**
   ```bash
   cd frontend
   npm run build
   npm run preview
   ```
   Visit http://localhost:4173 - should work if Vercel config is correct

## ✅ Current Configuration

- ✅ Root `vercel.json` updated with correct rewrites
- ✅ Frontend `vercel.json` has SPA routing
- ✅ Error Boundary added for better debugging
- ✅ Analytics component properly imported

---

**After setting Root Directory to `frontend` and redeploying, the site should work!**
