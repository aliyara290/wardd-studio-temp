"use client";
import { useEffect } from "react";
import style from "@/styles/services/ServicePageStyle/hero.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const ServiceHero = ({ src}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".ticker_anim",
      {
        y: "100%",
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.5,
        duration: 0.7,
      }
    );
  }, []);
  return (
    <div className={style.content} id="hero">
      <div className={style.container}>
      <div className={`${style.ticker} ticker_anim`}>
          <ul aria-hidden="true">
            {Array.from({ length: 7 }, (_, i) => (
              <li key={i}>
                Web Design – Development – Wireframe – SEO – UX/UI –
              
              </li>
            ))}
          </ul>
          <ul>
            {Array.from({ length: 7 }, (_, i) => (
              <li key={i}>
                Web Design – Development – Wireframe – SEO – UX/UI –
               
              </li>
            ))}
          </ul>
        </div>
        <div className={style.background}>
          <Image 
          src={src}
          alt="background"
          width={900}
          height={900}
          loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
