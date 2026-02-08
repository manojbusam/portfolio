@echo off
REM Power BI Healthcare Dashboard - Start Script (Windows)
REM This script starts both backend and frontend servers

echo 🚀 Starting Power BI Healthcare Dashboard...
echo.

REM Check if dependencies need to be installed
if not exist "node_modules" (
    echo 📦 Installing root dependencies...
    call npm install
)

if not exist "backend\node_modules" (
    echo 📦 Installing all dependencies...
    call npm run install:all
)

echo.
echo ✅ Starting servers...
echo    Backend:  http://localhost:3001
echo    Frontend: http://localhost:3000
echo.
echo Press Ctrl+C to stop both servers
echo.

REM Start both servers
call npm start
