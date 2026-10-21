import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import QRCode from 'qrcode';
import { X, Download, Share2, Sparkles, Check } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface LoveQRModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  recipientName: string;
}

export const LoveQRModal: React.FC<LoveQRModalProps> = ({
  isOpen,
  onClose,
  url,
  recipientName
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [copied, setCopied] = useState(false);
  const [qrColor, setQrColor] = useState<'rose' | 'magenta' | 'purple'>('rose');

  const colorPalettes = {
    rose: { dark: '#e11d48', light: '#ffffff', name: 'Rose Pink 🌸' },
    magenta: { dark: '#db2777', light: '#ffffff', name: 'Hot Pink 💖' },
    purple: { dark: '#9333ea', light: '#ffffff', name: 'Lavender 💜' }
  };

  useEffect(() => {
    if (!isOpen || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const selectedColor = colorPalettes[qrColor];

    QRCode.toCanvas(
      canvas,
      url,
      {
        width: 240,
        margin: 2,
        errorCorrectionLevel: 'H', // High error correction so center heart doesn't affect scanning
        color: {
          dark: selectedColor.dark,
          light: selectedColor.light
        }
      },
      (error) => {
        if (error) {
          console.error('Error generating QR Code', error);
          return;
        }

        // Draw a cute heart icon in the center of canvas
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const center = canvas.width / 2;
          const size = 46;

          // White circular background behind heart
          ctx.beginPath();
          ctx.arc(center, center, size / 2 + 5, 0, 2 * Math.PI);
          ctx.fillStyle = '#ffffff';
          ctx.fill();
          ctx.lineWidth = 3;
          ctx.strokeStyle = selectedColor.dark;
          ctx.stroke();

          // Draw Heart Emoji or Shape in center
          ctx.font = '24px "Apple Color Emoji", "Segoe UI Emoji", sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('💖', center, center + 2);
        }
      }
    );
  }, [isOpen, url, qrColor]);

  if (!isOpen) return null;

  const handleDownloadQR = () => {
    soundManager.playChime();
    if (!canvasRef.current) return;

    // Create a composite high-res printable card
    const sourceCanvas = canvasRef.current;
    const exportCanvas = document.createElement('canvas');
    exportCanvas.width = 400;
    exportCanvas.height = 540;
    const ctx = exportCanvas.getContext('2d');
    if (!ctx) return;

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 400, 540);
    gradient.addColorStop(0, '#ffe4e6'); // rose-100
    gradient.addColorStop(0.5, '#fce7f3'); // pink-100
    gradient.addColorStop(1, '#fef3c7'); // amber-100
    ctx.fillStyle = gradient;
    ctx.roundRect(0, 0, 400, 540, 28);
    ctx.fill();

    // White card in center
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = 'rgba(225, 29, 72, 0.2)';
    ctx.shadowBlur = 20;
    ctx.shadowOffsetY = 8;
    ctx.roundRect(24, 24, 352, 492, 20);
    ctx.fill();
    ctx.shadowColor = 'transparent'; // Reset shadow

    // Header Title
    ctx.fillStyle = colorPalettes[qrColor].dark;
    ctx.font = 'bold 22px "Playfair Display", Georgia, serif';
    ctx.textAlign = 'center';
    ctx.fillText('Kado Spesial Untukmu 🎁', 200, 75);

    // Subtitle
    ctx.fillStyle = '#64748b';
    ctx.font = '14px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(`Khusus untuk ${recipientName || 'Sayang'}`, 200, 105);

    // Draw QR in center
    ctx.drawImage(sourceCanvas, 80, 135, 240, 240);

    // Bottom Instructions
    ctx.fillStyle = '#e11d48';
    ctx.font = 'bold 15px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Scan Barcode Ini Lewat Kamera HP 📸', 200, 420);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Buka kamera atau aplikasi QR scanner untuk melihat kado', 200, 445);

    // Bottom Love signature
    ctx.fillStyle = '#f43f5e';
    ctx.font = 'italic 16px "Caveat", cursive';
    ctx.fillText('Dibuat dengan segenap cinta & rasa 💖', 200, 485);

    // Trigger download
    const link = document.createElement('a');
    link.download = `QR-Love-${recipientName || 'Kado'}.png`;
    link.href = exportCanvas.toDataURL('image/png');
    link.click();
  };

  const handleCopyLink = () => {
    soundManager.playChime();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    } else {
      window.prompt('Salin link kado:', url);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl relative border border-rose-100 flex flex-col items-center text-center"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-600 border border-rose-200 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>QR Code Hadiah Pink Love</span>
          </div>

          <h3 className="text-xl font-extrabold text-slate-800 font-serif-title mb-1">
            Barcode Kado Cinta 💖
          </h3>
          <p className="text-xs text-slate-500 mb-4">
            Bisa di-print pada kartu ucapan, kotak kado fisik, atau dikirim langsung ke pasangan!
          </p>

          {/* Color Palette Switcher */}
          <div className="flex gap-2 mb-4">
            {(['rose', 'magenta', 'purple'] as const).map((color) => (
              <button
                key={color}
                onClick={() => {
                  soundManager.playClick();
                  setQrColor(color);
                }}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition ${
                  qrColor === color
                    ? 'bg-rose-500 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {colorPalettes[color].name}
              </button>
            ))}
          </div>

          {/* PRINTABLE CARD PREVIEW */}
          <div
            ref={cardRef}
            className="p-4 rounded-2xl bg-gradient-to-tr from-rose-100/60 via-pink-50/80 to-amber-50/60 border-2 border-rose-200/70 shadow-lg relative flex flex-col items-center mb-5"
          >
            {/* Top mini ribbon */}
            <div className="absolute -top-3 w-10 h-6 bg-rose-500 rounded-sm shadow-xs flex items-center justify-center text-[10px] text-white font-bold">
              🎀
            </div>

            {/* QR Canvas */}
            <div className="p-3 bg-white rounded-xl shadow-md border border-rose-100 relative">
              <canvas ref={canvasRef} className="rounded-lg" />
            </div>

            <p className="font-handwriting text-base font-bold text-rose-600 mt-2.5">
              Spesial untuk {recipientName || 'Kamu'} 💖
            </p>
            <p className="text-[10px] text-slate-500">
              Arahkan kamera HP ke barcode untuk membuka kado
            </p>
          </div>

          {/* Action Buttons */}
          <div className="w-full flex flex-col gap-2.5">
            <button
              onClick={handleDownloadQR}
              className="w-full py-3 px-4 rounded-full font-bold text-sm flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-md shadow-rose-500/25 transition active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download Kartu QR (PNG)</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="w-full py-2.5 px-4 rounded-full font-semibold text-xs flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
              <span>{copied ? 'Link Berhasil Disalin!' : 'Salin Link Website Kado'}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
