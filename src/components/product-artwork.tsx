function NfcSignal() {
  return <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"><path d="M4 12q8 10 0 20M14 6q14 16 0 32M25 0q20 22 0 44" /></g>;
}

function SampleQr() {
  return (
    <g fill="currentColor">
      <path fillRule="evenodd" d="M0 0h18v18H0zM4 4v10h10V4zM24 0h18v18H24zM28 4v10h10V4zM0 24h18v18H0zM4 28v10h10V28z" />
      <path d="M7 7h4v4H7zM31 7h4v4h-4zM7 31h4v4H7zM23 23h7v7h-7zM34 23h8v4h-8zM23 34h4v8h-4zM30 30h7v7h-7zM38 32h4v10h-4zM30 39h5v3h-5z" />
    </g>
  );
}

function Display({ simple = false }: { simple?: boolean }) {
  return (
    <g>
      <rect x="5" y="7" width="176" height="238" rx="7" fill="#193d2c" />
      <rect width="176" height="238" rx="7" fill="#fffdf7" stroke="#244d39" strokeWidth="2.5" />
      <text x="19" y="29" fontSize="14" fontWeight="900">royannfc</text>
      <path d="M19 44h138" stroke="#d5d8c9" />
      {simple ? <text x="88" y="82" textAnchor="middle" fontSize="20" fontWeight="850">Tap di sini</text> : (
        <text x="19" y="80" fontSize="23" fontWeight="850" letterSpacing="-1">
          <tspan x="19">Cerita Anda,</tspan><tspan x="19" dy="27">berarti buat</tspan><tspan x="19" dy="27">kami.</tspan>
        </text>
      )}
      <g transform={simple ? "translate(70 103)" : "translate(128 156) scale(.7)"}><NfcSignal /></g>
      <g transform={simple ? "translate(67 166)" : "translate(19 170) scale(.8)"}><SampleQr /></g>
      <text x="88" y="223" textAnchor="middle" fontSize="11" fontWeight="700">Tap NFC atau scan QR</text>
    </g>
  );
}

function ReviewPhone() {
  return (
    <g>
      <rect x="5" y="6" width="166" height="260" rx="23" fill="#193d2c" opacity=".12" />
      <rect width="166" height="260" rx="23" fill="#fffdf7" stroke="#193d2c" strokeWidth="3" />
      <rect x="62" y="12" width="42" height="5" rx="2.5" fill="#193d2c" />
      <g className="art-screen">
        <text x="17" y="53" fontSize="12" fill="#62685c">Google Review</text>
        <text x="17" y="81" fontSize="18" fontWeight="850">Usaha Anda</text>
        <text x="17" y="111" fontSize="14">Bagaimana</text>
        <text x="17" y="131" fontSize="14">pengalaman Anda?</text>
        <text x="17" y="167" fontSize="24" fill="#90611c">☆ ☆ ☆ ☆ ☆</text>
        <rect x="15" y="183" width="136" height="42" rx="5" fill="#f5f1e7" stroke="#d5d8c9" />
        <text x="25" y="201" fontSize="11" fill="#62685c">Tulis cerita Anda</text>
        <path d="M25 214h77" stroke="#c0c7b7" />
        <text x="83" y="244" textAnchor="middle" fontSize="10" fill="#62685c">Pratinjau halaman ulasan</text>
      </g>
    </g>
  );
}

export function HeroArtwork() {
  return (
    <svg className="product-artwork hero-artwork" viewBox="0 0 520 430" role="img" aria-label="Ilustrasi ponsel mendekati display RoyanNFC dan membuka halaman Google Review">
      <path d="M110 0h300a110 110 0 0 1 110 110v310a10 10 0 0 1-10 10H10a10 10 0 0 1-10-10V110A110 110 0 0 1 110 0" fill="#e4e5d5" />
      <path d="M0 279h520v141a10 10 0 0 1-10 10H10a10 10 0 0 1-10-10Z" fill="#d5bea0" />
      <path d="M0 279h520" stroke="#bca887" />
      <ellipse cx="260" cy="357" rx="194" ry="19" fill="#193d2c" opacity=".08" />
      <text x="260" y="43" textAnchor="middle" fontSize="17" fontWeight="800">Dekatkan ponsel. Buka ulasan.</text>
      <g transform="translate(63 101) rotate(-7 88 119)"><Display /></g>
      <g className="art-phone-motion"><g transform="translate(292 98) rotate(7 83 130)"><ReviewPhone /></g></g>
      <g transform="translate(255 181) scale(.7)" className="art-tap-signal"><NfcSignal /></g>
      <g className="art-confirmation">
        <rect x="134" y="385" width="252" height="29" rx="6" fill="#244d39" />
        <text x="260" y="404" textAnchor="middle" fontSize="13" fontWeight="750" fill="#fffdf7">✓ Halaman ulasan terbuka</text>
      </g>
    </svg>
  );
}

export function ReviewFlowArtwork() {
  return (
    <svg className="product-artwork flow-artwork" viewBox="0 0 480 328" role="img" aria-label="Display di meja usaha terhubung lewat tap NFC atau scan QR ke halaman ulasan di ponsel pelanggan">
      <g transform="translate(13 27) rotate(-4 88 119)"><Display simple /></g>
      <g transform="translate(304 10)"><ReviewPhone /></g>
      <g className="art-flow-arrow">
        <text x="247" y="118" textAnchor="middle" fontSize="12" fontWeight="800">Tap NFC</text>
        <path className="draw-line" d="M207 145h77m-10-10 11 10-11 10" fill="none" strokeWidth="3" />
        <text x="247" y="181" textAnchor="middle" fontSize="11" fontWeight="750">atau scan QR</text>
      </g>
      <text x="101" y="307" textAnchor="middle" fontSize="14" fontWeight="800">Display di meja usaha</text>
      <text x="387" y="307" textAnchor="middle" fontSize="14" fontWeight="800">Ponsel pelanggan</text>
    </svg>
  );
}

export function ProductArtwork() {
  return (
    <svg className="product-artwork catalog-artwork" viewBox="0 0 440 430" role="img" aria-label="Mockup ilustratif display meja RoyanNFC dengan tap NFC dan QR">
      <text x="220" y="40" textAnchor="middle" fontSize="17" fontWeight="800" fill="#d6e89b">Teman kecil di meja usaha.</text>
      <ellipse cx="217" cy="364" rx="112" ry="14" fill="#102a1e" opacity=".3" />
      <g transform="translate(111 88) rotate(-6 88 119) scale(1.1)"><Display /></g>
      <text x="220" y="394" textAnchor="middle" fontSize="14" fontWeight="700" fill="#e0e7d8">Dua cara terhubung: tap NFC atau scan QR.</text>
      <text x="220" y="416" textAnchor="middle" fontSize="11" fill="#e0e7d8">Mockup ilustratif · Bukan foto produk asli</text>
    </svg>
  );
}
