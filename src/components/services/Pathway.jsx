"use client";
import style from "@/styles/services/pathway.module.css";
import { useState } from "react";
import Heading from "@/components/Heading";

const Pathway = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handleMouseEnter = (index) => {
    if(window.innerWidth >= 800) {
      setActiveItem(index);
    } else (
      null
    )
  };
  const playSound = () => {
    if(window.innerWidth >= 800) {
      const audio = new Audio('/sound/click_sound.mp3');
      audio.play();
    }
  };
  const pathway = [
    {
      id: "01",
      title: ["projects", "strategy"],
      description: `Every masterpiece begins with vision and strategy. Our journey together starts with deep discovery - understanding your goals, audience, and unique challenges. We blend creative vision with strategic foresight, working hand-in-hand with your team to define objectives and chart a course to extraordinary results.`,
    },
    {
      id: "02",
      title: ["design", "motion"],
      description: `This is where imagination takes flight. Our team of artists, visionaries, and creative technologists craft the visual language of your brand. We blend cutting-edge design trends with timeless principles to create experiences that captivate and communicate with impact and intention.`,
    },
    {
      id: "03",
      title: ["smooth", "development"],
      description: `Where concept becomes reality. Our development experts bring designs to life with meticulous attention to functionality and user experience. We pride ourselves on clean code, responsive frameworks, and implementation that ensures your digital product performs flawlessly across all devices.`,
    },
    {
      id: "04",
      title: ["powerful", "marketing"],
      description: `Your story deserves to be heard. Our marketing strategists amplify your brand's voice across the right channels to reach and resonate with your audience. Using data-driven insights and creative storytelling, we build campaigns that drive meaningful engagement and conversions.`,
    },
    {
      id: "05",
      title: ["ongoing", "support"],
      description: `Your success journey doesn't end at launch. We provide ongoing expertise and support to ensure your digital presence continues to evolve and excel. From technical maintenance to performance optimization, our team remains your dedicated partner in growth.`,
    },
    {
      id: "06",
      title: ["future", "evolution"],
      description: `The digital landscape never stands still, and neither do we. As your partner in long-term success, we continuously analyze performance, adapt to emerging trends, and implement innovations that keep your brand at the forefront. WARDD ensures your vision matures alongside your business.`,
    },
  ];
  return (
    <section className={style.content}>
      <div className={style.container}>
      <Heading
          topHeading={"Our pathway"}
          botHeading={"to success"}
          centerHeading={false}
          showSubHeading={false}
        />
        <div className={style.pathway_cards}>
          {pathway.map((card, index) => (
            <article
              className={`${style.pathway_card} item_${index + 1}
            ${activeItem === index ? `${style.active}` : ""}
            `}
              key={index}
              onMouseEnter={() => {
                handleMouseEnter(index)
                playSound()
              }}
            >
              <div className={style.inner}>
                <div className={style.pathway_number}>
                  <span className={style.point}></span>
                  <span className={style.number}>{card.id}</span>
                </div>
                <div>
                  <div className={style.pathway_title}>
                    <div>
                      <h1>
                        {card.title[0]}
                        <br />
                        {card.title[1]}
                      </h1>
                    </div>
                  </div>
                  <div className={style.pathway_description}>
                    <p>{card.description}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pathway;