export function getSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const vercelProdUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  const vercelUrl = process.env.VERCEL_URL?.trim();

  const candidate =
    envUrl ||
    (vercelProdUrl ? `https://${vercelProdUrl}` : "") ||
    (vercelUrl ? `https://${vercelUrl}` : "") ||
    "https://royannfc.vercel.app";

  try {
    const formatted = candidate.startsWith("http://") || candidate.startsWith("https://")
      ? candidate
      : `https://${candidate}`;
    return new URL(formatted).origin;
  } catch {
    return "https://royannfc.vercel.app";
  }
}
