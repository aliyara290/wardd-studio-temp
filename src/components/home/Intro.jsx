"use client";
import style from "@/styles/home/intro.module.css";

const Intro = () => {
  return (
    <section className={style.content} id="intro">
      <div className={style.container}>
        <div className={style.intro_text}>
          <div className={style.intro_heading}>
            <span className={style.intro_heading_point}></span>
            <span>Intro</span>
          </div>
          <div className={style.intro_splitText}>
            <div>Discover Stretchedweb Crafting exceptional websites, social media identities and logos tailored to your brand's vision.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
