"use client";
import style from "@/styles/home/rules.module.css";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Heading from "@/components/Heading";
gsap.registerPlugin(ScrollTrigger);

const OurRules = ({cardDedtails, fHeading, sHeading}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray(".card__jrk4");
    const description = gsap.utils.toArray(".studio_card_title");

    description.forEach((desc) => {
      gsap.fromTo(
        desc,
        {
          y: "160%",
        },
        {
          y: 0,
          duration: 0.5,
          delay: 0.3,
          scrollTrigger: {
            trigger: cards,
            start: "center bottom",
            end: "top bottom",
          },
        }
      );
    });
  }, []);
  return (
    <section className={`${style.content}`}>
      <div className={`${style.container}`}>
        <Heading
          topHeading={fHeading}
          botHeading={sHeading}
          centerHeading={true}
          showSubHeading={false}
        />
        <div className={`${style.rules_cards}`}>
          <div className={style.rules_cards__content}>
            {cardDedtails.map((card, index) => (
              <div className={style.crd} key={index}>
                <div className={`${style.rule_card} card__jrk4`}>
                  <div className={style.rule_top}>
                    <div className={style.rule_id}>
                      <span className={style.point}></span>
                      <span>{card.heading}</span>
                      <span className={style.rule_number}>{card.number}</span>
                    </div>
                    <div className={style.rule_title}>
                      <h4>{card.title}</h4>
                    </div>
                  </div>
                  <div className={style.rule_description}>
                    <p className="studio_card_title">{card.description}</p>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurRules;
