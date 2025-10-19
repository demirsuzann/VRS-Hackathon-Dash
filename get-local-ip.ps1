# Get Local IP Address for Dino Keeper Dashboard
# This script finds your local IP so you can access the dashboard from other devices on your network

$ipv4 = (Get-NetIPAddress -AddressFamily IPv4 | Where-Object { $_.IPAddress -like "192.168.*" -or $_.IPAddress -like "10.*" } | Select-Object -First 1).IPAddress

if ($ipv4) {
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "🦕 Dino Keeper Dashboard - Local IP" -ForegroundColor Cyan
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Your Local IP: $ipv4" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Access the dashboard at:" -ForegroundColor White
    Write-Host "http://$ipv4`:5173" -ForegroundColor Blue
    Write-Host ""
    Write-Host "Share this URL with others on your network!" -ForegroundColor Green
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
} else {
    Write-Host "Could not find local IP address." -ForegroundColor Red
    Write-Host "Make sure you're connected to a network." -ForegroundColor Yellow
}
