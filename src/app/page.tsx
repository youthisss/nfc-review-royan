import type { Metadata } from "next";
import { AnalyticsLink } from "@/components/analytics-link";
import { Reveal } from "@/components/reveal";
import { TapScene } from "@/components/tap-scene";
import { SectionNav } from "@/components/section-nav";
import { BackToTop } from "@/components/back-to-top";
import { ProductArtwork, ReviewFlowArtwork } from "@/components/product-artwork";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();
const catalogUrl = process.env.NEXT_PUBLIC_LYNK_URL?.trim() || "#produk";
const hasCatalog = catalogUrl !== "#produk";
const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL?.trim();
const productPrice = process.env.NEXT_PUBLIC_PRODUCT_PRICE?.trim() || "Belum diumumkan";

export const metadata: Metadata = {
  title: "NFC Google Review untuk UMKM | RoyanNFC",
  description:
    "Permudah pelanggan membuka halaman Google Review bisnis Anda dengan display NFC. Cukup tap atau scan, tanpa perlu mencari nama usaha secara manual.",
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "RoyanNFC | Display NFC Google Review untuk UMKM",
    description: "Satu tap untuk membuka halaman Google Review bisnis Anda.",
    url: siteUrl,
    siteName: "RoyanNFC",
    locale: "id_ID",
    type: "website",
  },
};

const faqs = [
  {
    question: "Apakah semua ponsel bisa menggunakan NFC?",
    answer:
      "Ponsel yang mendukung dan mengaktifkan NFC dapat menggunakan fitur tap. Untuk ponsel lain, pelanggan tetap dapat memindai QR yang tersedia pada display.",
  },
  {
    question: "Apakah pelanggan perlu memasang aplikasi?",
    answer:
      "Tidak. Tautan dibuka melalui browser menuju halaman Google Review bisnis Anda.",
  },
  {
    question: "Apakah ada biaya bulanan?",
    answer:
      "Informasi biaya dan ketentuan terbaru tersedia di katalog resmi RoyanNFC pada Lynk.id.",
  },
  {
    question: "Apa yang perlu disiapkan untuk memesan?",
    answer:
      "Siapkan tautan profil Google Business atau lokasi Google Maps usaha Anda. Detail berikutnya akan dijelaskan di halaman pemesanan.",
  },
];

export default function Home() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Display NFC Google Review RoyanNFC",
    description: "Display meja NFC dan QR untuk membuka halaman Google Review bisnis.",
    brand: { "@type": "Brand", name: "RoyanNFC" },
    url: siteUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <a className="skip-link" href="#konten">Lewati ke konten utama</a>

      <header className="site-header">
        <a className="wordmark" href="#atas" aria-label="RoyanNFC, kembali ke atas">
          royan<span>nfc</span>
        </a>
        <SectionNav />
        <AnalyticsLink className="button button-small" href={catalogUrl} eventName="catalog_header">
          {hasCatalog ? "Lihat katalog" : "Lihat produk"}
        </AnalyticsLink>
      </header>

      <main id="konten" tabIndex={-1}>
        <section className="hero" id="atas" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">Pelanggan puas?<br />Ajak cerita.<br /><span>Cukup satu tap.</span></h1>
            <p className="hero-lead">
              Buka halaman Google Review usaha Anda lewat tap NFC atau scan QR. Pelanggan tak perlu mencari nama usaha lagi.
            </p>
          </div>
          <TapScene />
          <div className="hero-conversion">
            <div className="hero-actions">
              <AnalyticsLink className="button" href={catalogUrl} eventName="catalog_hero">
                Lihat produk RoyanNFC
              </AnalyticsLink>
            </div>
          </div>
        </section>

        <section className="how" id="cara-kerja" aria-labelledby="how-title">
          <Reveal className="how-copy">
            <p className="eyebrow">Lebih sedikit langkah</p>
            <h2 id="how-title">Pelayanan selesai.<br /><span>Cerita baik berlanjut.</span></h2>
            <p className="large-copy">
              Setelah transaksi selesai, arahkan pelanggan yang ingin berbagi pengalaman ke display RoyanNFC.
            </p>
            <ol className="steps">
              <li><strong>Tap atau scan</strong><span>Pelanggan mendekatkan ponsel atau memindai QR.</span></li>
              <li><strong>Halaman review terbuka</strong><span>Browser menuju halaman ulasan bisnis yang sudah terhubung.</span></li>
              <li><strong>Pelanggan menulis</strong><span>Mereka dapat membagikan pengalaman dengan cara yang lebih ringkas.</span></li>
            </ol>
          </Reveal>
          <Reveal className="review-flow">
            <div className="flow-heading"><strong>Dari display ke halaman ulasan</strong><span>Ilustrasi cara kerja</span></div>
            <ReviewFlowArtwork />
            <div className="flow-result"><span aria-hidden="true">✓</span><p><strong>Halaman ulasan langsung terbuka.</strong><span>Pelanggan tinggal membagikan pengalamannya.</span></p></div>
          </Reveal>
        </section>

        <section className="product" id="produk" aria-labelledby="product-title">
          <div className="product-heading">
            <p className="eyebrow">Produk utama</p>
            <h2 id="product-title">Display NFC Google Review</h2>
          </div>
          <div className="product-visual">
            <ProductArtwork />
          </div>
          <Reveal className="product-copy">
            <p>Dirancang untuk ditempatkan di meja kasir, resepsionis, atau area pelayanan yang mudah dijangkau pelanggan.</p>
            <ul className="feature-list">
              <li>Tap NFC dan alternatif scan QR</li>
              <li>Langsung menuju halaman Google Review</li>
              <li>Bentuk display meja yang mudah terlihat</li>
            </ul>
            <div className="price-row">
              <div><span>Harga</span><strong>{productPrice}</strong></div>
              {hasCatalog ? (
                <AnalyticsLink className="button" href={catalogUrl} eventName="catalog_product">
                  Pesan lewat Lynk.id
                </AnalyticsLink>
              ) : (
                <p className="availability-note">Pemesanan belum dibuka.</p>
              )}
            </div>
            <p className="config-note">{hasCatalog ? "Lihat pilihan produk dan detail pemesanan di katalog RoyanNFC." : "Harga dan tautan katalog akan ditampilkan setelah tersedia."}</p>
          </Reveal>
        </section>

        <section className="use-cases" aria-labelledby="use-title">
          <Reveal className="section-heading narrow">
            <p className="eyebrow">Satu display, banyak meja</p>
            <h2 id="use-title">Di mana pun Anda melayani,<br /><span>beri ruang untuk cerita.</span></h2>
          </Reveal>
          <div className="marquee-list" aria-label="Contoh jenis usaha">
            <span>Kedai kopi</span><span>Salon</span><span>Bengkel</span><span>Klinik</span><span>Toko retail</span><span>Barbershop</span>
          </div>
        </section>

        <section className="faq" id="faq" aria-labelledby="faq-title">
          <Reveal className="faq-intro">
            <p className="eyebrow">Sebelum memesan</p>
            <h2 id="faq-title">Kenalan dulu,<br /><span>baru pilih.</span></h2>
            {whatsappUrl ? <>
              <p>Masih ada yang ingin ditanyakan?</p>
              <AnalyticsLink className="text-link" href={whatsappUrl} eventName="whatsapp_faq">
                Hubungi RoyanNFC via WhatsApp
              </AnalyticsLink>
            </> : <p>Mulai dari kompatibilitas ponsel hingga persiapan pemesanan, temukan jawabannya di sini.</p>}
          </Reveal>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="closing" aria-labelledby="closing-title">
          <Reveal className="closing-signal" aria-hidden="true">
            <svg viewBox="0 0 144 104" fill="none">
              <g transform="rotate(-10 48 56)">
                <rect x="19" y="19" width="57" height="76" rx="9" fill="#f5f1e7" stroke="currentColor" strokeWidth="3" />
                <path d="M33 34h16M33 77h28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <circle cx="48" cy="56" r="9" fill="#d6e89b" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="48" cy="56" r="2.5" fill="currentColor" />
              </g>
              <g stroke="currentColor" strokeWidth="5" strokeLinecap="round">
                <path className="draw-line" d="M89 43a20 20 0 0 1 0 26" />
                <path className="draw-line delay-1" d="M103 31a37 37 0 0 1 0 50" />
                <path className="draw-line delay-2" d="M117 19a55 55 0 0 1 0 74" />
              </g>
            </svg>
          </Reveal>
          <p className="eyebrow">Siap diletakkan di meja usaha</p>
          <h2 id="closing-title">Usaha Anda punya cerita.<br />Bantu pelanggan membagikannya.</h2>
          <AnalyticsLink className="button button-light" href={catalogUrl} eventName="catalog_closing">
            {hasCatalog ? "Lihat katalog RoyanNFC" : "Lihat detail produk"}
          </AnalyticsLink>
        </section>
      </main>

      <footer>
        <a className="wordmark" href="#atas">royan<span>nfc</span></a>
        <p>NFC Google Review untuk usaha lokal Indonesia.</p>
        <div className="footer-links"><a href="#cara-kerja">Cara kerja</a><a href="#produk">Produk</a><a href="#faq">Tanya jawab</a></div>
        <p>© {new Date().getFullYear()} RoyanNFC</p>
      </footer>

      <BackToTop />
    </>
  );
}
