# Quick start script for Dino Keeper Dashboard with ngrok (PowerShell)

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "Dino Keeper Dashboard - ngrok Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

# Check if ngrok is installed
$ngrokCheck = Get-Command ngrok -ErrorAction SilentlyContinue
if (-not $ngrokCheck) {
    Write-Host "ngrok not found. Installing globally..." -ForegroundColor Yellow
    npm install -g ngrok
    Write-Host "ngrok installed!" -ForegroundColor Green
    Write-Host ""
}

Write-Host "INSTRUCTIONS:" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. In THIS terminal, run:" -ForegroundColor White
Write-Host "   ngrok http 5175" -ForegroundColor Yellow
Write-Host ""
Write-Host "2. You'll see a URL like: https://abc123-def456.ngrok.io" -ForegroundColor White
Write-Host ""
Write-Host "3. Copy that URL and create a .env file:" -ForegroundColor White
Write-Host "   VITE_DASHBOARD_URL=https://your-ngrok-url.ngrok.io" -ForegroundColor Yellow
Write-Host ""
Write-Host "4. Restart the dev server (npm run dev)" -ForegroundColor White
Write-Host ""
Write-Host "5. Open the ngrok URL in your browser" -ForegroundColor White
Write-Host ""
Write-Host "6. Click the phone button to see the QR code!" -ForegroundColor White
Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

Write-Host "Starting ngrok on port 5175..." -ForegroundColor Green
Write-Host ""

ngrok http 5175
