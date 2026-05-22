import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '@fontsource/sora/400.css'
import '@fontsource/sora/600.css'
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
  title: "SepDigital - Portfolio",
  description: "Personal portfolio of Issa, a frontend developer specializing in React and Next.js. Showcasing projects, skills, and experience in web development.",
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
      <body className="font-[Sora] bg-[#07090F] text-white">{children}</body>
    </html>
  );
}
