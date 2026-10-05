import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart";
import { OfferBanner } from "@/components/OfferBanner";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AIAssistant } from "@/components/AIAssistant";
import { StickyCta } from "@/components/StickyCta";
import { brand } from "@/lib/data";

export const metadata: Metadata = {
  title: "Chapter & Cup — Stories to keep",
  description: "Independent bookstore and cafe merch",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Literata:wght@400;500;600;700;800&family=Source+Sans+3:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen font-body antialiased bg-atmosphere">
        <CartProvider>
          <OfferBanner />
          <SiteHeader />
          <main className="min-h-[70vh] pb-20 sm:pb-0">{children}</main>
          <SiteFooter />
          <AIAssistant />
          <StickyCta />
        </CartProvider>
      </body>
    </html>
  );
}
