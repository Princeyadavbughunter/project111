import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Veda Dentistry | Best Dentist in Anand Vihar, Delhi | Advanced Dental Implants",
  description: "Dr. Shruti Goel - Certified Implantologist with 15+ years experience. Advanced dental implants, conscious sedation, 3D scanners in Anand Vihar, Delhi. Book appointment: +91 9318481183",
  keywords: "dentist anand vihar, dental clinic delhi, dr shruti goel, dental implants, veda dentistry, conscious sedation, 3D scanners, best dentist delhi",
  authors: [{ name: "Dr. Shruti Goel" }],
  creator: "Veda Dentistry",
  publisher: "Veda Dentistry",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vedadentistry.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Veda Dentistry | Best Dentist in Anand Vihar, Delhi",
    description: "Certified Implantologist Dr. Shruti Goel with 15+ years experience. Advanced dental care in Anand Vihar, Delhi.",
    url: 'https://vedadentistry.com',
    siteName: "Veda Dentistry",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Veda Dentistry",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Veda Dentistry",
    description: "Advanced dental care with 15+ years experience in Anand Vihar, Delhi",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
