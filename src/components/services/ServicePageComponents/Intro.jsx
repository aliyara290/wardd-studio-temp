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
              <div className={`${style.bio__text_one} ebi_48`}>Wyh us</div>
            </div>
            <div className="overflow-hidden">
              <div className={`${style.bio__text} ebi_48`}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis necessitatibus molestias eligendi dolorum deserunt nemo! Deserunt repellendus laudantium, recusandae distinctio repudiandae placeat aperiam nobis quod quos blanditiis voluptas hic voluptatibus nulla provident sequi ipsa ab odio esse animi ducimus a.
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
