"use client";
import { useEffect } from "react";
import style from "@/styles/services/ServicePageStyle/carousel.module.css";
import Image from "next/image";
import Heading from '@/components/Heading'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ServiceCarousel = ({ cardsData }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray(".card__jr20");
    const description = gsap.utils.toArray(".card__description");

    description.forEach((desc) => {
      gsap.fromTo(
        desc,
        {
          y: "100%",
        },
        {
          y: 0,
          duration: 0.5,
          delay: 0.3,
          scrollTrigger: {
            trigger: cards,
            start: "center bottom",
            end: "bottom bottom",
            markers: true 
          },
        }
      );
    });
  }, []);
  return (
    <div className={style.content}>
      <div className={style.container}>
      <Heading
          topHeading={"Service"}
          botHeading={"Description"}
          centerHeading={true}
          showSubHeading={false}
        />
        <div className={style.carousel}>
          <div className={style.cards}>
            {cardsData.map((card, index) => (
              <div className={`${style.card} .card__jr20`} key={index}>
                <div className={style.top_part}>
                  <div className={style.card_header}>
                    <span className={style.heading_point}></span>
                    <h4>{card.title}</h4>
                  </div>
                  <div className={style.title}>
                    <h3>{card.heading}</h3>
                  </div>
                </div>
                <div className={style.description}>
                  <p className="card__description">{card.description}</p>
                </div>
                <div className={style.o_spider}>
                    <Image
                      src="/images/bg/o-spider.svg"
                      alt="spider"
                      width={40}
                      height={40}
                    />
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCarousel;
