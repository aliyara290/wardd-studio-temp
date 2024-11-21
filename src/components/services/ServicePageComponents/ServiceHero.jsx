"use client";
import { useEffect } from "react";
import style from "@/styles/services/ServicePageStyle/hero.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ServiceHero = ({ name, subName, firstBio }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".service_hero_title",
      {
        y: "100%",
      },
      {
        y: 0,
        delay: 0.2,
        duration: 0.4,
        stagger: 0.3,
      }
    );
    gsap.fromTo(
      '.hero__bio',
      {
        y: "150%",
      },
      {
        y: 0,
        delay: 0.5,
        duration: 0.4,
      }
    );
  }, []);
  return (
    <div className={style.content} id="hero">
      <div className={style.container}>
        <div className={style.absolute_text}>
          <div className={style.bold_texts}>
            <div className="overflow-hidden">
              <h1 className="service_hero_title t-active">{name}</h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="service_hero_title b-active">{subName}</h1>
            </div>
          </div>
        </div>
        <div className={style.service_bio}>
          <div className={`${style.service_bio_content} hero__bio`}>
            <div className={style.bio_header}>
              <span className={style.heading_point}></span>
              <h4>The service</h4>
            </div>
            <div className={style.bio_text}>
              <p>{firstBio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
