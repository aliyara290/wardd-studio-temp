"use client";
import style from "@/styles/home/header.module.css";
import "@/styles/home/homeStyle.css";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { getCalApi } from "@calcom/embed-react";
import Image from "next/image";

const Header = () => {
  const [isActive, setIsActive] = useState(true);
  const headerRef = useRef(null);
  const handleClick = () => {
    if (window.innerWidth >= 900) {
      const expertisesMenu = document.querySelector("#expertises__menu");
      const arrow = document.querySelector("#arrow__hd");
      expertisesMenu.classList.toggle("show");
      arrow.classList.toggle("active");
      setIsActive(!isActive);
    }
  };

  const closeMenu = () => {
    const expertisesMenu = document.querySelector("#expertises__menu");
    const arrow = document.querySelector("#arrow__hd");
    expertisesMenu?.classList.remove("show");
    arrow?.classList.remove("active");
    setIsActive(true);
  };

  useEffect(() => {
    const handleWindowClick = (event) => {
      if (
        window.innerWidth >= 900 &&
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        const expertisesMenu = document.querySelector("#expertises__menu");
        const arrow = document.querySelector("#arrow__hd");
        expertisesMenu?.classList.remove("show");
        arrow?.classList.remove("active");
        setIsActive(true);
      }
    };

    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({ namespace: "30min" });
        cal("ui", {
          styles: { branding: { brandColor: "#000000" } },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      } catch (error) {
        console.error("Error initializing calendar API:", error);
      }
    })();
  }, []);

  const handleOpenMenuClick = () => {
    const menu = document.querySelector("#navbarMenu");
    menu.classList.toggle("open");
  };
  const handleCloseMenuClick = () => {
    const menu = document.querySelector("#navbarMenu");
    menu.classList.remove("open");
  };

  return (
    <header className={style.header} ref={headerRef}>
      <div className={style.logo} onClick={closeMenu}>
        <Link href={"/"} aria-label="Home page">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 239.87 93.31"
            width={100}
          >
            <path
              d="M118.5,128.39,109.17,89.3h8.07l5.9,26.85,7.14-26.85h9.39l6.85,27.31,6-27.31h7.95L151,128.39H142.6l-7.78-29.22-7.76,29.22Z"
              transform="translate(-109.17 -89.3)"
            ></path>
            <path
              d="M196.73,128.39h-8.59l-3.41-8.88H169.1l-3.22,8.88h-8.37L172.73,89.3h8.35ZM182.2,112.93l-5.39-14.51-5.28,14.51Z"
              transform="translate(-109.17 -89.3)"
            ></path>
            <path
              d="M200.94,128.39V89.3h16.61c4.18,0,7.21.36,9.11,1.06a9,9,0,0,1,4.54,3.74,11.26,11.26,0,0,1,1.71,6.16,10.41,10.41,0,0,1-2.59,7.27q-2.58,2.86-7.73,3.61a18.49,18.49,0,0,1,4.23,3.28,44.34,44.34,0,0,1,4.49,6.35l4.77,7.62h-9.44l-5.7-8.5a55.23,55.23,0,0,0-4.16-5.75,6.21,6.21,0,0,0-2.37-1.63,13.16,13.16,0,0,0-4-.44h-1.6v16.32Zm7.89-22.55h5.84c3.79,0,6.15-.16,7.1-.48A4.26,4.26,0,0,0,224,103.7a5.11,5.11,0,0,0,.8-2.93,4.66,4.66,0,0,0-1.06-3.19,4.79,4.79,0,0,0-3-1.53c-.64-.09-2.56-.13-5.76-.13h-6.16Z"
              transform="translate(-109.17 -89.3)"
            ></path>
            <path
              d="M240.32,89.3h14.43a28.09,28.09,0,0,1,7.44.75,13.18,13.18,0,0,1,5.89,3.6,17.12,17.12,0,0,1,3.73,6.33,28.68,28.68,0,0,1,1.28,9.24,25.69,25.69,0,0,1-1.2,8.32,17.22,17.22,0,0,1-4.18,6.91,14,14,0,0,1-5.55,3.12,23.94,23.94,0,0,1-7,.82H240.32Zm7.9,6.62v25.89h5.89a21.35,21.35,0,0,0,4.77-.38,7.37,7.37,0,0,0,3.19-1.62,8.29,8.29,0,0,0,2.06-3.78,25.19,25.19,0,0,0,.8-7.15,23.07,23.07,0,0,0-.8-7,8.93,8.93,0,0,0-2.24-3.79,7.45,7.45,0,0,0-3.65-1.84,35.75,35.75,0,0,0-6.48-.37Z"
              transform="translate(-109.17 -89.3)"
            ></path>
            <path
              d="M279.76,89.3h14.42a28,28,0,0,1,7.44.75,13.16,13.16,0,0,1,5.9,3.6,17.12,17.12,0,0,1,3.73,6.33,29,29,0,0,1,1.28,9.24,25.69,25.69,0,0,1-1.2,8.32,17.24,17.24,0,0,1-4.19,6.91,14,14,0,0,1-5.54,3.12,24,24,0,0,1-7,.82H279.76Zm7.89,6.62v25.89h5.89a21.39,21.39,0,0,0,4.78-.38,7.27,7.27,0,0,0,3.18-1.62,8.21,8.21,0,0,0,2.07-3.78,25.56,25.56,0,0,0,.8-7.15,23.39,23.39,0,0,0-.8-7,8.93,8.93,0,0,0-2.24-3.79,7.5,7.5,0,0,0-3.65-1.84,35.9,35.9,0,0,0-6.48-.37Z"
              transform="translate(-109.17 -89.3)"
            ></path>
            <path
              d="M111,169.2l7.68-.74a9.4,9.4,0,0,0,2.81,5.68,8.56,8.56,0,0,0,5.72,1.81c2.55,0,4.46-.54,5.75-1.62a4.78,4.78,0,0,0,1.93-3.77,3.58,3.58,0,0,0-.81-2.36,6.48,6.48,0,0,0-2.84-1.69c-.93-.32-3-.89-6.32-1.71q-6.34-1.58-8.91-3.86a10.18,10.18,0,0,1-3.6-7.87,10.08,10.08,0,0,1,1.7-5.59,10.54,10.54,0,0,1,4.88-3.95,19.48,19.48,0,0,1,7.69-1.36q7.37,0,11.08,3.22a11.36,11.36,0,0,1,3.9,8.61l-7.89.35a6.7,6.7,0,0,0-2.17-4.33,8,8,0,0,0-5-1.32,9.06,9.06,0,0,0-5.39,1.41,2.86,2.86,0,0,0-1.25,2.43,3,3,0,0,0,1.17,2.37q1.5,1.26,7.26,2.61a38.34,38.34,0,0,1,8.52,2.82,11,11,0,0,1,4.31,4,12.33,12.33,0,0,1-.3,12.52,11.27,11.27,0,0,1-5.28,4.36,22.19,22.19,0,0,1-8.51,1.42q-7.41,0-11.38-3.42C113.05,176.9,111.47,173.58,111,169.2Z"
              transform="translate(-109.17 -89.3)"
            ></path>
            <path
              d="M158.17,181.92V149.44h-11.6v-6.61h31.07v6.61H166.06v32.48Z"
              transform="translate(-109.17 -89.3)"
            ></path>
            <path
              d="M182.68,142.83h7.89V164a45.08,45.08,0,0,0,.29,6.54,6.34,6.34,0,0,0,2.41,3.85,8.43,8.43,0,0,0,5.22,1.45,8,8,0,0,0,5.06-1.37,5.43,5.43,0,0,0,2.06-3.37,44.46,44.46,0,0,0,.34-6.64V142.83h7.9v20.53a53.35,53.35,0,0,1-.64,9.95,11.06,11.06,0,0,1-2.36,4.9,11.87,11.87,0,0,1-4.6,3.19,20,20,0,0,1-7.52,1.19c-3.73,0-6.57-.43-8.49-1.3a12.12,12.12,0,0,1-4.58-3.36,10.76,10.76,0,0,1-2.21-4.33,47.18,47.18,0,0,1-.77-9.92Z"
              transform="translate(-109.17 -89.3)"
            ></path>
            <path
              d="M222.14,142.83h14.42a28,28,0,0,1,7.44.75,13,13,0,0,1,5.9,3.6,17,17,0,0,1,3.73,6.33,29,29,0,0,1,1.28,9.24,25.69,25.69,0,0,1-1.2,8.32,17.31,17.31,0,0,1-4.19,6.9,13.76,13.76,0,0,1-5.54,3.12,23.61,23.61,0,0,1-7,.83H222.14Zm7.89,6.61v25.89h5.89a21.54,21.54,0,0,0,4.78-.37,7.27,7.27,0,0,0,3.18-1.62,8.26,8.26,0,0,0,2.07-3.78,25.58,25.58,0,0,0,.8-7.16,23.49,23.49,0,0,0-.8-7,8.89,8.89,0,0,0-2.24-3.78,7.5,7.5,0,0,0-3.65-1.84,35.6,35.6,0,0,0-6.48-.38Z"
              transform="translate(-109.17 -89.3)"
            ></path>
            <path
              d="M261.36,181.92V142.83h7.89v39.09Z"
              transform="translate(-109.17 -89.3)"
            ></path>
            <path
              d="M275.17,162.62a24.86,24.86,0,0,1,1.79-10,18.36,18.36,0,0,1,3.64-5.36,15.25,15.25,0,0,1,5-3.52,21.49,21.49,0,0,1,8.43-1.54q8.64,0,13.82,5.35t5.19,14.91q0,9.47-5.15,14.81t-13.76,5.35q-8.71,0-13.86-5.32T275.17,162.62Zm8.13-.27q0,6.65,3.07,10.07a10,10,0,0,0,7.79,3.42,9.89,9.89,0,0,0,7.74-3.4q3-3.39,3-10.2t-2.95-10a10.91,10.91,0,0,0-15.69,0Q283.31,155.61,283.3,162.35Z"
              transform="translate(-109.17 -89.3)"
            ></path>
            <path
              d="M317.25,169.2l7.68-.74a9.4,9.4,0,0,0,2.81,5.68,8.55,8.55,0,0,0,5.72,1.81,8.78,8.78,0,0,0,5.75-1.62,4.81,4.81,0,0,0,1.93-3.77,3.58,3.58,0,0,0-.81-2.36,6.54,6.54,0,0,0-2.84-1.69q-1.39-.48-6.32-1.71-6.35-1.58-8.91-3.86a10.18,10.18,0,0,1-3.6-7.87,10.07,10.07,0,0,1,1.69-5.59,10.59,10.59,0,0,1,4.88-3.95,19.53,19.53,0,0,1,7.7-1.36q7.35,0,11.07,3.22a11.37,11.37,0,0,1,3.91,8.61l-7.89.35a6.66,6.66,0,0,0-2.18-4.33,7.93,7.93,0,0,0-5-1.32,9,9,0,0,0-5.39,1.41,2.84,2.84,0,0,0-1.25,2.43,3,3,0,0,0,1.17,2.37c1,.84,3.41,1.71,7.25,2.61a38.34,38.34,0,0,1,8.52,2.82,11,11,0,0,1,4.32,4,11.61,11.61,0,0,1,1.56,6.23,11.47,11.47,0,0,1-1.87,6.29,11.17,11.17,0,0,1-5.28,4.36,22.14,22.14,0,0,1-8.5,1.42q-7.41,0-11.39-3.42C319.34,176.9,317.76,173.58,317.25,169.2Z"
              transform="translate(-109.17 -89.3)"
            ></path>
          </svg>
          {/* <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 77.59 123.76"
            width={36}
          >
            <path
              class="cls-1"
              d="M137.12,120.78a1.66,1.66,0,0,1,2.67-2c9,11.45,3.26,28.45-2.49,33.77-15.38,12.85-34.46,14.91-56.09,9.47a3.45,3.45,0,0,0-3.76,1.47l0,0a3.86,3.86,0,0,0,.88,5.11,59,59,0,0,1,6.46,6c19.22,20.36,53,14.5,63.37-11.51,5.41-13.58,7.18-29.32,5.86-44.78a53.44,53.44,0,0,0-7.16-22.93c-.08-.14-.17-.28-.26-.42-11.77-19.27-39.84-19.35-51.91-.27a44.13,44.13,0,0,0-6.15,31.68,26.36,26.36,0,0,0,19.88,21.25c8.87,2,18,.78,24.16-3.2,5.57-3.63,8.82-8.64,8.15-14.79A17,17,0,0,0,137.12,120.78Z"
              transform="translate(-76.83 -63.12)"
            />
            <path
              class="cls-1"
              d="M136.76,64.05l-1,3.18A3.7,3.7,0,0,1,133,69.79L95.34,78a.73.73,0,0,1-.84-.94l1.25-3.74A3.56,3.56,0,0,1,98.38,71l37.54-7.86A.72.72,0,0,1,136.76,64.05Z"
              transform="translate(-76.83 -63.12)"
            />
          </svg> */}
        </Link>
      </div>
      <nav className={style.links} id="navbarMenu">
        <ul>
          <li onClick={closeMenu} onClick={handleCloseMenuClick}>
            <Link href={"/agency"} aria-label="Contact page">
              <p>Agency</p>
            </Link>
          </li>
          <li onClick={closeMenu} onClick={handleCloseMenuClick}>
            <Link href={"/work"} aria-label="Contact page">
              <p>Work</p>
            </Link>
          </li>
          <li
            className={style.expertises__link}
            id="expertises"
            onClick={() => handleClick()}
          >
            <div className={style.exp__hd}>
              <p>Expertise</p>
              <span className={style.header__arrow}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 172 188"
                  fill="black"
                  id="arrow__hd"
                >
                  <path d="M101.545,188V58.091l48.637,48.636,20.909-21.091L86.182,0.727,1.091,85.636l21.273,21.091L70.818,58.091V188h30.727Z"></path>
                </svg>
              </span>
            </div>
            <div className={style.hiddenLink}>
              <div className={style.hiddenLinksContent}>
                <div className={style.hidLink} onClick={handleCloseMenuClick}>
                  <Link
                    onClick={closeMenu}
                    href="/services/web-development-and-digital-solution"
                  >
                    {" "}
                    Development & Digital Solutions
                  </Link>
                </div>
                <div className={style.hidLink} onClick={handleCloseMenuClick}>
                  <Link
                    onClick={closeMenu}
                    href="/services/creative-design-and-branding"
                  >
                    {" "}
                    Creative Desgin & Branding
                  </Link>
                </div>
                <div className={style.hidLink} onClick={handleCloseMenuClick}>
                  <Link
                    onClick={closeMenu}
                    href="/services/audiovisual-and-motion-graphics"
                  >
                    {" "}
                    Audiovisual & Motion Graphics
                  </Link>
                </div>
                <div className={style.hidLink} onClick={handleCloseMenuClick}>
                  <Link
                    onClick={closeMenu}
                    href="/services/marketing-and-print-solutions"
                  >
                    {" "}
                    Marketing & Print Solutions
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li onClick={closeMenu}>
            <Link href={"/contact"} aria-label="Contact page">
              <p>Contact</p>
            </Link>
          </li>
          <li onClick={closeMenu}>
            <button
              data-cal-namespace="30min"
              data-cal-link="wardd-studio/30min"
              data-cal-config='{"layout":"month_view"}'
              className={style.book}
            >
              Book a call
            </button>
          </li>
        </ul>
      </nav>
      <div className={style.hamburger} onClick={handleOpenMenuClick}>
        
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 71.76 71.74"
          fill="var(--white)"
          width={42}
          height={42}
        >
          <path
            class="cls-1"
            d="M50,14.14c4.45,0,8.9,0,13.35,0a21.89,21.89,0,0,1,13.85,4.92,22.46,22.46,0,0,1,8.39,14.47,24,24,0,0,1,.26,3.79c0,8.77,0,17.54,0,26.31a21.7,21.7,0,0,1-5.22,14,22.46,22.46,0,0,1-13.45,7.89,19.06,19.06,0,0,1-3.61.37c-9,0-17.91,0-26.87,0a22,22,0,0,1-14-5A22.51,22.51,0,0,1,14.4,66.74a19.29,19.29,0,0,1-.27-3.23c0-9,0-18,0-27a21.73,21.73,0,0,1,5.37-14.29,22.4,22.4,0,0,1,13-7.65,18.62,18.62,0,0,1,3.94-.4ZM17,50h0c0,4.25,0,8.5,0,12.75a20.38,20.38,0,0,0,.23,3.4,19.56,19.56,0,0,0,7,12.27A19.77,19.77,0,0,0,37.38,83c8.27,0,16.55,0,24.82,0a26.81,26.81,0,0,0,3.47-.19,19.33,19.33,0,0,0,10.85-5.07A19.8,19.8,0,0,0,83,62.65V37.32a22.16,22.16,0,0,0-.25-3.45,19.57,19.57,0,0,0-6.6-11.95A19,19,0,0,0,63.47,17c-9-.05-18,0-27,0a16.86,16.86,0,0,0-3,.28,19.66,19.66,0,0,0-11.93,7A18.78,18.78,0,0,0,17,36C16.93,40.66,17,45.31,17,50Z"
            transform="translate(-14.12 -14.13)"
          />
          <path
            class="cls-2"
            d="M46.05,69.46a9.85,9.85,0,0,1-2.75,6.39,7.82,7.82,0,0,1-12.53-1.66A14.56,14.56,0,0,1,29,68a26.53,26.53,0,0,1,1.12-9.78,9.77,9.77,0,0,1,5.93-6.6A10,10,0,0,1,46.78,54a17.54,17.54,0,0,0,1.6,1.51,1,1,0,0,1,.38,1.35,1,1,0,0,1-1.23.42,21.31,21.31,0,0,0-5.62-.68,13.43,13.43,0,0,0-8.34,3A5.81,5.81,0,0,0,31.76,63a6.27,6.27,0,0,0,.73,5l.09.14c.18.24.36.52.71.27s.15-.48,0-.72a4.23,4.23,0,0,1-.8-2.19A3.73,3.73,0,0,1,34,62.27c2.77-2.33,8.64-2.14,11,1.7C45.67,65.21,46.05,66.63,46.05,69.46Z"
            transform="translate(-14.12 -14.13)"
          />
          <path
            class="cls-2"
            d="M46.06,39.74a10.48,10.48,0,0,1-3.16,7.73,7.86,7.86,0,0,1-11.64-1.29,13,13,0,0,1-2.18-6.34,25.88,25.88,0,0,1,1.17-10.7,9.42,9.42,0,0,1,7.34-6.73,9.66,9.66,0,0,1,9,2.62c.63.59,1.2,1.24,1.88,1.78a1,1,0,0,1,.32,1.28.94.94,0,0,1-1.17.45,20.91,20.91,0,0,0-5.83-.69,13.59,13.59,0,0,0-8,2.84,5.79,5.79,0,0,0-2,3.52,6.34,6.34,0,0,0,.72,5l.2.27c.15.22.35.33.6.15s.2-.4,0-.62a4.63,4.63,0,0,1-.81-1.91,3.65,3.65,0,0,1,1.33-3.54,7.48,7.48,0,0,1,12,4A9,9,0,0,1,46.06,39.74Z"
            transform="translate(-14.12 -14.13)"
          />
          <path
            class="cls-2"
            d="M69.88,62.06c0,4.35-.46,7.53-1.8,10.5a9.16,9.16,0,0,1-7.4,5.58,9.62,9.62,0,0,1-8.58-2.92,19.6,19.6,0,0,0-1.69-1.59,1,1,0,0,1-.31-1.32,1,1,0,0,1,1.2-.4,19.72,19.72,0,0,0,5.06.69,13.32,13.32,0,0,0,9.06-3.14,5.94,5.94,0,0,0,1.75-3.6,6.13,6.13,0,0,0-.84-4.7,1.66,1.66,0,0,0-.31-.38.35.35,0,0,0-.5,0,.31.31,0,0,0-.09.44c.08.13.15.26.23.38a3.88,3.88,0,0,1-1,5.53,7.54,7.54,0,0,1-5.13,1.28,6.74,6.74,0,0,1-5.84-3.66,8.62,8.62,0,0,1-.86-4.71,10.79,10.79,0,0,1,2.14-6A7.85,7.85,0,0,1,68.05,55,14.55,14.55,0,0,1,69.88,62.06Z"
            transform="translate(-14.12 -14.13)"
          />
          <path
            class="cls-2"
            d="M69.87,34.42a22.27,22.27,0,0,1-1.78,9.34,9.24,9.24,0,0,1-8.6,5.69,9.66,9.66,0,0,1-7.65-3.28c-.46-.48-1-.9-1.46-1.35a1,1,0,0,1-.28-1.28.92.92,0,0,1,1.18-.41,21.37,21.37,0,0,0,5.45.68,13.46,13.46,0,0,0,8.56-3A5.61,5.61,0,0,0,67,37.73a6.38,6.38,0,0,0-.65-5.3,3.62,3.62,0,0,0-.22-.32.39.39,0,0,0-.62-.1c-.22.17-.19.36,0,.57a4.53,4.53,0,0,1,.85,2,3.89,3.89,0,0,1-1.84,3.85c-3.87,2.82-10,.92-11.29-3.62a10.11,10.11,0,0,1,2.34-10.21,7.78,7.78,0,0,1,12.67,1.91A15.37,15.37,0,0,1,69.87,34.42Z"
            transform="translate(-14.12 -14.13)"
          />
        </svg>
      </div>
      <div className={style.expertises} id="expertises__menu">
        <div className={style.expertises_content}>
          <div className={style.expertises_flayer}>
            <div className={style.expertises_heading}>
              <h4>Our Expertise</h4>
            </div>
          </div>
          <div className={style.expertises_row}>
            <ul>
              <li>
                <div className={`${style.exp_achor} exper_achor`}>
                  <Link
                    onClick={closeMenu}
                    href="/services/web-development-and-digital-solution"
                  >
                    {" "}
                    Development & Digital Solutions
                  </Link>
                </div>
                <div className={style.pic}>
                  <Image
                    src={
                      "https://res.cloudinary.com/decjm9mmr/image/upload/q_30,f_auto/marketing_expir_rb3gcs.png"
                    }
                    alt="service image showcase"
                    width={300}
                    height={300}
                    loading="lazy"
                  />
                </div>
              </li>
              <li>
                <div className={`${style.exp_achor} exper_achor`}>
                  <Link
                    onClick={closeMenu}
                    href="/services/creative-design-and-branding"
                  >
                    Creative Design & Branding
                  </Link>
                </div>
                <div className={style.pic}>
                  <Image
                    src={
                      "https://res.cloudinary.com/decjm9mmr/image/upload/q_30,f_auto/creative_design_expertise_ze6yvl.png"
                    }
                    alt="service image showcase"
                    width={300}
                    height={300}
                    loading="lazy"
                  />
                </div>
              </li>
              <li>
                <div className={`${style.exp_achor} exper_achor`}>
                  <Link
                    onClick={closeMenu}
                    href="/services/audiovisual-and-motion-graphics"
                  >
                    Audiovisual & Motion Graphics
                  </Link>
                </div>
                <div className={style.pic}>
                  <Image
                    src={
                      "https://res.cloudinary.com/decjm9mmr/image/upload/q_30,f_auto/audio_visual_expertise_lgsik2.png"
                    }
                    alt="service image showcase"
                    width={300}
                    height={300}
                    loading="lazy"
                  />
                </div>
              </li>
              <li>
                <div className={`${style.exp_achor} exper_achor`}>
                  <Link
                    onClick={closeMenu}
                    href="/services/marketing-and-print-solutions"
                  >
                    Marketing & Print Solutions
                  </Link>
                </div>
                <div className={style.pic}>
                  <Image
                    src={
                      "https://res.cloudinary.com/decjm9mmr/image/upload/q_30,f_auto/branding_strategy_expertise_-removebg-preview_magybl.png"
                    }
                    alt="service image showcase"
                    width={300}
                    height={300}
                    loading="lazy"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
