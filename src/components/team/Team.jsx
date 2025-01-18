"use client";
import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import style from "@/styles/team/team.module.css";



function Team() {

  // useLocomotiveScroll();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".card_anim",
      {
        y: "10%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".card_anim",
          start: "top bottom",
          end: "bottom center",
        },
      }
    );
  }, []);
  const teamMember = [
    {
      pic: "/images/team/kamal.jpg",
      name: "Kamal Sekkar",
      position: "Creative Director, Founder",
    },
    {
      pic: "/images/team/omflow.jpg",
      name: "Oussama Mounaji",
      position: "Chief Operations Officer, Founder",
    },
    // {
    //   pic: "/images/team/moustafa.jpg",
    //   name: "Elmostapha Aamre",
    //   position: "Chief Executive Officer, Founder",
    // },
    {
      pic: "/images/team/guarouani.jpg",
      name: "Mohamed Guarouani",
      position: "Head of Production",
    },
    {
      pic: "/images/team/sugar.jpg",
      name: "Mohamed Sekkar",
      position: "Head of Development",
    },
    {
      pic: "/images/team/ghada.jpg",
      name: "Ghada Naji",
      position: "Chief Creative Officer",
    },
    {
      pic: "/images/team/chaimae.jpg",
      name: "Chaimae El Bazrazi",
      position: "Chief Design Officer",
    },
    {
      pic: "/images/team/yara.jpg",
      name: "Ali Yara",
      position: "Full Stack Developer",
    },
    // {
    //   pic: "/images/team/faleh.jpg",
    //   name: "Oussama Faleh",
    //   position: "Sound Engineer | Producer",
    // },
    {
      pic: "/images/team/imran.jpg",
      name: "Imrane El Fakyr",
      position: "Sound Engineer | Producer",
    },
    {
      pic: "/images/team/abdalhadi.jpg",
      name: "Abdelhadi Bouchrouaat",
      position: "Visual Identity Designer",
    },
  ];
  return (
    <div className={style.content}>
      <div className={style.container}>
        <div className={style.bold_text}>
          <div className={style.text} data-scroll data-scroll-speed="1">
            <h1 className="studio_hero_heading">Team.</h1>
          </div>
        </div>
        <div className={style.cross_line}></div>
        <div className={style.cards_list}>
          {teamMember.map((member, index) => (
            <div className={`${style.card} card_anim`} key={index}>
              <div className={style.picture}>
                <img src={member.pic} alt={member.name} loading="lazy" />
              </div>
              <div className={style.member_detail}>
                <div className={style.fullname}>
                  <h4>{member.name}</h4>
                </div>
                <div className={style.position}>
                  <h5>{member.position}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
