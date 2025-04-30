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
      pic: "https://res.cloudinary.com/decjm9mmr/image/upload/q_10,f_auto/kamal_jjp734.jpg",
      name: "Kamal Sekkar",
      position: "Creative Director, Founder",
    },
    {
      pic: "https://res.cloudinary.com/decjm9mmr/image/upload/q_10,f_auto/omflow_vcnhnx.jpg",
      name: "Oussama Mounaji",
      position: "Chief Operations Officer, Founder",
    },
    // {
    //   pic: "https://res.cloudinary.com/decjm9mmr/image/upload/q_10,f_auto/moustafa_llilby.jpg",
    //   name: "Elmostapha Aamre",
    //   position: "Chief Executive Officer, Founder",
    // },
    {
      pic: "https://res.cloudinary.com/decjm9mmr/image/upload/q_10,f_auto/sugar_bijzyz.jpg",
      name: "Mohamed Sekkar",
      position: "Head of Development",
    },
    {
      pic: "https://res.cloudinary.com/decjm9mmr/image/upload/q_10,f_auto/guarouani_eeu8e9.jpg",
      name: "Mohamed Guarouani",
      position: "Head of Production",
    },
    {
      pic: "https://res.cloudinary.com/decjm9mmr/image/upload/q_10,f_auto/yara_w1dfxn.jpg",
      name: "Ali Yara",
      position: "Full Stack Developer",
    },
    
    {
      pic: "https://res.cloudinary.com/decjm9mmr/image/upload/q_10,f_auto/ghada_yetpsh.jpg",
      name: "Ghada Naji",
      position: "Chief Creative Officer",
    },
    {
      pic: "https://res.cloudinary.com/decjm9mmr/image/upload/q_10,f_auto/chaimae_z61xaj.jpg",
      name: "Chaimae El Bazrazi",
      position: "Chief Design Officer",
    },
    {
      pic: "https://res.cloudinary.com/decjm9mmr/image/upload/q_10,f_auto/abdalhadi_y6yzlm.jpg",
      name: "Abdelhadi Bouchrouaat",
      position: "Visual Identity Designer",
    },  
    {
      pic: "https://res.cloudinary.com/decjm9mmr/image/upload/q_10,f_auto/imran_kio94h.jpg",
      name: "Imrane El Fakyr",
      position: "Sound Engineer | Producer",
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
