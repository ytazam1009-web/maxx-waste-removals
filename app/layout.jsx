import "./globals.css";
import { Inter } from "next/font/google";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://maxxwasteremovals.co.uk"),

  title:
    "Maxx Waste Removals | Waste Removal, Rubbish Clearance & House Clearance Midlands",

  description:
    "Maxx Waste Removals provides fast, affordable, and professional waste removal services across Coventry, Leicester, Birmingham, and the Midlands.",

  keywords: [
    "waste removal",
    "rubbish removal",
    "junk removal",
    "house clearance",
    "garden clearance",
    "waste collection",
    "waste disposal",
    "waste removal Coventry",
    "waste removal Leicester",
    "waste removal Birmingham",
  ],

  authors: [{ name: "Maxx Waste Removals" }],
  creator: "Maxx Waste Removals",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "Maxx Waste Removals | Waste Removal Midlands",
    description:
      "Professional waste removal services across Coventry, Leicester and Birmingham.",
    url: "https://maxxwasteremovals.co.uk",
    siteName: "Maxx Waste Removals",
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Maxx Waste Removals",
    description:
      "Fast and professional waste removal services across the Midlands.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}