import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Montserrat } from 'next/font/google'
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ['latin'] , 
  weight:['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Bedbd.com',
  description: 'Find your sweet place',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
