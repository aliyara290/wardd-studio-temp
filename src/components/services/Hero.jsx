"use client";
import { useEffect } from "react";
import gsap from "gsap";
import style from "@/styles/services/hero.module.css";

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      ".service_hero_heading",
      {
        y: "100%",
      },
      {
        y: 0,
        delay: 0.6,
        duration: 0.4,
        stagger: 0.3,
      }
    );

  }, []);
  return (
    <div className={style.content} id="hero">
      <div className={style.scroll}>[ SCROLL DOWN ]</div>
      <video
        playsInline={true}
        autoPlay={true}
        muted={true}
        loop={true}
        src="/videos/service_video.mp4"
        className={style.hero_video}
      ></video>
      <div className={style.bold_text}>
        <div className={style.bold_content}>
          <div className={style.text}>
            <h1 className="service_hero_heading">What</h1>
          </div>
          <div className={`${style.text}`}>
            <h1 className="service_hero_heading">We Do?</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
