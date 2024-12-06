"use client";
import { useEffect } from "react";
import style from "@/styles/home/Works.module.css";
import Image from "next/image";
import Link from "next/link";
import ReactCardCarousel from "react-card-carousel";

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

  const CONTAINER_STYLE = {
    position: "relative",
    height: "500px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const CARD_STYLE = {
    height: "300px",
    width: "200px",
    paddingTop: "20px",
    textAlign: "center",
    background: "#52C0F5",
    color: "#FFF",
    fontFamily: "sans-serif",
    fontSize: "12px",
    borderRadius: "10px",
    boxShadow: "0px 10px 20px -10px rgba(0,0,0,0.75)",
  };

  return (
    <section className={style.content}>
      <div className={style.container}>
        <div className={style.heading}>
          <div className={style.title}>
            <h2>Featured work</h2>
          </div>
          <div className={style.button}>
            <button>View all work</button>
          </div>
        </div>
        <div className={style.projects}>
          <ul className={style.projects_list}>
            <ReactCardCarousel autoplay={true} autoplay_speed={2500} disable_box_shadow={false} spread={"wide"}>

              {projectsDetails.map((project, index) => (
                <li className={style.projects_item} key={index}>
                  <div className={style.picture}>
                    <img src={project.image} alt={`${project.title} picture`} />
                  </div>
                  <div className={style.services}>
                    <ul>
                      {project.services.map((service, idx) => (
                        <li key={idx}>{service}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={style.date}>
                    <span>{project.date}</span>
                  </div>
                  <div className={style.link}>
                    <Link href={project.link}>View</Link>
                  </div>
                </li>
              ))}
            </ReactCardCarousel>
             
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
