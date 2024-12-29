"use client";
import { useRef, useEffect } from "react";
import style from "@/styles/home/hero.module.css";
import gsap from "gsap";

const Hero = () => {
  // useEffect(() => {
  //   gsap.fromTo(
  //     ".hero_headers",
  //     {
  //       y: "100%",
  //     },
  //     {
  //       y: 0,
  //       delay: 0.2,
  //       duration: 0.4,
  //       stagger: 0.3,
  //     }
  //   );
  // }, []);
  return (
    <section className={style.content} id="hero">
      <div className={style.container}>
        <div className={style.video}>
          <video
            playsInline={true}
            autoPlay={true}
            muted={true}
            loop={true}
            src="https://kinescope.io/wLpvmBiSxxsgTxyv42f6zo/1080p#t=0.001"
          ></video>
          <div className={style.boldText}>
            <div className={`${style.ticker} ticker_anim`}>
              <ul aria-hidden="true">
                {Array.from({ length: 7 }, (_, i) => (
                  <li key={i}>NO LIMITS - JUST RESULTS -</li>
                ))}
              </ul>
              <ul>
                {Array.from({ length: 7 }, (_, i) => (
                  <li key={i}>NO LIMITS - JUST RESULTS -</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
