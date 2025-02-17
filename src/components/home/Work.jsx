"use client";
import { useEffect } from "react";
import style from "@/styles/home/Works.module.css";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

const RecentWorks = () => {
  const projectsDetails = [
    {
      date: "2024",
      image:
        "https://res.cloudinary.com/decjm9mmr/image/upload/q_30,f_auto/post_akms4e.jpg",
      link: "/work/okez",
      title: "Okez",
      // services: ["design", "development"],
    },
    {
      date: "2024",
      image:
        "https://res.cloudinary.com/decjm9mmr/image/upload/q_30,f_auto/post_rwbt0g.jpg",
      link: "/work/fedaki",
      title: "Fedaki",
      // services: ["design", "development"],
    },
    {
      date: "2024",
      image:
        "https://res.cloudinary.com/decjm9mmr/image/upload/q_30,f_auto/post_mix00x.png",
      link: "/work/wafa-assurance",
      title: "Wafa Assurance",
      services: ["design", "development"],
    },
    {
      date: "2024",
      image:
        "https://res.cloudinary.com/decjm9mmr/image/upload/q_30,f_auto/post_tleq2p.jpg",
      link: "/work/molhim",
      title: "Molhim Podcast",
      // services: ["design", "development"],
    },
    {
      date: "2024",
      image:
        "https://res.cloudinary.com/decjm9mmr/image/upload/q_30,f_auto/post_gyz5fk.png",
      link: "/work/smiley",
      title: "Smiley",
      // services: ["design", "development"],
    },
    {
      date: "2024",
      image:
        "https://res.cloudinary.com/decjm9mmr/image/upload/q_30,f_auto/post_uzznss.jpg",
      link: "/work/tajer",
      title: "Tajer",
      // services: ["design", "development"],
    },

    {
      date: "2024",
      image:
        "https://res.cloudinary.com/decjm9mmr/image/upload/q_30,f_auto/Stretched_1_hjoiei.jpg",
      link: "/work/stretchedweb",
      title: "Stretchedweb",
      services: ["design", "development"],
    },

    {
      date: "2024",
      image:
        "https://res.cloudinary.com/decjm9mmr/image/upload/q_20,f_auto/WARDD_MUSIC_BRANDIGN_SITE__x1jz21.png",
      link: "/work/wardd-music",
      title: "Wardd Music",
      services: ["design", "development"],
    },
    {
      date: "2024",
      image:
        "https://res.cloudinary.com/decjm9mmr/image/upload/q_30,f_auto/post_jfbbzh.png",
      link: "/work/van-log",
      title: "Van Log",
      services: ["design", "development"],
    },
    {
      date: "2024",
      image:
        "https://res.cloudinary.com/decjm9mmr/image/upload/q_30,f_auto/post_qhvzep.jpg",
      link: "/work/al-amyal-chasaa",
      title: "Al Amyal Al chasaa",
      services: ["design", "development"],
    },
  ];
  const boxStyle = {
    width: 390,
    height: 510,
    borderRadius: 15,
    overflow: "hidden",
    "@media (max-width: 600px)": {
      width: 340,
      height: 400
    },
  };

  return (
    <section className={style.content}>
      <div className={style.container}>
        <div className={style.heading}>
          <div className={style.title}>
            <h2>Featured work</h2>
          </div>
          <div className={style.button}>
            <Link href="/work">
              <button>All work</button>
            </Link>
          </div>
        </div>
        <div className={style.projects}>
          <ul className={style.projects_list}>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              modules={[EffectCoverflow, Pagination]}
              className={style.myswipper}
            >
              {projectsDetails.map((project, index) => (
                <SwiperSlide style={{width: "max-content"}} className={style.swipper} key={index}>
                  <li style={boxStyle} className={style.projects_item}>
                    <div className={style.picture}>
                      <img
                        src={project.image}
                        alt={`${project.title} picture`}
                      />
                    </div>
                    {/* <div className={style.services}>
                      <ul>
                        {project.services.map((service, idx) => (
                          <li key={idx}>{service}</li>
                        ))}
                      </ul>
                    </div> */}
                    {/* <div className={style.date}>
                      <span>{project.date}</span>
                    </div> */}
                    <div className={style.link}>
                      <Link href={project.link}>See project</Link>
                    </div>
                  </li>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* </ReactCardCarousel> */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
