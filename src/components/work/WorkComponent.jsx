"use client";
import { useState, useEffect } from "react";
import style from "@/styles/work/work.module.css";
import { projectDetails } from "@/data/projects";
import "@/styles/work/gallery.css";
import Link from "next/link";
import { gsap } from "gsap"; // Import GSAP

const WorkComponent = () => {
  const [filter, setFilter] = useState("All"); // State to track selected filter
  const [filteredProjects, setFilteredProjects] = useState(projectDetails); // State to track filtered projects

  useEffect(() => {
    gsap.fromTo(
      `.${style.work_card}`,
      {
        y: 70,
        scale: 0.8
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 0.3,
        stagger: 0.1,
      }
    );
  }, [filteredProjects]);

  const handleFilterChange = (filter) => {
    setFilter(filter); // Update the selected filter
    if (filter === "All") {
      setFilteredProjects(projectDetails); // Show all projects when "All" is selected
    } else {
      const filtered = projectDetails.filter((project) =>
        Object.values(project.services).includes(filter)
      );
      setFilteredProjects(filtered); // Update the filtered projects
    }
  };

  return (
    <section className={style.content}>
      <div className={style.container}>
        <div className={style.bold_text}>
          <div className={style.text}>
            <h1 className="studio_hero_heading">Work.</h1>
          </div>
        </div>


        <div className={style.cross_line}></div>



        {/* Filter Buttons */}
        <div className={style.filter}>
          <ul>
            {["All", "Websites", "Branding", "Social Media", "Website Design", "Advertising"].map(
              (service) => (
                <li key={service}>
                  <button
                    className={`${style.button} ${filter === service ? style.active : ""}`}
                    onClick={() => handleFilterChange(service)}
                  >
                    {service}
                  </button>
                </li>
              )
            )}
            <li>
              <button className={style.button} onClick={() => handleFilterChange("All")}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 18 18"
                    fill="var(--white)"
                  >
                    <g id="Gruppe_1904" transform="translate(-629 -298)">
                      <g id="_01_align_center" transform="translate(633.127 302.15)">
                        <path
                          id="Pfad_741"
                          d="M8.908,4.849A4.055,4.055,0,1,1,7.745,2.021H6.079v.808H8.157a.751.751,0,0,0,.75-.75V0H8.1V1.244A4.843,4.843,0,1,0,9.716,4.849Z"
                          transform="translate(0)"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </span>
                <span>Reset</span>
              </button>
            </li>
          </ul>
        </div>

        <div className={style.work_lists}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div key={index} className={style.work_card}>
                <Link href={project.page}>
                  <div className={style.picture}>
                    <img src={project.post || "/images/bg/work_test.jpg"} alt={project.name} />
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p className={style.no_projects}>No projects found for "{filter}"</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default WorkComponent;
