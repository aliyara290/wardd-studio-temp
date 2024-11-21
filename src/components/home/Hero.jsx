"use client";
import { useRef, useEffect } from "react";
import style from "@/styles/home/hero.module.css";
import gsap from "gsap";

const Hero = () => {

  useEffect(() => {
    gsap.fromTo(
      ".hero_headers",
      {
        y: "100%",
      },
      {
        y: 0,
        delay: 0.2,
        duration: 0.4,
        stagger: 0.3
      }
    );
  }, []);
  return (
    <section className={style.content} id="hero">
      <div className={style.container}>
        <div className={style.hero_video}>
          <video
            playsInline={true}
            autoPlay={true}
            muted={true}
            loop={true}
            src="/videos/video-home-stretched.mp4"
          ></video>
        </div>
        {/* <div className={style.absolute_text}>
          <div className={style.bold_texts}>
            <div className={style.el}>
              <h1 className="hero_headers">EVOLVE YOUR</h1>
            </div>
            <div className={style.el}>
              <h1 className="hero_headers">BUSINESS WITH</h1>
            </div>
            <div className={style.el}>
              <h1 className="hero_headers">STRETCHEDWEB.</h1>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};
export default Hero;
