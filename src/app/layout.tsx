import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Preloader from '@/components/Preloader';
import { WishlistProvider } from '@/context/WishlistContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Women's | Premium Fashion Store",
  description: "Experience the new season's finest selections, designed for the modern woman who values elegance and comfort.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <WishlistProvider>
          <Preloader />
          {children}
        </WishlistProvider>
      </body>
    </html>
  );
}
