"use client";
import { useEffect } from "react";
import style from "@/styles/home/Works.module.css";
import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/Heading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const RecentWorks = () => {
  const projectsDetails = [
    {
      id: "01.",
      key: 1,
      image: "/images/bg/crip.webp",
      link: '/work/crib',
      type: "Architectural company",
      title: "Crib",
      services: ["design", "development", "branding"],
    },
    {
      id: "02.",
      key: 'projectTwo',
      image: "/images/bg/lawyer.webp",
      link: '/work/lawyer-sulaiman',
      type: "Law firm",
      title: "Lawyer Sulaiman",
      services: ["design", "development", "branding"],
    },
    {
      id: "03.",
      key: 'projectThree',
      image: "/images/bg/smiley.webp",
      link: '/work/smiley',
      type: "Dental Clinic",
      title: "Smiley",
      services: ["design", "development", "branding"],
    },
  ];
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    projectsDetails.forEach((project, index) => {
      const card = document.querySelector(`.project__${index + 1}`);
      gsap.fromTo(
        card.querySelectorAll(".proj_title"),
        {
          y: "100%",
        },
        {
          y: 0,
          scrollTrigger: {
            trigger: card,
            start: "bottom 96%",
            end: "bottom 96%",
            ease: "power4.inOut",
            duration: 1,
          },
        }
      );
      const staggerValue = window.innerWidth >= 800 ? -0.2 : 0.2;
      gsap.fromTo(
        card.querySelectorAll(".services_item"),
        {
          x: "-100%",
        },
        {
          x: 0,
          stagger: staggerValue,
          scrollTrigger: {
            trigger: card,
            start: "bottom 96%",
            end: "bottom 96%",
            ease: "power4.inOut",
            duration: 0.5,
          },
        }
      );

      gsap.fromTo(
        card.querySelectorAll(".project___id"),
        {
          y: "100%", 
        },
        {
          y: 0,
          scrollTrigger: {
            trigger: card,
            start: "20% bottom",
            end: "center center",
            duration: 0.5,
          },
        }
      );
    });
  }, []);
 
  return (
    <section className={style.content}>
      <div className={style.container}>
        <Heading
          subHeading={"Projects"}
          topHeading={"recent"}
          botHeading={"projects"}
          centerHeading={false}
          showSubHeading={true}
        />
        <div className={style.projects_cards}>
          {projectsDetails.map((project, index) => (
            <div
              className={`${style.project} project__${index + 1}`}
              key={index}
            >
              <div className={`${style.part_un}`}>
                <h1 className="project___id">{project.id}</h1>
              </div>
              <div className={style.part_deux}>
                <Link
                  href={`${project.link}`}
                  aria-label={`${project.title}`}
                >
                  <div className={`${style.bg}`}>
                    <Image
                      src={`${project.image}`}
                      alt="pic"
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className={style.details}>
                    <div className={style.type}>
                      <span>{project.type}</span>
                    </div>
                    <div className={style.bottom}>
                      <div className={style.title}>
                        <h3 className="proj_title">{project.title}</h3>
                      </div>
                      <div className={style.services}>
                        <ul>
                          {project.services.map((service, i) => (
                            <li key={i}>
                              <div className="services_item">
                                <span>{service}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
