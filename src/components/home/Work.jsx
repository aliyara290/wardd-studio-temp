"use client";
import { useEffect } from "react";
import style from "@/styles/home/Works.module.css";
import Image from "next/image";
import Link from "next/link";

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
      image: "/images/bg/test.avif",
      link: "/work/lawyer-sulaiman",
      type: "Law firm",
      title: "Lawyer Sulaiman",
      services: ["design", "development"],
    },
    {
      date: "2024",
      image: "/images/bg/test.avif",
      link: "/work/smiley",
      type: "Dental Clinic",
      title: "Smiley",
      services: ["design", "development"],
    },
    {
      date: "2024",
      image: "/images/bg/test.avif",
      link: "/work/smiley",
      type: "Dental Clinic",
      title: "Smiley",
      services: ["design", "development"],
    },
    {
      date: "2024",
      image: "/images/bg/test.avif",
      link: "/work/smiley",
      type: "Dental Clinic",
      title: "Smiley",
      services: ["design", "development"],
    },
    {
      date: "2024",
      image: "/images/bg/test.avif",
      link: "/work/smiley",
      type: "Dental Clinic",
      title: "Smiley",
      services: ["design", "development"],
    },
    {
      date: "2024",
      image: "/images/bg/test.avif",
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
            <button>View all work</button>
          </div>
        </div>
        <div className={style.projects}>
          <ul className={style.projects_list}>
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
             
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
