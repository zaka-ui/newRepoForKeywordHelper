'use client';
import localFont from "next/font/local";
import "./globals.css";
import Loading from "./loading";
import { ResultsProvider } from '../context/result'; // Named import

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



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-800 text-slate-200`}
      >
              <ResultsProvider>
              <suspense fallback={<Loading/>}>{children}</suspense>
              </ResultsProvider>
      </body>
    </html>
  );
}
