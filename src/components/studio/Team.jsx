import React from "react";
import Marquee from "react-fast-marquee";
import style from "@/styles/studio/team.module.css";
import Link from "next/link";

function Team() {
  const teamMemberPics = [
    {
      pic: "/images/team/kamal.jpg",
      name: "Kamal Sekkar",
    },
    {
      pic: "/images/team/omflow.jpg",
      name: "Oussama Mounaji",
    },
    {
      pic: "/images/team/sugar.jpg",
      name: "Simo Sekkar",
    },
    {
      pic: "/images/team/ghada.jpg",
      name: "Ghada",
    },
    {
      pic: "/images/team/chaimae.jpg",
      name: "chaimae",
    },
    {
      pic: "/images/team/yara.jpg",
      name: "Ali Yara",
    },
    {
      pic: "/images/team/faleh.jpg",
      name: "Oussama Faleh",
    },
    {
      pic: "/images/team/imran.jpg",
      name: "Imran",
    },
  ];
  return (
    <div className={style.content}>
      <div className={style.container}>
        <Marquee speed={90}>
          <div className={style.cards}>
            {teamMemberPics.map((member, index) => (
              <div className={style.card} key={index}>
                <div className={style.card_img}>
                  <img src={member.pic} alt={member.name} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </Marquee>
        <div className={style.explore}>
          <div className={style.title}>
            <h2>The Team</h2>
          </div>
          <div className={style.button}>
            <Link href="/team">
              <button>
                <span>Discover Team</span>
                <span>
                  <svg
                    version="1.1"
                    id="Ebene_1"
                    viewBox="0 0 12 12"
                    fill="black"
                    width={20}
                  >
                    <polygon
                      points="2.8,1.5 2.8,2.9 8.2,2.9 1.5,9.6 2.4,10.5 9.2,3.7 9.2,9.5 10.5,9.5 10.5,1.5 "
                    ></polygon>
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
