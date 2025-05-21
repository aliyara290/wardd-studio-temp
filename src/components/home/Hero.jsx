"use client";
import { useRef, useEffect } from "react";
import style from "@/styles/home/hero.module.css";
import { gsap } from "gsap";


const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      `.${style.ticker}`,
      {
        y: "200%",
      },
      {
        y: 0,
        opacity: 1,
        x: 0,
        delay: 0.1,
        duration: 2,
      }
    );
  }, []);
  return (
    <section className={style.content} id="hero">
      <div className={style.container}>
        <div className={style.video}>
          <video
            playsInline={true}
            autoPlay={true}
            muted={true}
            loop={true} 
            src="https://res.cloudinary.com/dylpck2et/video/upload/q_90,f_auto/luzvela22at0on2hratu.mp4"
          ></video>
          {/* <div className={style.boldText}>
            <div className={`${style.ticker} hero_ticker`}>
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
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default Hero;
