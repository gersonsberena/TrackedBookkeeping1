import type { Metadata } from "next";
import { Instrument_Serif, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const serif = Instrument_Serif({
  variable: "--serif",
  subsets: ["latin"],
  weight: "400",
});

const sans = Manrope({
  variable: "--sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Tracked Bookkeeping | Jacksonville & St. Augustine Bookkeeper",
  description:
    "Local bookkeeping for small businesses in Northeast Florida. Monthly financials, QuickBooks cleanup, and tax-ready reports — delivered every month, on time.",
  keywords: [
    "bookkeeper Jacksonville FL",
    "bookkeeping St Augustine",
    "small business bookkeeper Northeast Florida",
    "QuickBooks bookkeeper Jacksonville",
    "monthly bookkeeping service Florida",
  ],
  openGraph: {
    title: "Tracked Bookkeeping | Northeast Florida",
    description:
      "Clean books. Clear numbers. Calm Mondays. Local bookkeeping for Northeast Florida small businesses.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://trackedbookkeeping.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
