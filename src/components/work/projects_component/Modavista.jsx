"use client";
import style from "@/styles/work/project_page/project.module.css";
import { projectDetails } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Modavista = ({ deviceType }) => {
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
    (project) => project.name === "Modavista"
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
                        <Link href={"/work/gourmet-grove"}>
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
                                <span>02/</span>
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
                              <span className={style.active}>04/</span>
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
                        <Link href={"/work/smiley"}>
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
                  src="/videos/Modavista-Store-video.mp4"
                ></video>
              </div>
              <div className={style.mo_text}>
                <p>
                  Beyond its impressive range of products, Modavista focuses on
                  creating a seamless shopping experience. The user-friendly
                  website design makes it easy for customers to find what they
                  need, while the strategic use of SEO ensures that Modavista
                  reaches a wider audience. The dedication to excellence in both
                  product offering and online presence makes Modavista a trusted
                  and successful online store for home goods.
                </p>
              </div>
              <div className={style.full_screen}>
                <Image
                  src={"/images/modavista/modavista-full-screen.webp"}
                  alt="website-full-screen"
                  width={2000}
                  height={2000}
                />
              </div>
              <div className={style.mobile_mockups}>
                <div className={style.mobile}>
                  <Image
                    src={"/images/modavista/mob-1.webp"}
                    alt="mockup"
                    width={700}
                    height={700}
                  />
                </div>
                <div className={`${style.mobile}`}>
                  <Image
                    src={"/images/modavista/mob-2.webp"}
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

export default Modavista;
