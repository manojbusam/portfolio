#!/bin/bash

# Power BI Healthcare Dashboard - Start Script
# This script starts both backend and frontend servers

echo "🚀 Starting Power BI Healthcare Dashboard..."
echo ""

# Check if dependencies need to be installed
if [ ! -d "node_modules" ] || [ ! -d "backend/node_modules" ] || [ ! -d "frontend/node_modules" ]; then
    echo "📦 Installing all dependencies..."
    npm run install:all
    if [ ! -d "node_modules" ]; then
        echo "📦 Installing root dependencies..."
        npm install
    fi
fi

echo ""
echo "✅ Starting servers..."
echo "   Backend:  http://localhost:3001"
echo "   Frontend: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop both servers"
echo ""

# Start both servers
npm start
