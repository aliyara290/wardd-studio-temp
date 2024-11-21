"use client";
import { useEffect } from "react";
import style from "@/styles/services/services.module.css";
import { ServiceData } from "@/data/services";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

const Services = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ServiceData.forEach((service, index) => {
      const card = document.querySelector(`.serv_${index + 1}`);
      gsap.fromTo(
        card.querySelectorAll(".card_id"),
        {
          y: "100%",
        },
        {
          y: 0,
          delay: 0.4,
          scrollTrigger: {
            trigger: card,
            start: "80% bottom",
            end: "center center",
            ease: "power4.inOut",
            duration: 1,
          },
        }
      );

      gsap.fromTo(
        card.querySelectorAll(".title__"),
        {
          y: "100%",
        },
        {
          y: 0,
          scrollTrigger: {
            trigger: card,
            start: "80% bottom",
            end: "center center",
            ease: "power4.inOut",
            duration: 1,
          },
        }
      );

      gsap.fromTo(
        card.querySelectorAll(".keywords_item"),
        {
          y: "100%",
        },
        {
          y: 0,
          delay: 0.2,
          stagger: 0.1,
          scrollTrigger: {
            trigger: card,
            start: "80% bottom",
            end: "center center",
            ease: "power4.inOut",
            duration: 1,
          },
        }
      );
    });
  }, []);

  return (
    <section className={style.content}>
      <div className={style.container}>
        <div className={style.ticker}>
          <ul aria-hidden="true">
            {Array.from({ length: 7 }, (_, i) => (
              <li key={i}>Services</li>
            ))}
          </ul>
          <ul>
            {Array.from({ length: 7 }, (_, i) => (
              <li key={i}>Services</li>
            ))}
          </ul>
        </div>
        <div className={style.services_card}>
          <ul className={style.cards}>
            {ServiceData.map((service, index) => (
              <li key={index} className={`${style.card} serv_${index + 1}`}>
                <div className={style.card_content}>
                  <div className={style.top_part}>
                    <div className={style.title}>
                      <h1 className="title__">{service.title}</h1>
                    </div>
                  </div>
                  <div className={style.bottom_part}>
                    <div className={style.keywords}>
                      <ul>
                        {service.keyword.map((keyword, i) => (
                          <div className="overflow-hidden">
                            <li key={i} className="keywords_item">
                              <span>{keyword}</span>
                            </li>
                          </div>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={`${style.absolute}`}>
                    <div className={style.abs_content}>
                      <span className="card_id">{service.id}.</span>
                    </div>
                  </div>
                </div>
                <Link
                  href={`${service.link}`}
                  className={style.service_link}
                ></Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
