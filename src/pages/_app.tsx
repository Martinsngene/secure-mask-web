/** @format */

import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import AuthProvider from "../../contexts/AuthContext";
import TransactionProvider from "../../contexts/TransactionContext";
// Adding this font here will set it as the font for the entire app.
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TransactionProvider>
      <AuthProvider>
        <div className={`${inter.className}`}>
          <Component {...pageProps} />
        </div>
      </AuthProvider>
    </TransactionProvider>
  );
}
