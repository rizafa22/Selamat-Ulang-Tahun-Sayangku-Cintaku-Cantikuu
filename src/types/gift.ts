export type ThemeType = 'rose' | 'lavender' | 'sunset' | 'midnight';

export interface PhotoItem {
  id: string;
  url: string;
  caption: string;
  date?: string;
  rotation?: number;
}

export interface GiftConfig {
  recipientName: string;
  senderName: string;
  welcomeGreeting: string;
  welcomeSubtitle: string;
  boxMessage: string;
  letterTitle: string;
  letterContent: string;
  letterClosing: string;
  photos: PhotoItem[];
  cakeTitle: string;
  cakeMessage: string;
  closingTitle: string;
  closingMessage: string;
  theme: ThemeType;
  musicTrack: string;
  customMusicUrl?: string;
  musicTitle?: string;
  enableSoundEffects: boolean;
  anniversaryDate?: string;
}

export const DEFAULT_GIFT_CONFIG: GiftConfig = {
  recipientName: "Sayangku Cintaku Cantikku",
  senderName: "Dari orang yang selalu mencintaimu",
  welcomeGreeting: "Selamat Ulang Tahun Sayangku, Cintaku, Cantikku! 🎂💖",
  welcomeSubtitle: "Hari ini adalah hari paling istimewa karena orang terindah di dunia ini dilahirkan. Ada kado kecil yang kubuat khusus dari lubuk hatiku yang terdalam...",
  boxMessage: "Kotak ini menyimpan seikat rasa, sejuta doa, dan rasa sayangku yang tak terhingga untukmu. Ketuk untuk membukanya!",
  letterTitle: "Surat Cinta di Hari Ulang Tahunmu 💌",
  letterContent: `Selamat bertambah usia, bidadari duniaku yang paling manis. 🌸

Terima kasih sudah lahir ke dunia ini dan menjadi bagian paling indah dalam hidupku. Senyummu, tawamu, bahkan hal-hal kecil tentangmu selalu berhasil membuat hariku terasa jauh lebih hangat dan bermakna.

Di usiamu yang baru ini, aku berdoa setulus hatiku agar kamu selalu dilimpahi kebahagiaan, dimudahkan segala langkah dan impianmu, serta selalu diberikan kesehatan dan ketenangan hati.

Jangan pernah merasa sendiri, ya? Karena ada aku yang akan selalu ada untuk memeluk, mendukung, dan mencintaimu hari ini, esok, dan selamanya. ✨💖`,
  letterClosing: "Dari orang yang paling beruntung memilikimu,",
  photos: [
    {
      id: "photo-1",
      url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80",
      caption: "Hari pertama kita tertawa lepas bareng ☕",
      date: "Momen Tak Terlupakan",
      rotation: -2
    },
    {
      id: "photo-2",
      url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80",
      caption: "Senyuman manismu yang selalu bikin tenang ✨",
      date: "Sunset Terindah",
      rotation: 3
    },
    {
      id: "photo-3",
      url: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80",
      caption: "Jalan santai di sore yang penuh cerita 🌷",
      date: "Kenangan Manis",
      rotation: -1
    },
    {
      id: "photo-4",
      url: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=800&q=80",
      caption: "Selalu bersyukur memiliki kamu di sampingku 💫",
      date: "Untuk Selamanya",
      rotation: 2
    }
  ],
  cakeTitle: "Tiup Lilin & Buat Harapanmu 🎂🕯️",
  cakeMessage: "Tutup matamu sejenak, bisikkan doa dan impian terbesarmu dalam hati, lalu tiup lilin ini dengan penuh keyakinan bahwa semesta sedang mengaminkan semua harapan manismu.",
  closingTitle: "I Love You More Than Words Can Say 💖",
  closingMessage: "Happy Birthday my love! Semoga kado virtual kecil ini bisa mengukir senyuman manis di wajahmu. Apapun yang terjadi, ingatlah kamu selalu punya rumah dan tempat pulang di hatiku.",
  theme: 'rose',
  musicTrack: 'romantic-piano',
  musicTitle: 'Melodi Piano Romantis',
  enableSoundEffects: true,
  anniversaryDate: "2024-02-14"
};
