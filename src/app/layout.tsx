import type { Metadata, Viewport } from "next";
import { Nunito_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "RoyanNFC", template: "%s | RoyanNFC" },
  description: "Display NFC Google Review untuk membantu usaha lokal mempermudah pelanggan memberi ulasan.",
  applicationName: "RoyanNFC",
  keywords: ["NFC Google Review", "display Google Review", "NFC review UMKM", "kartu NFC Google Review"],
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4efdf",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={nunito.variable}>
      <body>{children}</body>
      {gaId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}');`}
          </Script>
        </>
      )}
    </html>
  );
}
