@echo off
REM Quick start script for Dino Keeper Dashboard with ngrok

echo.
echo ========================================
echo 🦕 Dino Keeper Dashboard - ngrok Setup
echo ========================================
echo.

REM Check if ngrok is installed
where ngrok >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ ngrok not found. Installing...
    call npm install -g ngrok
    echo ✅ ngrok installed!
    echo.
)

REM Start the dev server in background
echo 📦 Starting Vite dev server...
start cmd /k "cd /d %cd% && npm run dev"
echo ✅ Dev server started in new window

echo.
echo Waiting 3 seconds for dev server to start...
timeout /t 3

REM Start ngrok
echo.
echo 🚀 Starting ngrok on port 5175...
echo.
echo 📱 ngrok will provide a public URL like: https://xxx-xxx-xxx.ngrok.io
echo 📝 Copy that URL and create a .env file with: VITE_DASHBOARD_URL=https://your-url.ngrok.io
echo 🔄 Then restart npm run dev
echo.

ngrok http 5175

pause
