"use client";
import { useEffect, useRef } from "react";
import style from "@/styles/work/branding.module.css";
import Image from "next/image";
import Heading from "@/components/Heading";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Branding = () => {
  const sliderRef = useRef(null);
  const secondSliderRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const slider = sliderRef.current;

      gsap.to(slider, {
        x: () => -slider.scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: ".trigger",
          start: "top top",
          end: () => `+=${slider.offsetWidth}`,
          scrub: 0.5,
          invalidateOnRefresh: true,
          pin: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const secondSlider = secondSliderRef.current;

      if (secondSlider) {
        gsap.to(secondSlider, {
          x: () => secondSlider.offsetWidth,
          ease: "none",
          scrollTrigger: {
            trigger: ".trigger",
            start: "top top",
            end: () => `+=${secondSlider.offsetWidth}`,
            scrub: 0.5,
          },
        });
      }
    });
    return () => ctx.revert();
  }, []);
  return (
    <section className={style.content}>
      <div className={style.container}>
        <div className={style.bran_heading}>
          <Heading
            subHeading={"Branding projects"}
            topHeading={"recent"}
            botHeading={"projects"}
            centerHeading={false}
            showSubHeading={true}
          />
        </div>
        <div className={`${style.branding} trigger`}>
          <div className={style.sliderContent} ref={sliderRef}>
            <div className={style.card}>
              <Image
                src={"/images/branding/1-min.jpg"}
                alt="pic"
                width={600}
                height={600}
                loading="lazy"
              />
            </div>
            <div className={style.card}>
              <Image
                src={"/images/branding/art-2-min.jpg"}
                alt="pic"
                width={600}
                height={600}
                loading="lazy"
              />
            </div>
            <div className={style.card}>
              <Image
                src={"/images/branding/bon-2-min.jpg"}
                alt="pic"
                width={600}
                height={600}
                loading="lazy"
              />
            </div>
            <div className={style.card}>
              <Image
                src={"/images/branding/art-3-min.jpg"}
                alt="pic"
                width={600}
                height={600}
                loading="lazy"
              />
            </div>
            <div className={style.card}>
              <Image
                src={"/images/branding/F- 7-min.jpg"}
                alt="pic"
                width={600}
                height={600}
                loading="lazy"
              />
            </div>
            <div className={style.card}>
              <Image
                src={"/images/branding/F- 5-min.jpg"}
                alt="pic"
                width={600}
                height={600}
                loading="lazy"
              />
            </div>
            <div className={style.card}>
              <Image
                src={"/images/branding/T- 6-min.jpg"}
                alt="pic"
                width={600}
                height={600}
                loading="lazy"
              />
            </div>
          </div>
          <div className={style.sliderContent} ref={secondSliderRef}>
            <div className={style.card}>
              <Image
                src={"/images/branding/T- 4-min.jpg"}
                alt="pic"
                width={600}
                height={600}
                loading="lazy"
              />
            </div>
            <div className={style.card}>
              <Image
                src={"/images/branding/T- 2 -min.jpg"}
                alt="pic"
                width={600}
                height={600}
                loading="lazy"
              />
            </div>
            <div className={style.card}>
              <Image
                src={"/images/branding/art-5-min.jpg"}
                alt="pic"
                width={600}
                height={600}
                loading="lazy"
              />
            </div>
            <div className={style.card}>
              <Image
                src={"/images/branding/OKEZ - 88 -min.jpg"}
                alt="pic"
                width={600}
                height={600}
                loading="lazy"
              />
            </div>
            <div className={style.card}>
              <Image
                src={"/images/branding/art-4-min.jpg"}
                alt="pic"
                width={600}
                height={600}
                loading="lazy"
              />
            </div>
            <div className={style.card}>
              <Image
                src={"/images/branding/OKEZ - 4-min.jpg"}
                alt="pic"
                width={600}
                height={600}
                loading="lazy"
              />
            </div>
            <div className={style.card}>
              <Image
                src={"/images/branding/OKEZ - 2 -min.jpg"}
                alt="pic"
                width={600}
                height={600}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branding;
