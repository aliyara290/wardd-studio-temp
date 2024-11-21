"use client";
import { useEffect } from "react";
import style from "@/styles/home/footer.module.css";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Footer = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".get__in",
      {
        y: 100,
      },
      {
        y: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: ".get__in",
          start: "top bottom",
          end: "bottom 90%",
        },
      }
    );
  }, []);
  useEffect(() => {
    const links = document.querySelectorAll(".link");
    links.forEach((header) => {
      const originalText = header.textContent;
      header.setAttribute("data-text", originalText);
    });
  }, []);

  return (
    <footer className={style.content}>
      <div className={style.container}>
        <div className={style.contact_p}>
          <div className={`${style.boldText} get__in`}>
            <Link href={"/contact"}>
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 193.11 21.11"
              >
                <path
                  className="cls-1"
                  d="M26,35.5a9.73,9.73,0,0,1-3.64-.68,8.72,8.72,0,0,1-3.05-2,9.41,9.41,0,0,1-2.09-3.3A12.44,12.44,0,0,1,16.44,25a11.68,11.68,0,0,1,1.29-5.7,8.85,8.85,0,0,1,3.45-3.59A9.5,9.5,0,0,1,26,14.44a9.49,9.49,0,0,1,6.13,1.81,8.89,8.89,0,0,1,3,5.13l-3.9.56a5.88,5.88,0,0,0-1.79-2.83A4.77,4.77,0,0,0,26.24,18a5.4,5.4,0,0,0-3.2.83,5.15,5.15,0,0,0-1.91,2.42A9.68,9.68,0,0,0,20.49,25a9.42,9.42,0,0,0,.64,3.65A5.15,5.15,0,0,0,23,31a5.8,5.8,0,0,0,3.2.89,5.39,5.39,0,0,0,2.37-.45A4.43,4.43,0,0,0,30.4,30a6.71,6.71,0,0,0,1-2.63h-3.2V24.38h7.27a6.44,6.44,0,0,1,0,.65c0,.31,0,.49,0,.53a11,11,0,0,1-1.18,5.15,8.69,8.69,0,0,1-3.33,3.52A9.76,9.76,0,0,1,26,35.5Z"
                  transform="translate(-16.44 -14.44)"
                />
                <path
                  className="cls-1"
                  d="M38.37,35.08V14.86h13.2v3.57H42.19v4.33h7.69v3.56H42.19v5.2h9.38v3.56Z"
                  transform="translate(-16.44 -14.44)"
                />
                <path
                  className="cls-1"
                  d="M59.63,35.08V18.43H53.25V14.86H69.82v3.57H63.45V35.08Z"
                  transform="translate(-16.44 -14.44)"
                />
                <path
                  className="cls-1"
                  d="M77.12,35.08V14.86h3.82V35.08Z"
                  transform="translate(-16.44 -14.44)"
                />
                <path
                  className="cls-1"
                  d="M85.15,35.08V14.86H89l8.79,13.48V14.86h3.87V35.08H97.82L89,21.6V35.08Z"
                  transform="translate(-16.44 -14.44)"
                />
                <path
                  className="cls-1"
                  d="M115.93,35.08V18.43h-6.38V14.86h16.57v3.57h-6.37V35.08Z"
                  transform="translate(-16.44 -14.44)"
                />
                <path
                  className="cls-1"
                  d="M159.77,35.5a9,9,0,0,1-4.3-1,7.29,7.29,0,0,1-2.89-2.78,8.34,8.34,0,0,1-1-4.23V14.89l3.88,0V27.47a4.56,4.56,0,0,0,.34,1.81,4.08,4.08,0,0,0,2.32,2.31,4.54,4.54,0,0,0,1.69.32,4.62,4.62,0,0,0,1.72-.32,4.18,4.18,0,0,0,2.3-2.32,4.73,4.73,0,0,0,.33-1.8V14.86H168V27.5a8.34,8.34,0,0,1-1,4.23,7.23,7.23,0,0,1-2.89,2.78A9,9,0,0,1,159.77,35.5Z"
                  transform="translate(-16.44 -14.44)"
                />
                <path
                  className="cls-1"
                  d="M180.61,35.5a9.93,9.93,0,0,1-5.23-1.32A8.77,8.77,0,0,1,172,30.49,12.19,12.19,0,0,1,170.81,25,12.25,12.25,0,0,1,172,19.45a8.77,8.77,0,0,1,3.39-3.69,9.93,9.93,0,0,1,5.23-1.32,9.63,9.63,0,0,1,5.84,1.73,9.16,9.16,0,0,1,3.34,4.68l-3.85,1.06a5.49,5.49,0,0,0-1.89-2.86,5.57,5.57,0,0,0-3.44-1,5.64,5.64,0,0,0-3.21.85,5.19,5.19,0,0,0-1.93,2.42,9.53,9.53,0,0,0-.65,3.66,9.55,9.55,0,0,0,.65,3.67,5.16,5.16,0,0,0,1.93,2.41,5.64,5.64,0,0,0,3.21.86A5.15,5.15,0,0,0,185.94,28l3.85,1.07a9.1,9.1,0,0,1-3.34,4.67A9.56,9.56,0,0,1,180.61,35.5Z"
                  transform="translate(-16.44 -14.44)"
                />
                <path
                  className="cls-1"
                  d="M192.88,35.08V14.86h3.82v8.32h9V14.86h3.82V35.08h-3.82V26.74h-9v8.34Z"
                  transform="translate(-16.44 -14.44)"
                />
                <circle
                  className="cls-2"
                  fill="#f15a24"
                  cx="121.97"
                  cy="10.63"
                  r="10.49"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className={style.footer_top}>
          <div className={style.arrow}>
            <a href="#hero" aria-label="Return">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="172"
                height="188"
                viewBox="0 0 172 188"
                fill="var(--dark)"
              >
                <path
                  id="_"
                  data-name="↑"
                  d="M101.545,188V58.091l48.637,48.636,20.909-21.091L86.182,0.727,1.091,85.636l21.273,21.091L70.818,58.091V188h30.727Z"
                />
              </svg>
            </a>
          </div>
          <div className={style.right_part}>
            <div className={style.social_links}>
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/stretchedweb?igsh=Z2dlZ2xlanV6ZXF4&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.anchor}
                    aria-label="Instagram"
                  >
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 473.5 473.5"
                      width="24"
                      height="24"
                    >
                      <g id="Background">
                        <path
                          d="M302.4,256.4a47.3,47.3,0,1,1-47.3-47.3A47.2,47.2,0,0,1,302.4,256.4Z"
                          transform="translate(-19.4 -19.2)"
                        />
                        <path
                          d="M370.7,198.9c-.6-13.9-3-21.4-4.9-26.4a46.9,46.9,0,0,0-26.9-26.9c-5-2-12.6-4.3-26.4-4.9-15-.7-19.5-.8-57.4-.8s-42.4.2-57.4.8c-13.9.6-21.4,3-26.4,4.9a46.9,46.9,0,0,0-26.9,26.9c-2,5-4.3,12.6-4.9,26.4-.7,15-.8,19.5-.8,57.4s.1,42.4.8,57.4c.6,13.9,3,21.4,4.9,26.4A46.9,46.9,0,0,0,171.3,367c5,2,12.6,4.3,26.4,4.9,15,.7,19.5.8,57.4.8s42.4-.1,57.4-.8c13.9-.6,21.4-3,26.4-4.9a46.9,46.9,0,0,0,26.9-26.9c2-5,4.3-12.6,4.9-26.4.7-15,.8-19.5.8-57.4S371.4,213.9,370.7,198.9ZM255.1,329.2A72.9,72.9,0,1,1,328,256.3,73,73,0,0,1,255.1,329.2ZM331,197.6a17,17,0,1,1,17-17A17,17,0,0,1,331,197.6Z"
                          transform="translate(-19.4 -19.2)"
                        />
                        <path
                          d="M431,19.2H81.3A61.88,61.88,0,0,0,19.4,81.1V430.8a61.88,61.88,0,0,0,61.9,61.9H431a61.88,61.88,0,0,0,61.9-61.9V81.1A61.88,61.88,0,0,0,431,19.2ZM396.4,315.1c-.7,15.1-3.1,25.5-6.6,34.5a68.92,68.92,0,0,1-16.4,25.2,69.75,69.75,0,0,1-25.2,16.4c-9.1,3.5-19.4,5.9-34.5,6.6s-20,.9-58.6.9-43.4-.2-58.6-.9-25.5-3.1-34.5-6.6a68.92,68.92,0,0,1-25.2-16.4,69.75,69.75,0,0,1-16.4-25.2c-3.5-9.1-5.9-19.4-6.6-34.5s-.9-20-.9-58.6.2-43.4.9-58.6,3.1-25.5,6.6-34.5a68.92,68.92,0,0,1,16.4-25.2A69.75,69.75,0,0,1,162,121.8c9.1-3.5,19.4-5.9,34.5-6.6s20-.9,58.6-.9,43.4.2,58.6.9,25.5,3.1,34.5,6.6a68.92,68.92,0,0,1,25.2,16.4,69.75,69.75,0,0,1,16.4,25.2c3.5,9.1,5.9,19.4,6.6,34.5s.9,20,.9,58.6S397.1,299.9,396.4,315.1Z"
                          transform="translate(-19.4 -19.2)"
                        />
                      </g>
                    </svg>
                    <span className={`${style.link} link`}>Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.anchor}
                    aria-label="X"
                  >
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 26.95 26.95"
                      width="24"
                      height="24"
                    >
                      <g id="Icons">
                        <g id="Icons-2" data-name="Icons">
                          <path
                            d="M35,10.52H13a2.52,2.52,0,0,0-2.52,2.53V35A2.52,2.52,0,0,0,13,37.48H35A2.52,2.52,0,0,0,37.47,35V13A2.52,2.52,0,0,0,35,10.52ZM19.42,31.33H16.54c-.18,0-.23,0-.23-.24V21c0-.19.06-.24.24-.24h2.87c.18,0,.24.06.23.24V26c0,1.69,0,3.38,0,5.07C19.66,31.28,19.59,31.33,19.42,31.33ZM18,19.35a1.93,1.93,0,1,1,0-3.85,1.93,1.93,0,1,1,0,3.85Zm13.67,12H28.84c-.24,0-.24,0-.24-.25V25.94a4.69,4.69,0,0,0-.16-1.43A1.4,1.4,0,0,0,27,23.41a1.79,1.79,0,0,0-1.43.51,2,2,0,0,0-.5,1.17c0,.39-.07.8-.07,1.19V31.1c0,.18-.05.24-.21.24-1,0-1.93,0-2.9,0-.17,0-.22-.05-.22-.24q0-5.05,0-10.16c0-.18.07-.22.22-.22.92,0,1.85,0,2.77,0,.17,0,.23.06.22.23,0,.38,0,.75,0,1.13A3.52,3.52,0,0,1,27,20.6a4.56,4.56,0,0,1,3,.25,3,3,0,0,1,1.7,2.1,7,7,0,0,1,.27,1.88q0,3.11,0,6.22C31.94,31.33,31.94,31.33,31.65,31.33Z"
                            transform="translate(-10.52 -10.52)"
                          />
                        </g>
                      </g>
                    </svg>
                    <span className={`${style.link} link`}>Linkedin</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/Stretchedstudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.anchor}
                  >
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 38.51 38.51"
                      width="24"
                      height="24"
                    >
                      <path
                        d="M24,43.25H9.34a4.46,4.46,0,0,1-4.49-3.57,4.88,4.88,0,0,1-.1-1.08V9.38A4.47,4.47,0,0,1,9.4,4.75H38.62A4.47,4.47,0,0,1,43.25,9.4V38.62a4.47,4.47,0,0,1-4.65,4.63Zm1.4-22.75-.23-.28-6.34-8.48a.66.66,0,0,0-.61-.31H11.07l-.41,0L21,25.29,10.57,36.56c.8,0,1.47,0,2.14,0a.65.65,0,0,0,.43-.21c1.32-1.41,2.63-2.84,3.94-4.26l5-5.35.19.2c2.31,3.1,4.63,6.19,6.93,9.29a.76.76,0,0,0,.68.35h7.59L26.49,21.93l9.7-10.49c-.81,0-1.5,0-2.2,0a.58.58,0,0,0-.35.19C32.07,13.32,30.52,15,29,16.69Z"
                        transform="translate(-4.75 -4.75)"
                      />
                      <path
                        d="M33.92,34.82c-1.19,0-2.29,0-3.4,0a.64.64,0,0,1-.4-.25q-4.26-5.67-8.49-11.34l-7.2-9.63-.29-.41h3.49a.58.58,0,0,1,.32.25l9.79,13.08,5.89,7.88C33.72,34.52,33.8,34.63,33.92,34.82Z"
                        transform="translate(-4.75 -4.75)"
                      />
                    </svg>
                    <span className={`${style.link} link`}>X</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61557683626508&mibextid=LQQJ4d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.anchor}
                    aria-label="Instagram"
                  >
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 26.95 26.95"
                      width="24"
                      height="24"
                    >
                      <path
                        d="M35,10.53H13A2.51,2.51,0,0,0,10.53,13V35A2.52,2.52,0,0,0,13,37.47H23.49l.14-8.57-3.56,0,.09-4.16h3.5v-3a7.69,7.69,0,0,1,.13-1.26,6,6,0,0,1,.28-1.09,5.09,5.09,0,0,1,.44-.91,4.75,4.75,0,0,1,.59-.75,4.54,4.54,0,0,1,.73-.58,5.86,5.86,0,0,1,.87-.43,6.93,6.93,0,0,1,1.56-.36,13,13,0,0,1,1.65,0h2L31.8,20.2s-.48,0-2.2,0-1.71,1.27-1.71,1.33l0,3.19,3.94.07-.57,4.09H27.89l0,8.59H35A2.51,2.51,0,0,0,37.47,35V13A2.51,2.51,0,0,0,35,10.53Z"
                        transform="translate(-10.53 -10.53)"
                      />
                    </svg>
                    <span className={`${style.link} link`}>Facebook</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className={style.pages}>
              <ul>
                <li>
                  <Link
                    href={"/work"}
                    className={style.anchor}
                    aria-label="Work page"
                  >
                    <span className={`${style.link} link`}>Work</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/services"}
                    className={style.anchor}
                    aria-label="Services page"
                  >
                    <span className={`${style.link} link`}>Services</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/studio"}
                    className={style.anchor}
                    aria-label="Studio page"
                  >
                    <span className={`${style.link} link`}>Studio</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/contact"}
                    className={style.anchor}
                    aria-label="Contact page"
                  >
                    <span className={`${style.link} link`}>Contact</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={style.footer_bottom}>
          <div className={style.copyright}>
            <ul>
              <li>&copy; copyright 2024</li>
              <li>
                <a
                  href="mailto:hello@stretchedweb.com"
                  className={style.anchor}
                  aria-label="Email us"
                >
                  <span className={`${style.link} link text-3xl font-bold`}>
                    hello@stretchedweb.com
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.fixed_link} title="Contact Us">
        <Link href={"/contact"} aria-label="Contact us">
          <svg
            id="pencil"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27.4142 29.9237C26.6332 30.7047 26.6332 31.9711 27.4142 32.7521L43.5938 48.9316C43.8613 49.1992 44.1993 49.3854 44.5684 49.4685L50.8933 50.8933L49.4685 44.5685C49.3854 44.1993 49.1992 43.8613 48.9316 43.5938L32.7521 27.4142C31.971 26.6332 30.7047 26.6332 29.9237 27.4142L27.4142 29.9237Z"
              stroke="white"
              strokeWidth="2"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M49.7919 50.1349L45 49L49 45L49.7919 50.1349Z"
              fill="white"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27.4142 29.9237C26.6332 30.7047 26.6332 31.9711 27.4142 32.7521L43.5938 48.9316C43.8613 49.1992 44.1993 49.3854 44.5684 49.4685L50.8933 50.8933L49.4685 44.5685C49.3854 44.1993 49.1992 43.8613 48.9316 43.5938L32.7521 27.4142C31.971 26.6332 30.7047 26.6332 29.9237 27.4142L27.4142 29.9237Z"
              stroke="white"
              strokeWidth="2"
            ></path>
            <path
              className={style.tip_a}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M49.7919 50.1349L45 49L49 45L49.7919 50.1349Z"
              fill="white"
            ></path>
          </svg>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
