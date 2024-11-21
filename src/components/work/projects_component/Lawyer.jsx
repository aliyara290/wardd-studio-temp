"use client";
import style from "@/styles/work/project_page/project.module.css";
import { projectDetails } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Lawyer = ({ deviceType }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const bonpainProject = projectDetails.find(
    (project) => project.name === "Lawyer Sulaiman"
  );

  if (bonpainProject) {
    const { number, name, material, bio, description, images, services, live } =
      bonpainProject;
    return (
      <div className={style.content} id="hero">
        <div className={style.container}>
          <div className={style.inner}>
            <div className={style.hero_content}>
              <div className={`${style.GallerySlider} slider`}>
                <div className={style.slider_content}>
                  <Carousel
                    responsive={responsive}
                    draggable={true}
                    customTransition="all .5s ease"
                    ssr={true}
                    keyBoardControl={true}
                  >
                    {Object.keys(images).map((key) => (
                      <div className={style.card} key={key}>
                        <div className={`${style.card_content} card`}>
                          <Image
                            src={images[key]}
                            alt="pic"
                            width={700}
                            height={700}
                            loading={"lazy"}
                          />
                        </div>
                      </div>
                    ))}
                  </Carousel>
                  <div className={style.slide_ef_top}>
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1000 13"
                    >
                      <path
                        d="M1000,96A9621,9621,0,0,1,0,96Z"
                        transform="translate(0 -96)"
                      />
                    </svg>
                  </div>
                  <div className={style.slide_ef_bottom}>
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1000 13"
                    >
                      <path
                        d="M1000,96A9621,9621,0,0,1,0,96Z"
                        transform="translate(0 -96)"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className={style.hero__bottom}>
                <div className={style.info}>
                  <div className={style.info_top}>
                    <div className={style.number}>
                      <span>project / {number}</span>
                    </div>
                    <div className={style.material}>
                      <span>{material}</span>
                    </div>
                  </div>
                  <div className={style.info_bottom}>
                    <div className={style.name}>
                      <h1>{name}</h1>
                    </div>
                    <div className={style.bio}>
                      <p>{bio}</p>
                    </div>
                  </div>
                  <div className={style.horizontal_line}></div>
                </div>
                <div className={style.work_detail_footer}>
                  <div className={style.explore}>
                    <div className={style.left_part}>
                      <div className={style.prev_next}>
                        <Link href={"/work/crib"}>
                          <span className="text-xl">◂</span>
                          <span>prev</span>
                        </Link>
                      </div>
                      <div className={style.footer_horizontal_line}></div>
                      <div className={style.projects_links}>
                        <ul>
                          <li>
                            <Link href={"/work/crib"}>
                              <span>01/</span>
                            </Link>
                          </li>
                          <li>
                            <Link href={"/work/lawyer-sulaiman"}>
                              <span>
                                <span className={style.active}>02/</span>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href={"/work/gourmet-grove"}>
                              <span>03/</span>
                            </Link>
                          </li>
                          <li>
                            <Link href={"/work/modavista"}>
                              <span>04/</span>
                            </Link>
                          </li>
                          <li>
                            <Link href={"/work/smiley"}>
                              <span>05/</span>
                            </Link>
                          </li>
                          <li>
                            <Link href={"/work/wardd-studio"}>
                              <span>06/</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className={style.footer_horizontal_line}></div>
                      <div className={style.prev_next}>
                        <Link href={"/work/gourmet-grove"}>
                          <span>next</span>
                          <span className="text-xl">▸</span>
                        </Link>
                      </div>
                    </div>
                    <div className={style.all_work}>
                      <Link href={"/work"}>All Work</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.projects_details}>
              <div className={style.horizontal_line}></div>
              <div className={style.project_deep}>
                <div className={style.project_services}>
                  <h1>services</h1>
                  {Object.keys(services).map((key) => (
                    <ul key={key}>
                      <li>{services[key]}</li>
                    </ul>
                  ))}
                  <div className={`${style.live_web}`}>
                    <a
                      href={`${live}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h2>Live Website</h2>
                      <span>
                        <svg
                          id="Layer_1"
                          data-name="Layer 1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 35.01 35.02"
                        >
                          <path
                            d="M8,17.11c.05-.24.1-.48.16-.72a5.8,5.8,0,0,1,5.6-4.47c2.6,0,5.2,0,7.79,0a1.95,1.95,0,1,1,0,3.89c-2.5,0-5,0-7.52,0a2.07,2.07,0,0,0-2.16,2.15c0,6.36,0,12.71,0,19.07A2,2,0,0,0,14,39.14H33.1A2,2,0,0,0,35.23,37c0-2.51,0-5,0-7.52a1.95,1.95,0,1,1,3.89-.09c0,2.07,0,4.15,0,6.22A16.21,16.21,0,0,1,39,38.42,5.73,5.73,0,0,1,33.36,43H13.77a5.82,5.82,0,0,1-5.71-5c0-.06,0-.12-.06-.19Z"
                            transform="translate(-8 -8.02)"
                          />
                          <path
                            d="M41.44,8l.15.07A1.94,1.94,0,0,1,43,10v9.23c0,.77,0,1.53,0,2.29a1.95,1.95,0,1,1-3.89,0c0-2.14,0-4.29,0-6.43v-.46l-.35.34q-7.83,7.82-15.64,15.64a2,2,0,0,1-2.05.62,1.94,1.94,0,0,1-1-3.08c.12-.14.25-.27.38-.4Q28.24,20,36,12.28a3.27,3.27,0,0,1,.36-.25l-.08-.12H29.42a1.94,1.94,0,0,1-1.88-1.37,1.92,1.92,0,0,1,.75-2.17A5.34,5.34,0,0,1,29.06,8Z"
                            transform="translate(-8 -8.02)"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
                <div className={style.project_descriptio}>
                  <h1>the project</h1>
                  <p>{description}</p>
                </div>
              </div>
            </div>
            <div
              className={style.project_mockups}
              style={{ backgroundColor: "var(--dark)" }}
            >
              <div className={style.project_video}>
                <video
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  playsInline={true}
                  src="/videos/0602.mp4"
                ></video>
              </div>
              <div className={style.mo_text}>
                <p>
                  Beyond legal expertise, Sulaiman Bin Abdulaziz Law Firm is
                  committed to building strong client relationships. The firm
                  prioritizes clear communication and a client-centered
                  approach, ensuring that clients are fully informed and
                  confident throughout the legal process. This dedication to
                  client satisfaction and meticulous attention to detail make
                  Sulaiman Bin Abdulaziz Law Firm a trusted ally in navigating
                  complex legal challenges.
                </p>
              </div>
              <div className={style.full_screen}>
                <Image
                  src={"/images/lawyer/lawyer-full-screen.jpg"}
                  alt="website-full-screen"
                  width={2000}
                  height={2000}
                />
              </div>
              <div className={style.mobile_mockups}>
                <div className={style.mobile}>
                  <Image
                    src={"/images/lawyer/mob-01.webp"}
                    alt="mockup"
                    width={700}
                    height={700}
                  />
                </div>
                <div className={`${style.mobile}`}>
                  <Image
                    src={"/images/lawyer/mob-02.webp"}
                    alt="mockup"
                    width={700}
                    height={700}
                  />
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Lawyer;
