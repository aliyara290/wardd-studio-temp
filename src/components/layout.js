"use client";
import { useState, useEffect } from "react";
import Header from "@/components/home/Header";
import Preload from "@/components/Preload";
import Head from "next/head";
import SmoothScroll from "./SmoothScroll";

export default function Layout({ children }) {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const handlePreloadAnimationFinished = () => {
  //     setLoading(false);
  //   };

  //   document.addEventListener(
  //     "preloadAnimationFinished",
  //     handlePreloadAnimationFinished
  //   );

  //   return () => {
  //     document.removeEventListener(
  //       "preloadAnimationFinished",
  //       handlePreloadAnimationFinished
  //     );
  //   };
  // }, []);

  return (
    <>
      <Head>
        <title>Wardd Studio - 360 agency</title>
        <link rel="icon" href="/favicon.svg" type="image/png"></link>
        <meta
          name="description"
          content="Delivering innovative web design and development with impactful digital marketing campaigns that catapult brands forward."
        />
        <link rel="icon" href="/favicon.svg" type="image/png"></link>
        <meta
          property="og:title"
          content="Stretchedweb Studio - Creative agency"
        />
        <meta
          property="og:description"
          content="Delivering innovative web design and development with impactful digital marketing campaigns that catapult brands forward."
        />
        <meta property="og:url" content="https://www.stretchedweb.com" />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="Stretchedweb Studio - Creative agency"
        />
        <meta
          name="twitter:description"
          content="Delivering innovative web design and development with impactful digital marketing campaigns that catapult brands forward."
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* {loading ? (
        <Preload />
      ) : ( */}
      <>
        <div className="content">
          <Header />
          <main>
            <SmoothScroll>{children}</SmoothScroll>
          </main>
        </div>
      </>
      {/* )} */}
    </>
  );
}
