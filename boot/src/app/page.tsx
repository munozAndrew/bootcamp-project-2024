import React from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css"; // Make sure this path matches your structure
import Navbar from "@/components/Navbar"; // Adjust path as necessary

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar /> {/* This ensures the Navbar appears on every page */}
      <Component {...pageProps} />
    </>
  );
}
