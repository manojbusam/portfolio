import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';
import { ConfidentialClientApplication } from '@azure/msal-node';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Serve CSV data files
app.use('/data', express.static(path.join(__dirname, '../data')));

// MSAL configuration for Power BI
let pca = null;

function initializeMSAL() {
  if (!process.env.POWER_BI_CLIENT_ID || !process.env.POWER_BI_CLIENT_SECRET) {
    return null;
  }

  const msalConfig = {
    auth: {
      clientId: process.env.POWER_BI_CLIENT_ID,
      authority: `https://login.microsoftonline.com/${process.env.POWER_BI_TENANT_ID || 'common'}`,
      clientSecret: process.env.POWER_BI_CLIENT_SECRET,
    },
  };

  return new ConfidentialClientApplication(msalConfig);
}

// Get access token for Power BI
async function getAccessToken() {
  try {
    if (!pca) {
      pca = initializeMSAL();
      if (!pca) {
        throw new Error('MSAL not initialized. Check your .env file for Power BI credentials.');
      }
    }

    const tokenRequest = {
      scopes: ['https://analysis.windows.net/powerbi/api/.default'],
    };

    const response = await pca.acquireTokenByClientCredential(tokenRequest);
    return response.accessToken;
  } catch (error) {
    console.error('Error acquiring token:', error);
    throw error;
  }
}

// Get embed token for a report
app.post('/api/embed-token', async (req, res) => {
  try {
    const { reportId, workspaceId } = req.body;

    if (!reportId || !workspaceId) {
      return res.status(400).json({ 
        error: 'Report ID and Workspace ID are required' 
      });
    }

    // Check if credentials are configured
    if (!process.env.POWER_BI_CLIENT_ID || !process.env.POWER_BI_CLIENT_SECRET) {
      return res.status(500).json({ 
        error: 'Power BI credentials not configured. Please set up your .env file.',
        hint: 'See README_FULLSTACK.md for setup instructions'
      });
    }

    const accessToken = await getAccessToken();

    // Get embed token from Power BI REST API
    const embedTokenResponse = await axios.post(
      `https://api.powerbi.com/v1.0/myorg/groups/${workspaceId}/reports/${reportId}/GenerateToken`,
      {
        accessLevel: 'View',
        allowSaveAs: false,
      },
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    res.json({
      embedToken: embedTokenResponse.data.token,
      embedUrl: embedTokenResponse.data.tokenId,
      expiry: embedTokenResponse.data.expiration,
    });
  } catch (error) {
    console.error('Error generating embed token:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to generate embed token',
      details: error.response?.data || error.message 
    });
  }
});

// Get list of reports
app.get('/api/reports', async (req, res) => {
  try {
    const { workspaceId } = req.query;

    if (!workspaceId) {
      return res.status(400).json({ 
        error: 'Workspace ID is required' 
      });
    }

    const accessToken = await getAccessToken();

    const reportsResponse = await axios.get(
      `https://api.powerbi.com/v1.0/myorg/groups/${workspaceId}/reports`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    );

    res.json(reportsResponse.data.value);
  } catch (error) {
    console.error('Error fetching reports:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to fetch reports',
      details: error.response?.data || error.message 
    });
  }
});

// Get list of workspaces
app.get('/api/workspaces', async (req, res) => {
  try {
    const accessToken = await getAccessToken();

    const workspacesResponse = await axios.get(
      'https://api.powerbi.com/v1.0/myorg/groups',
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    );

    res.json(workspacesResponse.data.value);
  } catch (error) {
    console.error('Error fetching workspaces:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to fetch workspaces',
      details: error.response?.data || error.message 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Power BI Backend API is running' });
});

// Demo mode - return mock data for testing without Power BI credentials
app.get('/api/demo/reports', (req, res) => {
  res.json([
    {
      id: 'demo-report-1',
      name: 'Healthcare Dashboard',
      webUrl: 'https://app.powerbi.com/view?r=...',
      embedUrl: 'https://app.powerbi.com/view?r=...',
      description: 'Healthcare analytics dashboard with patient data',
    },
  ]);
});

app.post('/api/demo/embed-token', (req, res) => {
  res.json({
    embedToken: 'demo-token',
    embedUrl: 'https://app.powerbi.com/view?r=...',
    expiry: new Date(Date.now() + 3600000).toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Power BI Backend API running on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
  console.log(`\n⚠️  Make sure to set up your .env file with Power BI credentials`);
  console.log(`   Or use demo mode for testing without credentials\n`);
});
