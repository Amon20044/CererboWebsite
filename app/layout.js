// app/layout.tsx
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


// Load Geist fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Load ElevonTwoG font
const elevonTwoG = localFont({
  src: "./fonts/ElevonTwoG.ttf",
  variable: "--font-elevon-two-g",
});

export const metadata = {
  "google-site-verification":"44bwBMeH2MsvcMLjVOkAYLLii4Jz6pD1j-rrRChNuag",
  title: "CEREBRO 2024 - IIITV's Annual Technical Fest",
  description: "Explore CEREBRO 2024, the ultimate technical fest hosted by IIIT Vadodara! Join us for a celebration of innovation, competitions, workshops, and tech talks, with exciting events for students, professionals, and tech enthusiasts. Stay updated on schedules, speaker lineups, and live announcements. Experience the spirit of technology and collaboration at IIITV's premier tech fest, built with Next.js for an interactive, smooth user experience.",
  metadataBase:new URL("https://cerebro2024.vercel.app/"),
  keywords:["Cerebro","Cerebro2024","Cerebro 2024","Indian institute of infomation technology Vadodara","IIIT Vadodara tech fest","IIIT Vadodara","Indian Institute of Information Technology Vadodara","IIITV","Technical Committee IIITV","tech fest 2024","Cerebro events","workshops and competitions IIITV",]
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${elevonTwoG.variable} antialiased`}
      >
        
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
