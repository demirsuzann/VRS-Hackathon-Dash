# ngrok Setup for Dino Keeper Dashboard

This guide helps you expose your local dashboard to the internet using ngrok so the QR code works globally!

## Step 1: Install ngrok

```powershell
# Install ngrok globally
npm install -g ngrok

# Or if you prefer, download from: https://ngrok.com/download
```

## Step 2: Start Your Dashboard

In one PowerShell terminal:

```powershell
cd "c:\Users\demir\Projects\VRS Hackathon"
npm run dev
```

You should see: `http://localhost:5173`

## Step 3: Expose with ngrok

In a **NEW PowerShell terminal** (keep the first one running):

```powershell
ngrok http 5173
```

You'll see output like:
```
Session Status                online
Account                       [your account]
Version                        3.x.x
Region                         us (United States)
Forwarding                     https://abc123-45-def.ngrok.io -> http://localhost:5173
```

## Step 4: Use the ngrok URL

Copy the `https://...ngrok.io` URL. This is your public dashboard URL!

### Option A: Manually Update the Code
Edit `src/QRCodeModal.jsx` and replace:
```javascript
const dashboardUrl = window.location.origin;
```

With:
```javascript
const dashboardUrl = 'https://your-ngrok-url.ngrok.io';
```

Then restart: `npm run dev`

### Option B: Use Environment Variable (Cleaner)

1. Create a `.env` file in the project root:
```
VITE_DASHBOARD_URL=https://your-ngrok-url.ngrok.io
```

2. Update `src/QRCodeModal.jsx`:
```javascript
const dashboardUrl = import.meta.env.VITE_DASHBOARD_URL || window.location.origin;
```

## Step 5: Share the QR Code!

1. Open your dashboard: `https://your-ngrok-url.ngrok.io`
2. Click the 📱 button in the bottom-right
3. Show the QR code to people
4. They can scan it with any phone camera instantly! 📸

## Important Notes

⏰ **ngrok URL expires** - By default, ngrok gives you a temporary URL that lasts a few hours. If you need it longer:
- Upgrade to ngrok Pro: https://ngrok.com/pricing
- Or restart ngrok for a new URL each time

🔐 **Security** - ngrok is secure but not password-protected by default. For a hackathon, this is fine!

## Troubleshooting

If the QR code doesn't work:
1. Make sure both terminals are running (dev server + ngrok)
2. Make sure you copied the correct ngrok URL
3. Check that the URL in QRCodeModal.jsx matches your ngrok URL
4. Restart `npm run dev` after making changes

Happy sharing! 🎉
