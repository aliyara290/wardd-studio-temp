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
        <div className={style.hero}>
          <div className={style.detailes}>
            <div className={style.title}>
              <h1>Empowering Innovation, Driving Success</h1>
            </div>
            <div className={style.description}>
              <p>
                Your trusted partner in technology, management, and marketing
                solutions. We deliver innovative strategies and cutting-edge
                services to help your business thrive in a competitive world.
              </p>
            </div>
            <div className={style.button}>
              <a href="">
                <button>Discover Our Services</button>
              </a>
            </div>
          </div>
          <div className={style.video}>
            <div className={style.hero_video}>
              <video
                playsInline={true}
                autoPlay={true}
                muted={true}
                loop={true}
                src="/videos/video-home-stretched.mp4"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
