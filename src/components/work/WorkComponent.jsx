"use client";
import { useEffect } from "react";
import style from "@/styles/work/work.module.css";
import { projectDetails } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import "@/styles/work/gallery.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WorkComponent = () => {
  useEffect(() => {
    const name = document.querySelectorAll(".name");
    name.forEach((name) => {
      name.setAttribute("data-text", name.textContent);
    });
  }, []);


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    projectDetails.forEach((project, index) => {
      const card = document.querySelector(`.proj_${index + 1}`);
      
      if (card) {
        gsap.fromTo(
          card,
          {
            y: "-100%",
          },
          {
            y: 0,
            borderBottom: '1.3px solid var(--light-grey)',
            duration: 0.2,
            delay: index * 0.2
          }
        );
      }
    });
  }, []);
  

  return (
    <section className={style.content}>
      <div className={style.container}>
        <div className={style.work_lists}>
          {projectDetails.map((project, index) => (
            <div
              className={`${style.project_inner} overflow-hidden`}
              key={index}
            >
              <div className={`${style.project} proj_${index + 1}`}>
                <div className={style.project_details}>
                  <div className={style.project_left_part}>
                    <div className={style.project_id}>
                      <span>
                        project / <span>{project.number}</span>
                      </span>
                    </div>
                    <div className={style.project_name}>
                      <h1 className="name">{project.name}</h1>
                    </div>
                  </div>
                  <div className={style.project_right_part}>
                    <div className={style.project_material}>
                      <span>{project.material}</span>
                    </div>
                    <div className={style.project_arrow}>
                      <span>→</span>
                      <Link
                        href={`${project.page}`}
                        className={style.project_external}
                      ></Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className={style.project_gallery}>
                <div className={`${style.image_one} img-1`}>
                  <Image
                    src={`${project.images.one}`}
                    alt={"image"}
                    width={180}
                    height={180}
                  />
                </div>
                <div className={`${style.image_four} img-4`}>
                  <Image
                    src={`${project.images.four}`}
                    alt={"image"}
                    width={180}
                    height={180}
                  />
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkComponent;
