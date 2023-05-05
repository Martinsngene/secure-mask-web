/** @format */

import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

import "@/styles/globals.css";

// Adding this font here will set it as the font for the entire app.
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.className}`}>
      <Component {...pageProps} />
    </div>
  );
}
