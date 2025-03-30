"use client";
import { useState, useEffect } from "react";
import Header from "@/components/home/Header";
import Preload from "@/components/Preload";
import Head from "next/head";
import Script from "next/script";
import SmoothScroll from "./SmoothScroll";
import { usePathname } from "next/navigation";

const GA_TRACKING_ID = "G-KH7VSJXRZC"; // Replace with your actual Google Analytics ID

export default function Layout({ children }) {
  const pathname = usePathname();

  // Scroll to top when pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Head>
        <title>Wardd Studio - 360 agency</title>
        <link rel="icon" href="/favicon.svg" type="image/png"></link>
        <meta
          name="description"
          content="Delivering innovative web design and development with impactful digital marketing campaigns that catapult brands forward."
        />
        <meta property="og:title" content="Wardd Studio - Creative agency" />
        <meta
          property="og:description"
          content="Delivering innovative web design and development with impactful digital marketing campaigns that catapult brands forward."
        />
        <meta property="og:url" content="https://www.stretchedweb.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Wardd Studio - Creative agency" />
        <meta
          name="twitter:description"
          content="Delivering innovative web design and development with impactful digital marketing campaigns that catapult brands forward."
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <div className="content">
        <Header />
        <main>
          <SmoothScroll>{children}</SmoothScroll>
        </main>
      </div>
    </>
  );
}