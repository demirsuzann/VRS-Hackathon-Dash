# Dino Keeper Dashboard (Local)

This is a minimal Vite + React scaffold to run the `DinoKeeperDashboard` UI found in `interface.js`.

## Prerequisites
- Node.js (16+ recommended)

## Install and run (PowerShell on Windows):

```powershell
npm install
npm run dev
```

Open the URL shown by Vite (likely http://localhost:5173) in your browser.

## Accessing via QR Code (3 Options)

### Option 1: Use Local Network IP (Easiest for Same Network)
If people are on the **same WiFi/network** as your computer:

```powershell
# Find your local IP address
ipconfig

# Look for "IPv4 Address" under your active connection (usually 192.168.x.x)
# Then access: http://192.168.x.x:5173
```

The QR code will work for anyone on your network!

### Option 2: Use ngrok (Best for Testing)
To expose localhost to the internet temporarily:

```powershell
# Install ngrok globally (if not already installed)
npm install -g ngrok

# In a new PowerShell terminal, run:
ngrok http 5173

# ngrok will give you a public URL like: https://abc123-45-def.ngrok.io
# The QR code will work worldwide for this URL!
```

### Option 3: Deploy to the Internet (Production)
For permanent, production-ready hosting:
- Deploy to **Vercel**, **Netlify**, **GitHub Pages**, or **AWS**
- Replace the `window.location.origin` in `src/QRCodeModal.jsx` with your production domain
- QR code will work globally

## Environment Setup for Deployment

If using ngrok or deploying, update the QR code URL in `src/QRCodeModal.jsx`:

```javascript
// Replace this line:
const dashboardUrl = window.location.origin;

// With your public URL:
const dashboardUrl = 'https://your-domain.com';
```

## Notes
- The component uses `recharts` for charts and `qr-code-styling` for QR generation
- Styles approximate Tailwind utility classes via `src/styles.css`
- For a full Tailwind setup, install and configure Tailwind CSS

## Quick Share Setup

1. Run `npm run dev`
2. Get your local IP with `ipconfig`
3. Share `http://YOUR_LOCAL_IP:5173` with people on your network
4. Click the 📱 button to show QR code
5. They can scan it instantly!

