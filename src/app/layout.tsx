import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import StickyNavbar from "@/components/shared/StickyNavbar";
import StickyNav from "@/components/shared/StickyNav";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Best IELTS Course by Munzereen Shahid [2025]",
  description: "Page recreated by Hossain Rabbi",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className="font-inter">
        <div className="min-h-screen w-[100%] mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
