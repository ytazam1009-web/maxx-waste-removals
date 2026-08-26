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
applicationName: "Maxx Waste Removals",
publisher: "Maxx Waste Removals",
category: "Waste Removal Service",
classification: "Waste Removal & House Clearance",
referrer: "origin-when-cross-origin",

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

other: {
  "theme-color": "#07152f",
  "color-scheme": "light",
  "format-detection": "telephone=yes",
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
  site: "@Maxxwaster5p",
  creator: "@Maxxwaster5p",
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
        {/* Google Analytics Base Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DCGNB9PB8V"
          strategy="afterInteractive"
        />

        {/* Google Analytics Configuration & Call Tracking */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DCGNB9PB8V');

            // AUTOMATIC CLICK-TO-CALL TRACKING
            document.addEventListener('click', function(e) {
              const telLink = e.target.closest('a[href^="tel:"]');
              if (telLink) {
                gtag('event', 'generate_lead', {
                  event_category: 'Contact',
                  event_label: 'Phone Call',
                  value: 1.0,
                  phone_number: telLink.getAttribute('href')
                });

                 // Track phone call click with Meta Pixel
  if (window.fbq) {
    window.fbq('track', 'Lead');
    
                console.log('Call lead tracked:', telLink.getAttribute('href'));
              }
            });
          `}
        </Script>
        
        {/* Meta Pixel */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
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
            `,
          }}
        />


        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}