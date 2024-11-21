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
            <h1 className="studio_hero_heading">About</h1>
          </div>
          <div className={`${style.text}`}>
            <h1 className="studio_hero_heading">agency.</h1>
          </div>
        </div>
        <div className={style.bottom_text}>
          <div className={`${style.bio} studio_bio`}>
            <div className="overflow-hidden">
              <div className={`${style.bio__text} ebi_48 text-white font-bold`}>Create impactful digital solutions.</div>
            </div>
            <div className="overflow-hidden">
              <div className={`${style.bio__text} ebi_48 text-gray-400 font-light`}>
                We are excited for our work and how it positively impacts
                clients.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudioHero;
