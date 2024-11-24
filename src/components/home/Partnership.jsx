"use client";
import { useEffect, useRef } from "react";
import style from "@/styles/home/partnership.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "@/components/Heading";

gsap.registerPlugin(ScrollTrigger);

const Partnership = () => {
  const sliderRef = useRef(null);
  const secondSliderRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const slider = sliderRef.current;

      gsap.to(slider, {
        x: () => -slider.scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: ".client",
          start: "top top",
          end: () => `+=${slider.offsetWidth}`,
          scrub: 1,
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
            trigger: ".client",
            start: "top top",
            end: () => `+=${secondSlider.offsetWidth}`,
            scrub: 1,
          },
        });
      }
    });
    return () => ctx.revert();
  }, []);
  return (
    <section className={style.content}>
      <div className={style.container}>
        <div className={style.partnership_con}>
        <Heading
          topHeading={"Join our"}
          botHeading={"expanded "}
          thirdHeading={"family"}
          showThirdHeading={true}
          centerHeading={false}
          showSubHeading={false}
        />
         
        </div>
        <div className={`${style.slider} client`}>
          <div className={`${style.clients} `}>
            <div className={style.sliderContent} ref={sliderRef}>
              <div className={style.card}>
                <Image
                  src={"/icons/clients/1.png"}
                  alt="pic"
                  width={100}
                  height={100}
                />
              </div>
              <div className={style.card}>
                <Image
                  src={"/icons/clients/2.png"}
                  alt="pic"
                  width={120}
                  height={120}
                />
              </div>
              <div className={style.card}>
                <Image
                  src={"/icons/clients/3.png"}
                  alt="pic"
                  width={100}
                  height={100}
                />
              </div>
              <div className={style.card}>
                <Image
                  src={"/icons/clients/4.png"}
                  alt="pic"
                  width={130}
                  height={130}
                />
              </div>
              <div className={style.card}>
                <Image
                  src={"/icons/clients/5.png"}
                  alt="pic"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className={style.sliderContent} ref={secondSliderRef}>
              <div className={style.card}>
                <Image
                  src={"/icons/clients/6.png"}
                  alt="pic"
                  width={100}
                  height={100}
                />
              </div>
              <div className={style.card}>
                <Image
                  src={"/icons/clients/7.png"}
                  alt="pic"
                  width={100}
                  height={100}
                />
              </div>
              <div className={style.card}>
                <Image
                  src={"/icons/clients/8.png"}
                  alt="pic"
                  width={100}
                  height={100}
                />
              </div>
              <div className={style.card}>
                <Image
                  src={"/icons/clients/9.png"}
                  alt="pic"
                  width={100}
                  height={100}
                />
              </div>
              <div className={style.card}>
                <Image
                  src={"/icons/clients/10.png"}
                  alt="pic"
                  width={130}
                  height={130}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
