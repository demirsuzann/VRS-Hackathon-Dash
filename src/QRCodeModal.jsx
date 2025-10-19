import React, { useState } from 'react';

const QRCodeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dashboardUrl = import.meta.env.VITE_DASHBOARD_URL || window.location.origin;

  console.log('QRCodeModal rendered, dashboardUrl:', dashboardUrl);

  // Generate QR code URL using free API
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${encodeURIComponent(dashboardUrl)}`;

  const downloadQR = () => {
    const link = document.createElement('a');
    link.href = qrCodeUrl;
    link.download = 'dino-keeper-dashboard-qr.png';
    link.click();
  };

  return (
    <>
      {/* QR Code Button - Always Visible */}
      <div style={{
        position: 'fixed',
        bottom: '32px',
        right: '32px',
        zIndex: 9999
      }}>
        <button
          onClick={() => {
            console.log('QR button clicked, opening modal');
            setIsOpen(true);
          }}
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: '#c084fc',
            color: 'white',
            fontSize: '18px',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
            animation: 'pulse 2s infinite'
          }}
          title="Share QR Code"
        >
          QR
        </button>
      </div>

      {/* Modal Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Content */}
          <div
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-2xl border border-purple-500/30 p-8 max-w-md w-full transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-2">Share Dashboard</h2>
              <p className="text-slate-400 text-sm mb-6">Scan with your phone to access the dashboard</p>

              {/* QR Code */}
              <div className="bg-white p-4 rounded-2xl mb-6 flex justify-center">
                <img 
                  src={qrCodeUrl}
                  alt="QR Code"
                  style={{ width: '256px', height: '256px' }}
                  onError={() => console.error('QR code image failed to load')}
                />
              </div>

              {/* Dashboard URL */}
              <div className="bg-slate-700/50 rounded-xl p-4 mb-6 border border-slate-600">
                <p className="text-xs text-slate-400 mb-2">Dashboard URL:</p>
                <p className="text-sm text-blue-300 break-all font-mono">{dashboardUrl}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={downloadQR}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  Download QR
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 bg-gradient-to-r from-slate-600 to-slate-700 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QRCodeModal;
