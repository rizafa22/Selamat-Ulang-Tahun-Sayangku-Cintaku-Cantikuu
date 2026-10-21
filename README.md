# 🎁 Kado Virtual Interaktif (Interactive Digital Gift Website)

Website hadiah virtual interaktif, romantis, modern, dan penuh animasi yang viral di TikTok. Dibangun menggunakan **React**, **Vite**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **Canvas Confetti**, dan **Web Audio API**.

---

## ✨ Fitur & Tahapan Interaktif

1. **Halaman 1 — Welcome (Sambutan Manis)**
   - Gradient lembut (Pink pastel, lavender, cream / 4 pilihan tema).
   - Animasi hati kecil melayang (Floating hearts & sparkles).
   - Teks romantis personal dengan nama penerima.
   - Tombol pulsing *"Buka Kejutannya 🎁"*.

2. **Halaman 2 — Kotak Hadiah (Interactive 3D Unboxing)**
   - Kotak kado 3D bertingkat dengan pita emas dan goyangan halus (*wiggle animation*).
   - Ketukan interaktif untuk membuka kotak.
   - Tutup kotak melayang terbuka ke atas dengan efek cahaya dan dentuman confetti ganda.
   - Efek suara magis harp & pop.

3. **Halaman 3 — Pesan Spesial (Surat Cinta & Typewriter Effect)**
   - Amplop vintage dengan stempel pos romantis dan segel lilin (*wax seal*).
   - Efek suara gesekan kertas (*paper rustle*).
   - Animasi mengetik otomatis (*typewriter animation*) berkecepatan dinamis dengan tombol lewati (*skip*).
   - Tanda tangan pengirim dengan font tulisan tangan (*Dancing Script* & *Caveat*).

4. **Halaman 4 — Galeri Kenangan (Polaroid Cards)**
   - Kartu foto bergaya polaroid klasik dengan selotip washi tape dan kemiringan realistis.
   - Fitur zoom/lightbox saat foto diklik.
   - Tombol love heart counter interaktif di tiap foto.
   - Tombol upload foto lokal langsung untuk menambah momen baru.

5. **Halaman 5 — Kejutan Ulang Tahun / Romantis (Tiup Lilin)**
   - Kue tart 2 tingkat dengan topping stroberi dan cream dripping.
   - 3 lilin menyala dengan animasi api berkedip realistis (*realistic flame flicker*).
   - Tombol *"Tiup Lilin Sekarang 🕯️💨"*.
   - Efek suara hembusan angin, asap membubung halus, lilin padam, disusul ledakan kembang api confetti dan sorakan gembira.

6. **Halaman 6 — Penutup & Bagikan (Share & Closing)**
   - Pesan romantis akhir yang menyentuh hati.
   - Tombol *"Kirim Hadiah Lewat WhatsApp"* dengan pesan pra-format.
   - Tombol *"Salin Link Hadiah Pribadi"* (menyimpan konfigurasi kado ke dalam URL Base64 sehingga penerima langsung melihat kado yang sudah dikustomisasi!).
   - Tombol putar ulang (*replay*) dan tombol buka editor.

---

## 🛠️ Fitur Personalisasi & Editor Modal

Akses editor kapan saja melalui tombol **"Kustomisasi Kado"** di pojok kiri atas:
- **👤 Identitas**: Mengubah Nama Penerima, Nama Pengirim, Judul, dan Subtitle.
- **💌 Surat & Pesan**: Mengubah Judul Surat, Isi Surat Cinta, Penutup Surat, dan Pesan Harapan Lilin.
- **📸 Galeri Foto**: Upload banyak foto, edit caption polaroid, atau hapus foto.
- **🎨 Tema & Musik**:
  - Pilihan 4 Tema Eksklusif: *Romantic Pink Pastel (🌸)*, *Lavender Dream (💜)*, *Sunset Peach (🌅)*, *Midnight Starlight (🌌)*.
  - Musik latar piano romantis via Web Audio API (tanpa jeda, hemat kuota, dan bekerja offline).
  - Kontrol suara: Putar/Jeda musik (piringan hitam berputar) & Mute/Unmute.
- **🔗 Share Link Generator**: Link yang dihasilkan otomatis mengkodekan data kado ke URL hash sehingga penerima tidak memerlukan database/backend untuk membukanya.

---

## 🚀 Cara Menjalankan Secara Lokal

1. Pastikan Node.js sudah terinstal.
2. Jalankan server pengembangan:
   ```bash
   npm run dev
   ```
3. Buka browser di [http://localhost:5173](http://localhost:5173).

## 📦 Build untuk Produksi
```bash
npm run build
```
Hasil build berada di folder `dist/` dan siap di-deploy ke Vercel, Netlify, Cloudflare Pages, atau GitHub Pages secara gratis.
