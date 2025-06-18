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
                  Because we don’t just make things look good — we make them unforgettable.<br />
                  Because we don’t believe in boring.<br />
                  Because while others are playing safe, we’re out here breaking rules, pushing pixels, flipping scripts, and making noise.<br />
                  We mix strategy with storytelling, design with disruption, and emotion with impact — until your brand becomes a movement. Choose us if you’re ready to stop blending in and start owning your space.<br />
                  Let’s build the stuff they’ll talk about tomorrow.
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
          We’re not your average agency.
          We are idea rebels, brand architects, and visual troublemakers.
          We don’t follow trends — we start them.
          From the first spark of a concept to the final execution that turns heads, we live to create what others only imagine.
          Born from passion, powered by culture, and driven by chaos (the good kind), we’re the generation of bold.
          And we’re just getting started.
          </p>
        </div>
        <div className={style.cross_line}></div>

      </div>
    </div>
  );
};

export default StudioHero;
