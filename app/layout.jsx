import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://maxxwasteremovals.co.uk" ),

  title:
    "Maxx Waste Removals | Waste Removal, Rubbish Clearance & House Clearance in Coventry, Leicester & Birmingham",

  description:
    "Fast, affordable and professional waste removal, rubbish clearance and house clearance services across Coventry, Leicester, Birmingham and the Midlands. Same-day collection available.",

  keywords: [
    "waste removal UK",
    "rubbish removal Coventry",
    "junk removal Leicester",
    "house clearance Birmingham",
    "garden waste removal",
    "waste collection Midlands",
    "same day waste removal",
    "Maxx Waste Removals",
  ],

  authors: [{ name: "Maxx Waste Removals" }],
  creator: "Maxx Waste Removals",

  verification: {
    google: "PASTE_YOUR_CODE_HERE",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://maxxwasteremovals.co.uk",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Maxx Waste Removals | Waste Removal & House Clearance Midlands",
    description:
      "Fast and affordable waste removal services across Coventry, Leicester, Birmingham and the Midlands.",
    url: "https://maxxwasteremovals.co.uk",
    siteName: "Maxx Waste Removals",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maxx Waste Removals",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Maxx Waste Removals",
    description:
      "Fast waste removal services across Coventry, Leicester & Birmingham.",
    images: ["/og-image.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children } ) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${inter.className} antialiased`}>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DCGNB9PB8V"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag( ){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-DCGNB9PB8V');
          `}
        </Script>

        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}
