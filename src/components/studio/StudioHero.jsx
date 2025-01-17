"use client";
import { useEffect } from "react";
import style from "@/styles/studio/hero.module.css";
import gsap from "gsap";
const StudioHero = () => {
  useEffect(() => {
    gsap.fromTo(
      ".studio_hero_heading",
      {
        y: "100%",
      },
      {
        y: 0,
        opacity:1,
        delay: 0.6,
        duration: 0.4,
        stagger: 0.3,
      }
    );

    gsap.fromTo(
      ".ebi_48",
      {
        y: "101%",
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
      <div className={style.container}>
        <div className={style.bold_text}>
          <div className={style.text}>
            <h1 className="studio_hero_heading">Agency.</h1>
          </div>
        </div>
        <div className={style.cross_line}></div>
        <div className={style.bottom_text}>
          <div className={`${style.bio} studio_bio`}>
            <div className="overflow-hidden">
              <div className={`${style.bio__text_one} ebi_48`}>Wyh us</div>
            </div>
            <div className="overflow-hidden">
              <div className={`${style.bio__text} ebi_48`}>
                <p>
                Ward Studios is a creative powerhouse, a team of dreamers and doers dedicated to
                crafting impactful solutions. We specialize in delivering tailored strategies that
                resonate, ensuring your story stands out in a crowded world. Our expertise spans
                multiple industries, and our passion lies in creating moments that inspire, engage,
                and leave a lasting impression.
                Whether you
                are a brand looking to redefine your identity, a visionary entrepreneur
                with a bold idea, or an organization aiming to connect with your audience, we are
                here to turn your vision into reality.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.video}>
          <div className={style.video__content}>
            <div className={style.iframe__video}>
              <video
                src="/videos/video-home-stretched.mp4"
                muted={true}
                autoPlay={true}
                loop={true}
                // frameborder="0"
                // allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                // title="ese-doku-2023-16x9-SF5"
                // data-ready="true"
              ></video>
            </div>
          </div>
        </div>
        <div className={style.description}>
          <h5>Who Are We ?</h5>
          <p>
          At WARDD STUDIOS AGENCY, we are architects of creativity, storytellers of bold ideas, and builders of exceptional experiences. Our mission is simple: to defy expectations, transcend boundaries, and create impactful solutions that leave a mark. WARDD is where imagination meets precision, and your vision becomes reality.
          </p>
        </div>
        <div className={style.cross_line}></div>

      </div>
    </div>
  );
};

export default StudioHero;
