'use client'
import { useEffect } from "react";
import style from "@/styles/preload.module.css";
import { gsap } from "gsap";

const Preload = () => {
  useEffect(() => {
    const logoPaths = document.querySelectorAll(".logo_paths");
    const welcomeText = document.querySelector(".welcome_text");
    const preloader = document.querySelector(".preloader__jcek4");

    gsap.fromTo(
      logoPaths,
      {
        y: 100,
      },
      {
        y: 0,
        duration: 0.5,
        stagger: 0.2,
        onComplete: () => {
          gsap.to(logoPaths, {
            y: 100,
            duration: 2,
            delay: 0.9,
          });
          gsap.to(welcomeText, {
            y: 0,
            duration: 0.3,
            delay: 1,
            onComplete: () => {
              gsap.to(welcomeText, {
                y: 100,
                duration: 0.3,
                delay: 1,
                onComplete: () => {
                  const preloadAnimationFinishedEvent = new Event('preloadAnimationFinished');
                  document.dispatchEvent(preloadAnimationFinishedEvent);
                },
              });
              
            },
          });
        },
      }
    );

    return () => {
      // Cleanup any ongoing animations if the component unmounts
      gsap.killTweensOf(logoPaths);
      gsap.killTweensOf(welcomeText);
      gsap.killTweensOf(preloader);
    };
  }, []);

  return (
    <div className={`${style.content} preloader__jcek4`}>
      <div className={style.container}>
        <div className={style.welcome}>
          <h2 className="welcome_text">Welcome to stretchedweb agency</h2>
        </div>
        <div className={style.logo_typo}>
        <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120.75 14.42"
          >
            <g className="logo_paths">
              <path
                d="M39.05,23.28h7.07a1.64,1.64,0,1,0,0-3.28H39.05a1.64,1.64,0,0,0,0,3.28"
                transform="translate(-36.04 -20)"
              />
              <path
                d="M44.65,25.41h-6.9A1.71,1.71,0,0,0,36,27.07a1.64,1.64,0,0,0,1.65,1.62h7.6a1.27,1.27,0,0,1,1,.6.86.86,0,0,1,.1.43,1.07,1.07,0,0,1-1,1.08H39.1a1.69,1.69,0,0,0-1.71,1.65,1.72,1.72,0,0,0,.48,1.16A1.68,1.68,0,0,0,39,34.1H44.9a5.17,5.17,0,0,0,2.64-.85,4.2,4.2,0,0,0,2-3.49,4.63,4.63,0,0,0-4.87-4.35"
                transform="translate(-36.04 -20)"
              />
            </g>
            <g className="logo_paths">
              <path
                d="M60,20H50.41a1.64,1.64,0,1,0,0,3.28H60A1.64,1.64,0,0,0,60,20"
                transform="translate(-36.04 -20)"
              />
              <path
                d="M55.25,25.41h0a1.64,1.64,0,0,0-1.64,1.64v5.41a1.65,1.65,0,0,0,3.29,0V27.05a1.64,1.64,0,0,0-1.65-1.64"
                transform="translate(-36.04 -20)"
              />
            </g>
            <g className="logo_paths">
              <path
                d="M75.48,25.15a4.92,4.92,0,0,0-3.54-4.81,6.12,6.12,0,0,0-2-.34H64.31a1.63,1.63,0,0,0-1.64,1.64,1.62,1.62,0,0,0,.48,1.16,1.63,1.63,0,0,0,1.16.48h6a1.91,1.91,0,0,1,1.82,1.92,2.14,2.14,0,0,1-1.92,1.92c-.54,0-1.31-.23-1.77,0a1.59,1.59,0,0,0-.39.29,1.64,1.64,0,0,0-.48,1.16,1.68,1.68,0,0,0,.35,1l.13.15,4.18,4.18A1.66,1.66,0,0,0,75,32.77a1.63,1.63,0,0,0-.49-1.17l-1.87-1.87a5.13,5.13,0,0,0,2.84-4.58"
                transform="translate(-36.04 -20)"
              />
            </g>
            <g className="logo_paths">
              <path
                d="M87,20H78.25a1.64,1.64,0,0,0,0,3.28H87A1.64,1.64,0,0,0,87,20"
                transform="translate(-36.04 -20)"
              />
              <path
                d="M87,30.8H78.25a1.65,1.65,0,0,0,0,3.29H87a1.65,1.65,0,0,0,0-3.29"
                transform="translate(-36.04 -20)"
              />
              <path
                d="M78.25,28.69h6.42a1.65,1.65,0,0,0,0-3.29H78.25a1.65,1.65,0,0,0,0,3.29"
                transform="translate(-36.04 -20)"
              />
            </g>
            <g className="logo_paths">
              <path
                d="M101,20h-9.6a1.64,1.64,0,0,0,0,3.28H101A1.64,1.64,0,1,0,101,20"
                transform="translate(-36.04 -20)"
              />
              <path
                d="M96.28,25.41a1.63,1.63,0,0,0-1.64,1.64v5.41a1.64,1.64,0,1,0,3.28,0V27.05a1.64,1.64,0,0,0-1.64-1.64"
                transform="translate(-36.04 -20)"
              />
            </g>
            <g className="logo_paths">
              <path
                d="M114.89,30.33a1.67,1.67,0,0,0-.28-.48,2,2,0,0,0-.2-.21l0,0a1.62,1.62,0,0,0-1-.37,1.69,1.69,0,0,0-.56.1l-.08,0-.1.05a2.24,2.24,0,0,0-.47.31l-.06,0h0a3.72,3.72,0,0,1-2.58,1h-.1a3.35,3.35,0,0,1-1.53-.36l-.12-.06h0l0,0a3.77,3.77,0,0,1-1.81-2.25h0a.14.14,0,0,1,0-.06,1.87,1.87,0,0,0-1.19-1.15l-.09,0h-.35a2,2,0,0,0-.52.11,1.63,1.63,0,0,0-1.06,1.57,1.34,1.34,0,0,0,0,.35v0s0,0,0,.06a7,7,0,0,0,6.78,5.13h.42a9.26,9.26,0,0,0,1.11-.16h.1a7,7,0,0,0,3.07-1.61h0c.16-.15.32-.3.47-.46A1.71,1.71,0,0,0,115,31a.28.28,0,0,0,0-.09v-.06a1.51,1.51,0,0,0-.07-.48l0-.08"
                transform="translate(-36.04 -20)"
              />
              <path
                d="M115,22.94s0,0,0-.06a1.6,1.6,0,0,0-.23-.52,2,2,0,0,0-.26-.34h0l-.33-.3L114,21.6l-.16-.13-.11-.08-.16-.12-.11-.07-.14-.1-.15-.09-.24-.13-.27-.15a7.82,7.82,0,0,0-3.43-.73,7.07,7.07,0,0,0-3.88,1.36l0,0a6.53,6.53,0,0,0-.63.55,2.44,2.44,0,0,0-.27.3l0,0a1.71,1.71,0,0,0-.29.57.19.19,0,0,0,0,.08.13.13,0,0,0,0,.06.09.09,0,0,0,0,.05.22.22,0,0,0,0,.08.25.25,0,0,0,0,.08v.09a1.55,1.55,0,0,0,.44,1,1.61,1.61,0,0,0,2.29.14l.22-.21a3.75,3.75,0,0,1,5.09,0l.16.15a1.67,1.67,0,0,0,2.74-.9s0-.08,0-.13h0v-.21l0-.24"
                transform="translate(-36.04 -20)"
              />
            </g>
            <g className="logo_paths">
              <path
                d="M127.1,20a1.61,1.61,0,0,0-1.62,1.6c0,.55,0,1.12,0,1.68s.17,1.52-.16,1.94-1.2.14-1.83.17a1.66,1.66,0,0,0-1.7,1.62,1.63,1.63,0,0,0,1.72,1.68c.61,0,1.22,0,2,0,0,1.33,0,2.54,0,3.74a1.64,1.64,0,0,0,3.27.07q0-5.47,0-10.94A1.56,1.56,0,0,0,127.1,20"
                transform="translate(-36.04 -20)"
              />
              <path
                d="M117.87,20c-1,0-1.61.69-1.61,1.84,0,1.72,0,3.43,0,5.14s0,3.47,0,5.21c0,1.19.56,1.87,1.55,1.9a1.66,1.66,0,0,0,1.73-1.84q0-5.22,0-10.43A1.67,1.67,0,0,0,117.87,20"
                transform="translate(-36.04 -20)"
              />
            </g>

            <g className="logo_paths">
              <path
                d="M140.42,20h-8.77a1.64,1.64,0,0,0,0,3.28h8.77a1.64,1.64,0,1,0,0-3.28"
                transform="translate(-36.04 -20)"
              />
              <path
                d="M140.42,30.8h-8.77a1.65,1.65,0,0,0,0,3.29h8.77a1.65,1.65,0,0,0,0-3.29"
                transform="translate(-36.04 -20)"
              />
              <path
                d="M131.65,28.69h6.41a1.65,1.65,0,0,0,0-3.29h-6.41a1.65,1.65,0,0,0,0,3.29"
                transform="translate(-36.04 -20)"
              />
            </g>

            <g className="logo_paths">
              <path
                d="M145,25.88a1.64,1.64,0,0,0-1.64,1.64v5.22a1.64,1.64,0,1,0,3.28,0V27.52A1.64,1.64,0,0,0,145,25.88"
                transform="translate(-36.04 -20)"
              />
              <path
                d="M155.92,23.78c-1.86-3.25-5.95-3.69-6.59-3.75l-.53,0H145a1.65,1.65,0,0,0-1.64,1.64,1.62,1.62,0,0,0,.48,1.16,1.63,1.63,0,0,0,1.16.48h4.42a4.08,4.08,0,0,1,4.16,4c0,2.47-2.58,3.77-3.43,3.88l-.26,0a1.63,1.63,0,0,0,.25,3.24l.33,0c.36-.05,6.34-1.82,6.36-7.11a6.84,6.84,0,0,0-.87-3.46"
                transform="translate(-36.04 -20)"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Preload;
