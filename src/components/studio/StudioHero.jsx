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
                  Ja, wir sind jung. Ja, wir leben am Puls der Zeit und sprechen
                  die Sprache der Gegenwart in und um die digitale Welt
                  fliessend. Ja, unseren visionären Mindset mischen wir mit
                  zeitloser Qualität. Ja, wir sind bissig, provokativ und
                  kompetitiv. Aber nein, wir haben noch nicht ausgelernt und
                  sehen uns noch lange nicht am Ziel.
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
          <h5>This is Wardd Studio</h5>
          <p>
            This is ESEOver the last five years, we have grown from a team of
            three to a team of twenty. The three founders of the ESE Agency have
            built a prosperous company from a high school graduation project.
            Everything is one hundred percent "self-made". While others read
            theory books, we feel the spirit of the times, set high goals and
            give our all to achieve them.
          </p>
        </div>
        <div className={style.cross_line}></div>
      </div>
    </div>
  );
};

export default StudioHero;
