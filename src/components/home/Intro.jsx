"use client";
import style from "@/styles/home/intro.module.css";

const Intro = () => {
  return (
    <section className={style.content} id="intro">
  
      <div className={style.container}>
        <div className={style.cards}>
          <div className={style.colOne}>
            <div className={style.rowOne}>
              <div className={style.bgImg}>
                <img src="https://res.cloudinary.com/decjm9mmr/image/upload/q_40,f_auto/banner_ijonz9.jpg" alt="mockup" />
              </div>
              <div className={style.detImg}>
                <img src="https://res.cloudinary.com/decjm9mmr/image/upload/q_10,f_auto/Asset_2_zstra7.png" alt="" />
              </div>
            </div>
            <div className={style.rowTwo}>
              <div className={style.card}>
                <div className={style.heading}>
                  <div className={style.title}>
                    <h3>Who We Are!</h3>
                  </div>
                  <div className={style.icon}>
                    <svg
                      viewBox="0 0 32 21"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                      width={50}
                    >
                      <path d="M6.5 20C9.53757 20 12 17.5376 12 14.5C12 11.4624 9.53757 9 6.5 9C3.46243 9 1 11.4624 1 14.5C1 17.5376 3.46243 20 6.5 20Z"></path>
                      <path d="M6.5 21C2.916 21 0 18.084 0 14.5C0 10.916 2.916 8 6.5 8C10.084 8 13 10.916 13 14.5C13 18.084 10.084 21 6.5 21ZM6.5 10C4.019 10 2 12.019 2 14.5C2 16.981 4.019 19 6.5 19C8.981 19 11 16.981 11 14.5C11 12.019 8.981 10 6.5 10Z"></path>
                      <path d="M23.5 20C26.5376 20 29 17.5376 29 14.5C29 11.4624 26.5376 9 23.5 9C20.4624 9 18 11.4624 18 14.5C18 17.5376 20.4624 20 23.5 20Z"></path>
                      <path d="M23.5 21C19.916 21 17 18.084 17 14.5C17 10.916 19.916 8 23.5 8C27.084 8 30 10.916 30 14.5C30 18.084 27.084 21 23.5 21ZM23.5 10C21.019 10 19 12.019 19 14.5C19 16.981 21.019 19 23.5 19C25.981 19 28 16.981 28 14.5C28 12.019 25.981 10 23.5 10Z"></path>
                      <path d="M1 15C0.447 15 0 14.553 0 14C0 6.28 6.28 0 14 0C14.553 0 15 0.447 15 1C15 1.553 14.553 2 14 2C7.383 2 2 7.383 2 14C2 14.553 1.553 15 1 15Z"></path>
                      <path d="M18 15C17.447 15 17 14.553 17 14C17 6.28 23.28 0 31 0C31.553 0 32 0.447 32 1C32 1.553 31.553 2 31 2C24.383 2 19 7.383 19 14C19 14.553 18.553 15 18 15Z"></path>
                    </svg>
                  </div>
                </div>
                <div className={style.description}>
                  <p>
                    we're dedicated to igniting positive transformations
                    alongside our clients. Through our collaborative efforts, we
                    propel brands forward.
                  </p>
                </div>
              </div>
              <div className={style.card}>
                <div className={style.detailes}>
                  <div className={style.numbers}>
                    <h3>100+</h3>
                  </div>
                  <div className={style.description}>
                    <p>Successfully launched projects</p>
                  </div>
                  {/* <div className={style.button}>
                    <button>Book a call</button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className={style.colTwo}>
            {/* <div className={style.heading}>
              <h2>Services</h2>
            </div> */}
            <img src="https://res.cloudinary.com/decjm9mmr/image/upload/q_20,f_auto/2_msg8tp.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
