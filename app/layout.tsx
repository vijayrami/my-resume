import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vijay-rami.vercel.app"),
  title: {
      default: "Vijay Rami | Senior Magento & Adobe Commerce Developer",
      template: "%s | Vijay M. Rami",
  },
  description: "Senior Technology Specialist specializing in Magento/Adobe Commerce development, architecture, and consulting.",
  keywords: ["Magento Developer", "Adobe Commerce", "PHP Developer", "Vijay Rami"],
  authors: [{ name: "Vijay Rami" }],
  openGraph: {
    title: "Vijay Rami | Adobe Certified Professional, Expert, Master - Adobe Commerce Architect",
    description: "Senior Magento/Adobe Commerce Developer | Solution Architecture | Technical Lead",
    url: "https://vijay-rami.vercel.app/",
    siteName: "Vijay Rami Portfolio",
    images: ["/preview.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
      card: "summary_large_image",
      title: "Vijay M. Rami",
      description:
          "Adobe Commerce Technical Lead | Solution Architect",
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
