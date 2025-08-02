@echo off
echo ========================================
echo    InternConnect - Quick Start
echo ========================================
echo.

echo Starting MongoDB (if installed locally)...
echo If you see "MongoDB connection error", you need to:
echo 1. Install MongoDB locally, OR
echo 2. Use MongoDB Atlas (cloud)
echo.

echo Starting Backend Server...
cd backend
echo Installing dependencies...
npm install
echo.
echo Starting server on port 5000...
echo.
npm start 