# Audit desain dan UI/UX RoyanNFC

Tanggal: 18 September 2026.

## Revisi 19 September 2026

Temuan dan kontrol jeda dalam tabel di bawah adalah catatan audit sebelumnya. Atas arahan pengguna, caption hero dan kontrol jeda kemudian dihapus. Ilustrasi HTML diganti SVG proporsional bersama pada `src/components/product-artwork.tsx`, sehingga diagram tidak lagi berubah menjadi susunan vertikal di 320 px. Screenshot hero, cara kerja, dan produk pada 390 px telah diperiksa. Lebar 320, 360, 390, 768, 1024, 1366 px tanpa overflow; Cara kerja tepat di 0 px dan komposisi desktop sesuai referensi. Lint/build lolos. Demo otomatis terukur 4.99 detik; reduced motion menonaktifkan animasi. Penanda ilustrasi hero tetap tersedia melalui accessible name SVG tanpa caption visual di bawahnya.

## Cakupan

Review kode, screenshot desktop/mobile, navigasi anchor, keyboard, kondisi konfigurasi kosong, responsivitas, motion, dan kontras palet utama. Tema krem, hijau tua, Nunito Sans, dan mockup berlabel dipertahankan. ENERGY 2 / RHYTHM 3 / MOTION 2.

## Temuan dan perbaikan

| Prioritas | Sebelum | Sesudah | Lokasi |
| --- | --- | --- | --- |
| Tinggi | Tombol Pesan dan WhatsApp kembali ke section yang sama ketika URL kosong | Pemesanan menjadi status informatif; tautan WhatsApp hanya muncul ketika dikonfigurasi | `src/app/page.tsx` |
| Tinggi | Demo berulang tanpa kontrol jeda | Kontrol Jeda/Lanjutkan, menghentikan timer dan animasi aktif; reduced motion tetap didukung | `src/components/tap-scene.tsx` |
| Sedang | CTA fixed menduplikasi CTA hero dan area pembelian | Bar muncul setelah hero keluar layar dan disembunyikan saat area harga terlihat | `src/components/mobile-catalog-bar.tsx` |
| Sedang | Hero mobile terlalu padat sebelum mockup | Skala judul, margin, dan fakta produk diringkas; CTA fixed tidak menutupi hero | `src/app/globals.css` |
| Sedang | Caption dan label diagram terlalu kecil | Caption diperbesar; diagram menjadi vertikal di layar <=360 px | `src/app/globals.css` |
| Sedang | Navbar tidak menunjukkan tujuan yang dipilih | Hash URL disinkronkan dengan underline dan aria-current location | `src/components/section-nav.tsx` |
| Sedang | Reveal berbasis persentase berpotensi sulit terpicu pada elemen sangat tinggi | Reveal dipicu saat bagian awal elemen memasuki area baca | `src/components/reveal.tsx` |
| Rendah | Footer tidak menawarkan navigasi antarsection | Tautan Cara kerja, Produk, Tanya jawab dengan target sentuh 44 px | `src/app/page.tsx` |
| Rendah | Hover gerak dapat tertahan pada perangkat sentuh | Gerakan hover dibatasi pada perangkat berpointer; feedback tekan tetap tersedia | `src/app/globals.css` |
| Rendah | Placeholder harga bersifat teknis | Label Belum diumumkan dan status pemesanan yang dapat dipahami pengunjung | `src/app/page.tsx` |

## Verifikasi

- `npm run lint`: PASS.
- `npm run build`: PASS. Next.js masih memberi warning lockfile `D:\package-lock.json` di luar repository; build selesai.
- Lebar 320, 390, 768, 1024, 1440, 1920 px: tidak ada horizontal overflow.
- Ketiga tautan navbar pada seluruh lebar: batas atas section terukur 0 px, aria-current sesuai hash.
- Skip link via focus + Enter menuju `#konten`.
- Wordmark header/footer menuju `#atas`.
- CTA header, hero, penutup, dan mobile menuju `#produk` pada konfigurasi tanpa katalog.
- Tautan Cara kerja dari hero dan footer menuju `#cara-kerja`.
- Tautan Produk/Tanya jawab pada footer menuju section yang sesuai.
- Empat FAQ dibuka dan ditutup dengan Enter.
- Sticky mobile: tersembunyi pada hero, terlihat di FAQ, tersembunyi pada area harga.
- Jeda menghasilkan animation-play-state paused; Lanjutkan mengaktifkan timer dan pergantian demo berikutnya.
- Reduced motion menghasilkan animation-name none.
- Palet yang diperiksa: teks utama 12.58:1; teks sekunder 5.10:1; caption diagram 4.71:1; CTA 9.40:1; caption produk 6.80:1; aksen pada hijau gelap 9.10:1.

## Batas verifikasi

- Checkout Lynk.id dan percakapan WhatsApp eksternal belum diuji karena URL resmi belum dikonfigurasi.
- Mockup dan QR merupakan ilustrasi, bukan foto atau QR operasional.
- Pemeriksaan keyboard dan kontras bukan sertifikasi aksesibilitas atau pengujian screen reader lengkap.

## Evaluasi hasil

| Aspek | Skor | Bukti / batasan |
| --- | --- | --- |
| Akurasi | 4/5 | Lint, build, interaksi browser lulus; alur eksternal belum dikonfigurasi |
| Kelengkapan | 4/5 | Desktop/mobile, fallback, motion dan keyboard diperiksa; screen reader belum diuji |
| Kejelasan | 4/5 | Status pembelian dan label diagram lebih jelas; teks di dalam mockup masih berskala ilustrasi |
| Kesiapan digunakan | 4/5 | Implementasi dapat dijalankan; produksi membutuhkan konfigurasi resmi dan foto |
| Keringkasan | 4/5 | Komponen interaksi kecil; stylesheet lama masih memiliki beberapa aturan berlapis |

Rata-rata 4.0/5. Perbaikan berikutnya yang bernilai: verifikasi alur pembelian dengan URL resmi, uji screen reader, konsolidasi stylesheet saat perubahan visual berikutnya. Penilaian ini membedakan hasil yang telah diuji dari kebutuhan produksi yang belum tersedia.
