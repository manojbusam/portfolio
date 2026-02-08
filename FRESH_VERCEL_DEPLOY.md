# 🆕 Fresh Vercel Deployment - Start from Scratch

## Step 1: Delete Existing Vercel Project

### Via Vercel Dashboard:

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com
   - Sign in with **Sarvatattva** account

2. **Find Your Project**
   - Click on **"portfolio"** project (or whatever it's named)
   - Or go to: https://vercel.com/dashboard

3. **Delete Project**
   - Go to **Settings** tab (in the project)
   - Scroll down to **"Danger Zone"** section
   - Click **"Delete Project"**
   - Type the project name to confirm
   - Click **"Delete"**

### Alternative: Via Project Settings
- Click on the project
- Go to **Settings** → **General**
- Scroll to bottom → **"Delete Project"**

---

## Step 2: Clean Up (Optional but Recommended)

### Remove Vercel Cache/Link (if using CLI):
```bash
cd /Users/mbusam/Desktop/git/Power-BI/frontend
rm -rf .vercel
```

This removes any local Vercel configuration files.

---

## Step 3: Fresh Deployment

### Method A: Via Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   - https://vercel.com
   - Make sure you're signed in as **Sarvatattva**

2. **Create New Project**
   - Click **"Add New..."** button (top right)
   - Select **"Project"**

3. **Import Repository**
   - Find **`manojbusam/portfolio`** in the list
   - Click **"Import"** next to it
   - If not visible, click **"Adjust GitHub App Permissions"**

4. **Configure Project** ⚠️ **CRITICAL SETTINGS**:

   **Project Name:**
   - Enter: `portfolio`

   **Root Directory:**
   - Click **"Edit"** or **"Change"** button
   - Change from `.` to: `frontend`
   - ⚠️ **THIS IS THE MOST IMPORTANT SETTING**

   **Framework Preset:**
   - Should auto-detect: **Vite**
   - If not, manually select **"Vite"**

   **Build and Output Settings** (verify these):
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

   **Environment Variables:**
   - Leave empty (not needed)

5. **Deploy**
   - Click **"Deploy"** button
   - Wait for build (1-2 minutes)
   - Watch the build logs

6. **Verify**
   - Once complete, click the deployment URL
   - Should see your portfolio site!

---

### Method B: Via CLI (Alternative)

1. **Install Vercel CLI** (if not installed):
   ```bash
   npm install -g vercel
   ```

2. **Navigate to Frontend**:
   ```bash
   cd /Users/mbusam/Desktop/git/Power-BI/frontend
   ```

3. **Remove Old Link** (if exists):
   ```bash
   rm -rf .vercel
   ```

4. **Login**:
   ```bash
   vercel login
   ```
   - Sign in with **Sarvatattva** account

5. **Deploy Fresh**:
   ```bash
   vercel --scope sarvatattva
   ```

6. **Follow Prompts**:
   - **Set up and deploy?** → `Y`
   - **Which scope?** → Select **Sarvatattva**
   - **Link to existing project?** → `N` (fresh start)
   - **Project name:** → `portfolio`
   - **Directory:** → `./` (we're already in frontend/)
   - **Override settings?** → `N`

7. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

---

## Step 4: Verify Everything Works

After deployment, check:

1. **Homepage loads**: `https://portfolio-sarvatattva.vercel.app/`
   - Should show About Me page

2. **Portfolio page works**: `https://portfolio-sarvatattva.vercel.app/portfolio`
   - Should show all 4 dashboards

3. **Data loads**: 
   - Open browser console (F12)
   - Check Network tab
   - CSV files should load (200 status)

4. **No errors**:
   - Console should be clean (no red errors)
   - Site should render completely

---

## ⚠️ Critical Settings Checklist

Before clicking Deploy, verify:

- [ ] **Root Directory = `frontend`** (NOT `.` or root)
- [ ] **Framework = Vite**
- [ ] **Build Command = `npm run build`**
- [ ] **Output Directory = `dist`**
- [ ] **Project Name = `portfolio`**
- [ ] **Organization = Sarvatattva**

---

## 🐛 If Something Goes Wrong

### Build Fails:
- Check build logs in Vercel dashboard
- Verify `frontend/package.json` has all dependencies
- Check that `frontend/vercel.json` exists

### Blank Screen:
- Verify Root Directory is `frontend`
- Check browser console (F12) for errors
- Verify `vercel.json` rewrite rules are correct

### Data Not Loading:
- Check Network tab - CSV files should return 200
- Verify CSV files are in `frontend/public/data/`
- Check browser console for fetch errors

### Routes Don't Work:
- Verify `vercel.json` has SPA routing configured
- Check that rewrite rules exclude `/assets/` and `/data/`

---

## 📝 Quick Reference

**Delete Project:**
- Dashboard → Project → Settings → Danger Zone → Delete

**Fresh Deploy:**
- Dashboard → Add New → Project → Import `manojbusam/portfolio`
- **Root Directory: `frontend`** ⚠️
- Deploy

**Your URL:**
- `https://portfolio-sarvatattva.vercel.app`

---

**Ready to start fresh! 🚀**
