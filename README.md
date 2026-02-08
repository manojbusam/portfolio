# Portfolio Website - Data Analytics Showcase

A professional portfolio website showcasing interactive Power BI dashboards and data analytics projects. Built with React and Node.js, featuring embedded Power BI reports for Healthcare, Finance, Retail, and Marketing analytics.

## 🎯 Overview

This portfolio website demonstrates expertise in:
- **Business Intelligence & Data Visualization** (Power BI, Tableau, DAX)
- **Data Analytics & Engineering** (SQL, Python, Microsoft Fabric)
- **Full-Stack Development** (React, Node.js, Express)
- **Cloud Platforms** (Azure, AWS, GCP)

The site features multiple interactive dashboards embedded from Power BI Service, showcasing real-world analytics projects across different industries.

## 🏗️ Architecture

- **Frontend**: React 18 with Vite, React Router, Power BI JavaScript SDK
- **Backend**: Node.js/Express with MSAL for Azure AD authentication
- **Power BI**: Embedded reports using Power BI REST API
- **Deployment**: Vercel (frontend) with serverless functions

## 📋 Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Power BI Pro or Premium** account (optional - for live dashboards)
- **Azure AD App Registration** (optional - for Power BI embedding)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Portfolio
```

### 2. Install Dependencies

**Option A: Install All at Once (Recommended)**
```bash
npm run install:all
```

**Option B: Install Separately**
```bash
# Root dependencies
npm install

# Backend dependencies
cd backend
npm install

# Frontend dependencies
cd ../frontend
npm install
```

### 3. Configure Environment Variables (Optional)

If you want to use live Power BI dashboards:

1. Copy the example environment file:
   ```bash
   cd backend
   cp env.example .env
   ```

2. Edit `.env` with your Azure AD credentials:
   ```env
   POWER_BI_CLIENT_ID=your-client-id-here
   POWER_BI_CLIENT_SECRET=your-client-secret-here
   POWER_BI_TENANT_ID=your-tenant-id-here
   PORT=3001
   ```

   See `README_FULLSTACK.md` for detailed Azure AD setup instructions.

### 4. Start the Application

**One Command (Recommended):**
```bash
# From the root directory
npm start
```

This starts both backend (port 3001) and frontend (port 3000) servers automatically!

**Alternative - Manual Start:**
```bash
# Terminal 1 - Backend
npm run backend

# Terminal 2 - Frontend
npm run frontend
```

**Or use the start scripts:**
```bash
# Mac/Linux
./start.sh

# Windows
start.bat
```

### 5. Access the Application

Open your browser and navigate to:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001

## 📁 Project Structure

```
Portfolio/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HealthcareDashboard.jsx
│   │   │   ├── FinanceDashboard.jsx
│   │   │   ├── RetailDashboard.jsx
│   │   │   ├── MarketingDashboard.jsx
│   │   │   └── PowerBIEmbed.jsx
│   │   ├── pages/           # Page components
│   │   │   ├── About.jsx    # Main portfolio page
│   │   │   └── Portfolio.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   │   └── data/            # CSV data files
│   ├── package.json
│   └── vite.config.js
├── backend/                  # Node.js/Express API
│   ├── server.js            # Express server with Power BI API
│   ├── package.json
│   └── .env                 # Power BI credentials (not in git)
├── data/                     # Healthcare CSV data files
├── package.json             # Root package.json with scripts
└── README.md                # This file
```

## 🎨 Features

### Portfolio Pages

- **About Page** (`/` or `/about`)
  - Professional profile and introduction
  - Experience timeline
  - Technical skills showcase
  - Live dashboard previews
  - Contact information

- **Portfolio Page** (`/portfolio`)
  - Interactive dashboard selector
  - Embedded Power BI reports:
    - 🏥 Healthcare Analytics
    - 💰 Finance & Risk
    - 📦 Retail & Supply Chain
    - 📊 Marketing Analytics

### Dashboard Features

- **Power BI Embedding**: Seamless integration with Power BI Service
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Interactive Navigation**: Easy switching between different dashboards
- **Error Handling**: Graceful fallbacks for missing or unavailable dashboards

## 🔧 Development

### Available Scripts

**Root Level:**
- `npm run install:all` - Install all dependencies (root, backend, frontend)
- `npm start` - Start both backend and frontend concurrently
- `npm run dev` - Start both in development mode with hot reload
- `npm run backend` - Start only the backend server
- `npm run frontend` - Start only the frontend dev server

**Frontend:**
- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

**Backend:**
- `npm start` - Start Express server
- `npm run dev` - Start with auto-reload (node --watch)

### Backend API Endpoints

- `GET /api/health` - Health check
- `GET /api/workspaces` - List all Power BI workspaces
- `GET /api/reports?workspaceId={id}` - List reports in a workspace
- `POST /api/embed-token` - Generate embed token for a report
  ```json
  {
    "reportId": "report-guid",
    "workspaceId": "workspace-guid"
  }
  ```

### Demo Mode

If you don't have Power BI credentials set up, the backend includes demo endpoints:
- `GET /api/demo/reports` - Mock reports list
- `POST /api/demo/embed-token` - Mock embed token

## 🚢 Deployment

### Vercel Deployment

The frontend is configured for Vercel deployment:

1. Connect your GitHub repository to Vercel
2. Set build command: `cd frontend && npm install && npm run build`
3. Set output directory: `frontend/dist`
4. Add environment variables if needed

See `VERCEL_DEPLOYMENT_GUIDE.md` for detailed deployment instructions.

### Environment Variables

For production deployment, ensure these are set:
- `POWER_BI_CLIENT_ID`
- `POWER_BI_CLIENT_SECRET`
- `POWER_BI_TENANT_ID`
- `PORT` (optional, defaults to 3001)

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Power BI JavaScript SDK** - Power BI embedding
- **CSS3** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MSAL Node** - Azure AD authentication
- **Axios** - HTTP client
- **CORS** - Cross-origin resource sharing

### Data & Analytics
- **Power BI** - Business intelligence platform
- **DAX** - Data analysis expressions
- **SQL** - Database queries
- **Python** - Data processing (see `generate_healthcare_data.py`)

## 📚 Additional Documentation

- `README_FULLSTACK.md` - Detailed Power BI embedding setup guide
- `START_HERE.md` - Quick start guide
- `VERCEL_DEPLOYMENT_GUIDE.md` - Deployment instructions
- `QUICK_START.md` - Alternative quick start guide

## 🐛 Troubleshooting

### "Failed to generate embed token"
- Verify your Service Principal has access to the Power BI workspace
- Check that API permissions are granted and consented in Azure AD
- Ensure the Workspace ID and Report ID are correct

### "Failed to fetch reports"
- Make sure the backend server is running on port 3001
- Check your `.env` file has correct credentials
- Verify network connectivity

### CORS Errors
- The backend is configured to allow requests from `localhost:3000`
- If using a different port, update CORS settings in `backend/server.js`

### Power BI Report Not Loading
- Check browser console for errors
- Verify the Power BI JavaScript SDK is loaded (check Network tab)
- Ensure the embed token is valid (check expiry time)

## 🔒 Security Notes

- **Never commit** your `.env` file to version control
- Keep your Azure AD client secret secure
- Use environment variables for all sensitive data
- Consider using Azure Key Vault for production deployments
- Implement proper authentication for production use

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome!

## 📧 Contact

**Vijayasri Chinta**
- Email: chintavijayasri@outlook.com
- LinkedIn: [vijayasri-chinta](https://www.linkedin.com/in/vijayasri-chinta/)
- GitHub: [vijayasrichinta2609](https://github.com/vijayasrichinta2609?tab=repositories)

---

**Built with ❤️ using React, Power BI, and modern web technologies**
