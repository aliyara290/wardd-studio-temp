"use client";
import { useEffect, useRef } from "react";
import style from "@/styles/home/partnership.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "@/components/Heading";

const Partnership = () => {
  const partnerships = [
    {
      logo: "/icons/clients/1.png",
    },
    {
      logo: "/icons/clients/2.png",
    },
    {
      logo: "/icons/clients/3.png",
    },
    {
      logo: "/icons/clients/4.png",
    },
    {
      logo: "/icons/clients/5.png",
    },
    {
      logo: "/icons/clients/6.png",
    },
    {
      logo: "/icons/clients/7.png",
    },
    {
      logo: "/icons/clients/8.png",
    },
    {
      logo: "/icons/clients/9.png",
    },
    {
      logo: "/icons/clients/10.png",
    },
    {
      logo: "/icons/clients/6.png",
    },
    {
      logo: "/icons/clients/7.png",
    },
    {
      logo: "/icons/clients/8.png",
    },
    {
      logo: "/icons/clients/9.png",
    },
    {
      logo: "/icons/clients/10.png",
    },
  ];

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
        <div className={style.slider}>
          {partnerships.map((client) => (
            <div className={style.client}>
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
