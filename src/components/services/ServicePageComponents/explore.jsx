"use client";
import { useEffect } from "react";
import style from "@/styles/services/ServicePageStyle/explore.module.css";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Explore = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      '.list_content',
      {
        y: "-120%",
      },
      {
        y: 0,
        duration: 0.5,
        delay: 0.3,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.list_content',
          start: "bottom bottom",
          end: "top center",
        },
      }
    );
  }, []);
  return (
    <div className={style.content}>
      <div className={style.container}>
        <div className={style.otherServices}>
          <div className={style.heading}>
            <span className={style.point}></span>
            <span>Explore other services</span>
          </div>
          <div className={style.list}>
            <ul>
              <li className="overflow-hidden">
                <div className="list_content">
                  <Link href={"/services/web-design"}>
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 15.8 8.49"
                      fill="var(--dark)"
                    >
                      <polygon points="15.8 4.24 11.56 0 10.64 0.92 13.32 3.6 0 3.6 0 4.9 13.32 4.9 10.64 7.57 11.56 8.49 15.8 4.25 15.8 4.25 15.8 4.24" />
                    </svg>
                    <span className="text-grey-500">Website Design</span>
                  </Link>
                </div>
              </li>
              <li className="overflow-hidden">
                <div className="list_content">
                  <Link href={"/services/web-development"}>
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 15.8 8.49"
                      fill="var(--dark)"
                    >
                      <polygon points="15.8 4.24 11.56 0 10.64 0.92 13.32 3.6 0 3.6 0 4.9 13.32 4.9 10.64 7.57 11.56 8.49 15.8 4.25 15.8 4.25 15.8 4.24" />
                    </svg>
                    <span>Website Development</span>
                  </Link>
                </div>
              </li>
              <li className="overflow-hidden">
                <div className="list_content">
                  <Link href={"/services/website-support"}>
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 15.8 8.49"
                      fill="var(--dark)"
                    >
                      <polygon points="15.8 4.24 11.56 0 10.64 0.92 13.32 3.6 0 3.6 0 4.9 13.32 4.9 10.64 7.57 11.56 8.49 15.8 4.25 15.8 4.25 15.8 4.24" />
                    </svg>
                    <span>Website Support</span>
                  </Link>
                </div>
              </li>
              <li className="overflow-hidden">
                <div className="list_content">
                  <Link href={"/services/graphic-design"}>
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 15.8 8.49"
                      fill="var(--dark)"
                    >
                      <polygon points="15.8 4.24 11.56 0 10.64 0.92 13.32 3.6 0 3.6 0 4.9 13.32 4.9 10.64 7.57 11.56 8.49 15.8 4.25 15.8 4.25 15.8 4.24" />
                    </svg>
                    <span>Graphic Design</span>
                  </Link>
                </div>
              </li>
              <li className="overflow-hidden">
                <div className="list_content">
                  <Link href={"/services/digital-marketing"}>
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 15.8 8.49"
                      fill="var(--dark)"
                    >
                      <polygon points="15.8 4.24 11.56 0 10.64 0.92 13.32 3.6 0 3.6 0 4.9 13.32 4.9 10.64 7.57 11.56 8.49 15.8 4.25 15.8 4.25 15.8 4.24" />
                    </svg>
                    <span>Digital Marketing</span>
                  </Link>
                </div>
              </li>
              <li className="overflow-hidden">
                <div className="list_content">
                  <Link href={"/services/social-media-management"}>
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 15.8 8.49"
                      fill="var(--dark)"
                    >
                      <polygon points="15.8 4.24 11.56 0 10.64 0.92 13.32 3.6 0 3.6 0 4.9 13.32 4.9 10.64 7.57 11.56 8.49 15.8 4.25 15.8 4.25 15.8 4.24" />
                    </svg>
                    <span>Social Media Management</span>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
