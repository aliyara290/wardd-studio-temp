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
      image: "/images/bg/test.avif",
      link: "/work/crib",
      type: "Architectural company",
      title: "Crib",
      services: ["design", "development"],
    },
    {
      date: "2024",
      image: "/images/web_design/01 stretched.webp",
      link: "/work/lawyer-sulaiman",
      type: "Law firm",
      title: "Lawyer Sulaiman",
      services: ["design", "development"],
    },
    {
      date: "2024",
      image: "/images/social-media/03.jpg",
      link: "/work/smiley",
      type: "Dental Clinic",
      title: "Smiley",
      services: ["design", "development"],
    },
    {
      date: "2024",
      image: "/images/web_design/03 stretched.webp",
      link: "/work/smiley",
      type: "Dental Clinic",
      title: "Smiley",
      services: ["design", "development"],
    },
    {
      date: "2024",
      image: "/images/branding/OKEZ - 1-min.jpg",
      link: "/work/smiley",
      type: "Dental Clinic",
      title: "Smiley",
      services: ["design", "development"],
    },
    {
      date: "2024",
      image: "/images/social-media/01.jpg",
      link: "/work/smiley",
      type: "Dental Clinic",
      title: "Smiley",
      services: ["design", "development"],
    },
    {
      date: "2024",
      image: "/images/branding/art-2-min.jpg",
      link: "/work/smiley",
      type: "Dental Clinic",
      title: "Smiley",
      services: ["design", "development"],
    },
  ];

  return (
    <section className={style.content}>
      <div className={style.container}>
        <div className={style.heading}>
          <div className={style.title}>
            <h2>Featured work</h2>
          </div>
          <div className={style.button}>
            <button>All work</button>
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
                <SwiperSlide className={style.swipper}  key={index}>
                  <li className={style.projects_item}>
                    <div className={style.picture}>
                      <img
                        src={project.image}
                        alt={`${project.title} picture`}
                      />
                    </div>
                    <div className={style.services}>
                      <ul>
                        {project.services.map((service, idx) => (
                          <li key={idx}>{service}</li>
                        ))}
                      </ul>
                    </div>
                    {/* <div className={style.date}>
                      <span>{project.date}</span>
                    </div> */}
                    <div className={style.link}>
                      <Link href={project.link}>View</Link>
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
