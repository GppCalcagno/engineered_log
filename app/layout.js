import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from "next/script";


import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
  default: "Engineered Log",  
  template: "%s | Engineered Log",
  },
  description: "Welcome to my personal digital space where I share notes, showcase projects, and document my life journey, learning, and creativity. Explore my digital garden to discover insights, experiments, and ideas.",
  keywords: [
    "personal blog",
    "digital garden",
    "notes",
    "projects",
    "software engineering",
    "machine learning",
    "mind log",
    "tech log",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-EGCKKGSY45"></Script>
        
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
            gtag('config', 'G-EGCKKGSY45');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      <Analytics />
      <SpeedInsights />
      
      </body>
    </html>
  );
}
