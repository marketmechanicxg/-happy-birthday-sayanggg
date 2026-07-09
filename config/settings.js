/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           OCEAN BIRTHDAY — SEMUA PENGATURAN DI SINI         ║
 * ║  Kamu HANYA perlu edit file ini. Tidak perlu buka file lain. ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 *  Cara pakai:
 *  1. Baca setiap bagian (1–7)
 *  2. Ganti nilai yang ada tanda  ← GANTI INI
 *  3. Simpan file → refresh browser
 */

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   1. PIN MASUK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PIN 4–6 angka yang harus diketik tamu untuk membuka website.  */
const WEBSITE_PIN = "170703";              // ← GANTI PIN

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   2. NAMA PENERIMA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nama yang muncul di halaman utama (hero).                      */
const RECIPIENT_NAME = "Joe Rehan Dinata";           // ← GANTI NAMA


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3. MUSIK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FILE MUSIK  → taruh di:  assets/music/song1.mp3
   FOTO COVER  → taruh di:  assets/music/song1.jpeg  (rasio 3:4)
   Lalu ganti judul dan nama artis di bawah ini.                  */
const MUSIC_TRACKS = [
  {
    title:  "About You",             // ← GANTI JUDUL LAGU
    artist: "THE1975",                   // ← GANTI NAMA ARTIS
    src:    "assets/music/song1.mp3",    //   (nama file mp3 — jangan diubah kecuali nama filenya beda)
    cover:  "assets/music/song1.jpeg",   //   (nama file cover — jangan diubah kecuali nama filenya beda)
    startTime: 0,                           // ← MULAI DARI DETIK KE BERAPA
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   4. FOTO GALERI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Taruh foto di:  assets/images/
   Nama file harus:  img1.jpeg  img2.jpeg  … img8.jpeg
   Ganti caption (keterangan foto) di setiap baris.               */
const GALLERY_PHOTOS = [
  { file: "img1.jpeg", caption: "One smile from you can fix my whole day." },  // ← GANTI CAPTION
  { file: "img2.jpeg", caption: "You're the reason my heart feels so full." },
  { file: "img3.jpeg", caption: "Every second with you is my favorite." },
  { file: "img4.jpeg", caption: "Some people search for happiness, I found mine in you." },
  { file: "img5.jpeg", caption: "You turned my ordinary life into something beautiful." },
  { file: "img6.jpeg", caption: "My heart feels safest when it's with you." },
  { file: "img7.jpeg", caption: "If I could relive a moment, I'd choose us every time." },
  { file: "img8.jpeg", caption: "Still my favorite person, always. " },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   5. ISI SURAT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Setiap string adalah satu paragraf.
   Bisa ditambah atau dikurangi paragrafnya.                       */
const LETTER_PARAGRAPHS = [
  "Selamat ulang tahun untuk orang favoritku. 🤍 Hari ini adalah hari spesial untuk seseorang yang selalu berhasil membuat hari-hariku terasa lebih baik dan hatiku merasa aman. Memiliki km di hidupku adalah salah satu anugerah terbesar yang pernah aku dapatkan. Hari ini aku cuma ingin merayakan sosok luar biasa yang selalu berhasil membawa kebahagiaan ke dalam hidupku. Happy birthday, my favorite person.",
  "Terima kasih karena sudah bertahan di setiap versi diriku. Terima kasih karena selalu berusaha memahami aku, bahkan di hari-hari saat aku sendiri sulit memahami diriku. Terima kasih karena selalu sabar, selalu memberi rasa nyaman, dan selalu hadir di saat aku paling membutuhkan seseorang. Kehadiranmu membawa begitu banyak ketenangan dan kebahagiaan dalam hidupku, dan aku tidak akan pernah berhenti bersyukur untuk itu. Thank you for always choosing to stay.",
  "Di umurmu yang baru ini, aku berharap semua mimpi yang sedang km perjuangkan perlahan menjadi kenyataan. Semoga setiap doa yang km panjatkan dikabulkan, setiap langkahmu selalu mengarah pada hal-hal baik, dan semoga hidupmu dipenuhi kebahagiaan, cinta, serta kesuksesan. Yang paling penting, jangan pernah lupa kalau km sangat dicintai. Bukan hanya hari ini, tetapi setiap hari. You deserve nothing but the best.",
  "Terima kasih karena sudah menjadi dirimu sendiri, terima kasih karena sudah mencintaiku, dan terima kasih karena sudah mengizinkan aku mencintaimu. Selamat ulang tahun, sayangku. Semoga tahun ini menjadi salah satu bab terbaik dalam hidupmu dan dipenuhi begitu banyak alasan untuk tersenyum. Aku mencintaimu lebih dari yang bisa dijelaskan oleh kata-kata. I love you more than words could ever explain. 🤍",
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   6. KENANGAN (TIMELINE)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   depth  = kedalaman yang ditampilkan (label saja)
   year   = judul bab
   title  = judul kenangan
   text   = isi cerita                                             */
const MEMORIES = [
  {
    depth: "2m",
    year:  "Chapter One",
    title: "Where It All Started",
    text:  "That moment when everything just clicked and suddenly made sense.",
  },
  {
    depth: "8m",
    year:  "Chapter Two",
    title: "The Quiet Days",
    text:  "Just you, me, and those simple moments that ended up meaning everything.",
  },
  {
    depth: "16m",
    year:  "Chapter Three",
    title: "Through the Storms",
    text:  "We've had our rough days, but honestly, we always found our way back.",
  },
  {
    depth: "24m",
    year:  "Chapter Four",
    title: "Finding the Light",
    text:  "You're literally the brightest part of my journey, even in the deepest waters.",
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   7. UCAPAN ULANG TAHUN
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   icon: wave | shell | star | compass | anchor | heart
   text: isi ucapannya                                            */
const WISHES = [
  { icon: "wave",    text: "May this year bring you the calmness of the ocean and the depth of your kindness." },
  { icon: "shell",   text: "Hope your days are as bright as the sun on the water, and your nights as peaceful as the receding tide." },
  { icon: "star",    text: "May every little wish of yours arrive right when you need it the most." },
  { icon: "compass", text: "Wherever this year takes you, I hope you always find your way back to the people who adore you." },
  { icon: "anchor",  text: "Stay grounded, stay grateful, and honestly, just stay as beautiful as you are right now." },
  { icon: "heart",   text: "Happy birthday — cheers to another year of memories totally worth keeping." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   JANGAN EDIT DI BAWAH INI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
(function (window) {
  window.WEBSITE_PIN = String(WEBSITE_PIN);
  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   8. WHATSAPP REPLY BUTTON
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nomor WA untuk membalas pesan setelah lilin ditiup.
   Gunakan format internasional tanpa tanda + (contoh: 62812...) */
const WHATSAPP_NUMBER = "6283875613631";   // ← GANTI NOMOR WA YANG ORDER
const WHATSAPP_MESSAGE = "Hey, I just opened the bottle. Thank you for making my day! ✨"; // ← GANTI PESAN OTOMATIS

window.OCEAN_SETTINGS = {
    recipientName:    String(RECIPIENT_NAME),
    galleryPhotos:    GALLERY_PHOTOS,
    musicTracks:      MUSIC_TRACKS,
    letterParagraphs: LETTER_PARAGRAPHS,
    memories:         MEMORIES,
    wishes:           WISHES,
    whatsappNumber:   WHATSAPP_NUMBER,
    whatsappMessage:  WHATSAPP_MESSAGE
  };
})(window);
