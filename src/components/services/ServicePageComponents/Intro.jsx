"use client";
import { useEffect } from "react";
import style from "@/styles/studio/hero.module.css";
import gsap from "gsap";
const Intro = () => {
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
    <div className={style.content}>
      <div className={style.container} style={{paddingTop: 0}}>
        <div className={style.cross_line}></div>
        <div className={style.bottom_text}>
          <div className={`${style.bio} studio_bio`}>
            <div className="overflow-hidden">
              <div className={`${style.bio__text_one} ebi_48`}>Why Choose WARDD</div>
            </div>
            <div className="overflow-hidden">
              <div className={`${style.bio__text} ebi_48`}>
                <p>
                  Choose WARDD Studios for uncompromising creativity and results-driven excellence. We don't just meet expectations—we shatter them. Our team of visionaries, strategists, and creators brings diverse expertise to every project, ensuring solutions that are both innovative and effective. We approach each challenge with fresh perspective, dedicated craftsmanship, and the bold confidence to transform your vision into extraordinary reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;