# 🚀 Quick Start Guide

## Full Stack Power BI Healthcare Dashboard

This is a complete full-stack application that embeds Power BI reports in a React frontend.

## ⚡ Quick Setup (3 Steps)

### 1. Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend  
cd ../frontend
npm install
```

### 2. Configure Power BI (Optional for Demo)

If you want to use real Power BI reports, set up Azure AD credentials:

1. Create an Azure AD App Registration
2. Grant Power BI API permissions
3. Add Service Principal to your Power BI workspace
4. Copy `backend/env.example` to `backend/.env` and add your credentials

**See `README_FULLSTACK.md` for detailed setup instructions.**

### 3. Start the Application

**One Command to Start Everything:**

```bash
# From the root directory
npm start
```

Or use the start script:
```bash
# Mac/Linux
./start.sh

# Windows
start.bat
```

This will start both backend (port 3001) and frontend (port 3000) servers!

Then open **http://localhost:3000** in your browser!

**Alternative - Manual Start:**
If you prefer to run them separately:
```bash
# Terminal 1 - Backend
npm run backend

# Terminal 2 - Frontend  
npm run frontend
```

## 📁 Project Structure

```
Power-BI/
├── backend/          # Node.js/Express API server
├── frontend/         # React application
├── data/            # Healthcare CSV data files
└── README_FULLSTACK.md  # Complete documentation
```

## 🎯 What You Get

- ✅ React frontend with modern UI
- ✅ Power BI report embedding
- ✅ Backend API for authentication
- ✅ Sample healthcare data
- ✅ Multiple pages (Home, Dashboard, Reports)

## 💡 Demo Mode

The backend includes demo endpoints that work without Power BI credentials:
- `/api/demo/reports` - Mock reports
- `/api/demo/embed-token` - Mock tokens

## 📚 Next Steps

1. Read `README_FULLSTACK.md` for complete setup
2. Set up Azure AD for real Power BI embedding
3. Import the healthcare CSV files into Power BI Desktop
4. Publish your dashboard to Power BI Service
5. Embed it in the React app!

---

**Need help?** Check `README_FULLSTACK.md` for detailed instructions.
