# Power BI Healthcare Dashboard - Full Stack Application

A full-stack web application that embeds Power BI reports in a React frontend with a Node.js/Express backend.

## 🏗️ Architecture

- **Frontend**: React with Vite, Power BI JavaScript SDK
- **Backend**: Node.js/Express with MSAL for Azure AD authentication
- **Power BI**: Embedded reports using Power BI REST API

## 📋 Prerequisites

1. **Node.js** (v18 or higher)
2. **Power BI Pro or Premium** account
3. **Azure AD App Registration** (Service Principal)
4. **Power BI Workspace** with published reports

## 🚀 Quick Start

### 1. Clone and Install

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 2. Set Up Azure AD App Registration

1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to **Azure Active Directory** → **App registrations**
3. Click **New registration**
4. Name it (e.g., "Power BI Embedding App")
5. Select **Accounts in this organizational directory only**
6. Click **Register**
7. Note the **Application (client) ID** and **Directory (tenant) ID**
8. Go to **Certificates & secrets** → **New client secret**
9. Create a secret and **copy the value immediately** (you won't see it again)

### 3. Grant Power BI Permissions

1. In your App Registration, go to **API permissions**
2. Click **Add a permission** → **Power BI Service**
3. Select **Application permissions**
4. Check **Report.Read.All** and **Workspace.Read.All**
5. Click **Add permissions**
6. Click **Grant admin consent** (requires admin rights)

### 4. Add Service Principal to Power BI Workspace

1. Go to [Power BI Service](https://app.powerbi.com)
2. Navigate to your workspace
3. Click **...** (More options) → **Workspace access**
4. Add your Service Principal (use the Application ID from Azure)
5. Grant **Member** or **Admin** role

### 5. Configure Backend

1. Copy `.env.example` to `.env` in the `backend` folder:
   ```bash
   cd backend
   cp .env.example .env
   ```

2. Edit `.env` with your credentials:
   ```env
   POWER_BI_CLIENT_ID=your-client-id-here
   POWER_BI_CLIENT_SECRET=your-client-secret-here
   POWER_BI_TENANT_ID=your-tenant-id-here
   PORT=3001
   ```

### 6. Get Your Report and Workspace IDs

**Workspace ID:**
1. Go to Power BI Service
2. Select your workspace
3. Click **...** (More options) → **Workspace settings**
4. Find **Workspace ID** (GUID)

**Report ID:**
1. Open your report in Power BI Service
2. Look at the URL: `https://app.powerbi.com/groups/[WORKSPACE-ID]/reports/[REPORT-ID]/...`
3. Copy the **Report ID** (GUID)

### 7. Start the Application

**One Command (Recommended):**
```bash
# From the root directory
npm start
```

This starts both backend and frontend servers automatically!

**Or use the start script:**
```bash
# Mac/Linux
./start.sh

# Windows
start.bat
```

**Alternative - Manual Start:**
If you prefer separate terminals:
```bash
# Terminal 1 - Backend
npm run backend

# Terminal 2 - Frontend
npm run frontend
```

### 8. Access the Application

Open your browser and navigate to:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001

## 📱 Using the Application

### Home Page
- Overview of the application
- Quick links to dashboard and reports

### Dashboard Page
1. Enter your **Workspace ID** and **Report ID**
2. Click **Load Report**
3. The Power BI report will be embedded and displayed

### Reports Page
1. Enter your **Workspace ID**
2. Click **Load Reports** to see all available reports
3. Click on any report card to view it

## 🔧 Development

### Project Structure

```
Power-BI/
├── backend/
│   ├── server.js          # Express server with Power BI API
│   ├── package.json
│   └── .env              # Power BI credentials (not in git)
├── frontend/
│   ├── src/
│   │   ├── components/   # React components
│   │   │   ├── Navbar.jsx
│   │   │   └── PowerBIEmbed.jsx
│   │   ├── pages/        # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Reports.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
└── data/                 # Healthcare CSV data files
```

### Backend API Endpoints

- `GET /api/health` - Health check
- `GET /api/workspaces` - List all workspaces
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

## 🐛 Troubleshooting

### "Failed to generate embed token"
- Verify your Service Principal has access to the workspace
- Check that API permissions are granted and consented
- Ensure the Workspace ID and Report ID are correct

### "Failed to fetch reports"
- Make sure the backend server is running on port 3001
- Check your `.env` file has correct credentials
- Verify network connectivity

### CORS Errors
- The backend is configured to allow requests from `localhost:3000`
- If using a different port, update CORS settings in `server.js`

### Power BI Report Not Loading
- Check browser console for errors
- Verify the Power BI JavaScript SDK is loaded (check Network tab)
- Ensure the embed token is valid (check expiry time)

## 🔒 Security Notes

- **Never commit** your `.env` file to version control
- Keep your client secret secure
- Use environment variables for all sensitive data
- Consider using Azure Key Vault for production deployments
- Implement proper authentication for production use

## 📚 Additional Resources

- [Power BI REST API Documentation](https://learn.microsoft.com/en-us/rest/api/power-bi/)
- [Power BI JavaScript SDK](https://github.com/microsoft/PowerBI-JavaScript)
- [MSAL Node Documentation](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-node)
- [Power BI Embedding Guide](https://learn.microsoft.com/en-us/power-bi/developer/embedded/embed-sample-for-customers)

## 🎯 Next Steps

1. **Add Authentication**: Implement user authentication (e.g., Azure AD B2C)
2. **Row-Level Security**: Configure RLS for multi-tenant scenarios
3. **Custom Visuals**: Add custom Power BI visuals
4. **Real-time Data**: Connect to live data sources
5. **Deploy**: Deploy to Azure App Service or similar platform

## 📄 License

MIT License - feel free to use this project for your own purposes.

---

**Happy Dashboard Building! 📊**
