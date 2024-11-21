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
      description: `Every project is a canvas where we blend creative vision with strategic foresight. From the initial spark of an idea to the final flourish of execution, our seasoned strategists work hand-in-hand with your team to define goals, streamline processes, and chart a course to success`,
    },
    {
      id: "02",
      title: ["design", "motion"],
      description: `Our team is a collective of artists, visionaries, and technophiles, all dedicated to creating immersive experiences that transcend boundaries. We blend cutting-edge technology with artistic finesse to create visuals that not only captivate but also communicate messages with impact`,
    },
    {
      id: "03",
      title: ["smooth", "development"],
      description: `We take pride in our meticulous approach, ensuring every element of your website functions seamlessly. From responsive design that adapts to any device, to smooth navigation that guides users effortlessly, we ensure your visitors are engaged from the very first click.`,
    },
    {
      id: "04",
      title: ["powerful", "marketing"],
      description: `We're not just marketers; we're storytellers, data analysts, and strategists who thrive on creating connections that drive results. With our arsenal of tools, insights, and creativity, we build campaigns that resonate with your audience and make an impact that lasts.`,
    },
    {
      id: "05",
      title: ["ongoing", "support"],
      description: `In the ever-evolving digital landscape, your website isn't a static entity; it's a living, breathing representation of your brand. At Stretchedweb, we understand that consistent, reliable support is essential to ensure your online presence remains dynamic and impactful.`,
    },
    {
      id: "06",
      title: ["future", "evolution"],
      description: `From immersive user experiences to AI-driven personalization, we're your digital architects for the future. Embracing change is key, and we're here to guide you. With Stretchedweb, it's not just a website; it's an evolution that keeps your brand relevant and remarkable.`,
    },
  ];
  return (
    <section className={style.content}>
      <div className={style.container}>
      <Heading
          topHeading={"Our pathway"}
          botHeading={"to success"}
          centerHeading={true}
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
