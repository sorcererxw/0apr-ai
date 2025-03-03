import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { languageList } from "@/lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const languages = languageList.reduce((acc, { value }) => {
  acc[value] = `/${value}`;
  return acc;
}, {} as Record<string, string>);

export const metadata: Metadata = {
  title: "Interest-Free Installment Value Calculator",
  description:
    "Calculate potential investment returns from installment payments. Please consume responsibly.",
  keywords:
    "interest-free installment,installment payment,return calculator,financial tool,investment return,responsible consumption,financial planning",
  authors: [{ name: "sorcererxw" }],
  creator: "sorcererxw",
  publisher: "sorcererxw",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Interest-Free Installment Value Calculator",
    description:
      "Calculate potential investment returns from installment payments",
    type: "website",
    locale: "en",
    siteName: "Interest-Free Installment Value Calculator",
    url: "https://0apr.sorcererxw.com",
  },
  twitter: {
    card: "summary",
    title: "Interest-Free Installment Value Calculator",
    description:
      "Calculate potential investment returns from installment payments",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://0apr.sorcererxw.com",
    languages,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="[&:has(media(prefers-color-scheme:dark))]:dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
