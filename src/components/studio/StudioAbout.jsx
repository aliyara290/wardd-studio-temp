"use client";
import { useRef, useEffect } from "react";
import style from "@/styles/studio/about.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const StudioAbout = () => {
  const element = useRef(null);
  const trigger = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.innerWidth >= 900) {
      const ctx = gsap.context(() => {
        const innerWidth =
          window.innerWidth <= 1300
            ? "60% 30%"
          :window.innerWidth <= 1200
            ? "70% 30%"
            : window.innerWidth <= 1130
            ? "75% 30%"
            : window.innerWidth <= 1050
            ? "47% 30%"
            : window.innerWidth <= 900
            ? "40% 30%"
            : "65% 30%";
        gsap.to(element.current, {
          scrollTrigger: {
            trigger: trigger.current,
            start: "top 30%",
            end: innerWidth,
            pin: true,
          },
        });
      });
      return () => ctx.revert();
    } else null;
  }, []);
  return (
    <section className={style.content}>
      <div className={style.container}>
        <div className={style.part_left} ref={trigger}>
          <div className={style.title}>
            <h1>We pledge unique, impactful digital media solutions.</h1>
          </div>
        </div>
        <div className={style.part_right} ref={element}>
          <div className={style.paragraph}>
            <h3>DRIVING POSITIVE CHANGE TOGETHER.</h3>
            <p>
              At Stretched, we're dedicated to igniting positive transformations
              alongside our clients. Through our collaborative efforts, we
              propel brands forward, crafting solutions that inspire growth and
              success.
            </p>
          </div>
          <div className={style.paragraph}>
            <h3>UNIFYING RATIONALITY FOR IMPACT.</h3>

            <p>
              At Stretched, our collective rationality fuels our pursuit of
              excellence. With clarity and precision, we navigate complexities,
              delivering solutions that elevate brands and exceed expectations.
            </p>
          </div>
          <div className={style.paragraph}>
            <h3>INSPIRING CREATIVITY, CRAFTING SUCCESS.</h3>

            <p>
              Creativity is the cornerstone of Stretched's approach. Our
              innovative mindset shapes solutions that resonate, driving
              tangible results and transforming visions into reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioAbout;
