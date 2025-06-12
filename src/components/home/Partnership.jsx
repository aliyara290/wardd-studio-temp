"use client";
import { useState } from "react";
import style from "@/styles/home/partnership.module.css";
import Image from "next/image";
import Heading from "@/components/Heading";

const Partnership = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track the hovered card

  const partnerships = [
    { logo: "https://res.cloudinary.com/decjm9mmr/image/upload/q_20,f_auto/uit_hgpgve.png" },
    { logo: "https://res.cloudinary.com/decjm9mmr/image/upload/q_20,f_auto/erm_tfdytc.png" },
    { logo: "https://res.cloudinary.com/decjm9mmr/image/upload/q_20,f_auto/9_uynpx4.png" },
    // { logo: "https://res.cloudinary.com/decjm9mmr/image/upload/q_20,f_auto/factory_klkk0r.png" },
    { logo: "https://res.cloudinary.com/decjm9mmr/image/upload/q_20,f_auto/10_fdumho.png" },
    { logo: "https://res.cloudinary.com/decjm9mmr/image/upload/q_20,f_auto/EL_RAYAN_ycio1a.png" },
     { logo: "https://res.cloudinary.com/dylpck2et/image/upload/v1748984245/infasme_logo_white_300x_go6nlh.png" },
    // { logo: "https://res.cloudinary.com/dylpck2et/image/upload/v1748984245/white_logo_transparent_background_amtm9u.png" },
    { logo: "https://res.cloudinary.com/decjm9mmr/image/upload/q_20,f_auto/7_o0ytu1.png" },
    // { logo: "https://res.cloudinary.com/decjm9mmr/image/upload/q_20,f_auto/6_aqhxqm.png" },
    { logo: "https://res.cloudinary.com/decjm9mmr/image/upload/q_20,f_auto/4_psnnm8.png" },
    { logo: "https://res.cloudinary.com/decjm9mmr/image/upload/q_20,f_auto/5_njghr3.png" },
    { logo: "https://res.cloudinary.com/decjm9mmr/image/upload/q_20,f_auto/FRMJ_4x_vyrlhi.png" },
    { logo: "https://res.cloudinary.com/decjm9mmr/image/upload/q_20,f_auto/2_keklki.png" },
    { logo: "https://res.cloudinary.com/decjm9mmr/image/upload/q_20,f_auto/3_rkubwi.png" },
   { logo: "https://res.cloudinary.com/dylpck2et/image/upload/v1748985116/gitex-logo-white_sklvau.png " },
   { logo: "https://res.cloudinary.com/dylpck2et/image/upload/v1748984245/white_logo_transparent_background_amtm9u.png" },
    { logo: "https://res.cloudinary.com/decjm9mmr/image/upload/q_20,f_auto/wafa_pxydvs.png" },

    

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
                cursor: "pointer",
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
