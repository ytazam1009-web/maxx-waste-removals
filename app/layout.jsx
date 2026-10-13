import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.maxxwasteremovals.co.uk"),

  title: {
    default: "Maxx Waste Removals | Waste Removal Coventry, Leicester & Birmingham",
    template: "%s | Maxx Waste Removals",
  },

  description:
    "Fast & affordable waste removal, rubbish clearance and house clearance in Coventry, Leicester, Birmingham and the Midlands. Same-day collection available.",

  authors: [{ name: "Maxx Waste Removals" }],
  creator: "Maxx Waste Removals",
  publisher: "Maxx Waste Removals",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://www.maxxwasteremovals.co.uk",
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
    url: "https://www.maxxwasteremovals.co.uk",
    siteName: "Maxx Waste Removals",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maxx Waste Removals - Waste Removal Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Maxx Waste Removals | Waste Removal Midlands",
    description:
      "Fast waste removal services across Coventry, Leicester & Birmingham.",
    images: ["/og-image.jpg"],
    site: "@Maxxwaster5p",
    creator: "@Maxxwaster5p",
  },

  other: {
    "theme-color": "#07152f",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
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
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DCGNB9PB8V');

            // Click-to-call tracking
            document.addEventListener('click', function(e) {
              const telLink = e.target.closest('a[href^="tel:"]');
              if (telLink) {
                gtag('event', 'generate_lead', {
                  event_category: 'Contact',
                  event_label: 'Phone Call',
                  value: 1.0,
                  phone_number: telLink.getAttribute('href')
                });

                if (window.fbq) {
                  window.fbq('track', 'Lead');
                }
              }
            });
          `}
        </Script>

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '934465092422525');
            fbq('track', 'PageView');
          `}
        </Script>

        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}