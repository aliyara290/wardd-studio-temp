"use client";
import { useState } from "react";
import style from "@/styles/home/partnership.module.css";
import Image from "next/image";
import Heading from "@/components/Heading";

const Partnership = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track the hovered card

  const partnerships = [
    { logo: "/icons/clients/uit.png" },
    { logo: "/icons/clients/wafa.png" },
    { logo: "/icons/clients/EL RAYAN.png" },
    { logo: "/icons/clients/ikea.png" },
    { logo: "/icons/clients/logo white_1.png" },
    { logo: "/icons/clients/FRMJ@4x.png" },
    { logo: "/icons/clients/9.png" },
    { logo: "/icons/clients/10.png" },
    { logo: "/icons/clients/wafa.png" },
    { logo: "/icons/clients/erm.png" },
    { logo: "/icons/clients/7.png" },
    { logo: "/icons/clients/2.png" },
    { logo: "/icons/clients/3.png" },
    { logo: "/icons/clients/4.png" },
    { logo: "/icons/clients/5.png" },

  ];

  const handleMouseMove = (index) => {
    setHoveredIndex(index); // Set the hovered card index
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null); // Reset the hover state when the mouse leaves
  };

  return (
    <section className={style.content}>
      <div className={style.container}>
        <Heading
          topHeading={"Join our"}
          botHeading={"expanded family"}
          showThirdHeading={false}
          centerHeading={false}
          showSubHeading={false}
        />
        <div className={style.slider} onMouseLeave={handleMouseLeave}>
          {partnerships.map((client, index) => (
            <div
              key={index}
              className={style.client}
              onMouseMove={() => handleMouseMove(index)}
              
              style={{
                opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.3, // Highlight or dim
                cursor: "pointer", // Indicate interactivity
              }}
            >
              <Image
                src={client.logo}
                alt="logo"
                width={200}
                height={200}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnership;
