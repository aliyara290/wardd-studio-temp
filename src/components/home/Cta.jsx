import React from "react";
import style from "@/styles/home/cta.module.css";

function Cta() {
  return (
    <div className={style.content}>
      <div className={style.container}>
        <div className={style.title}>
          <h2>Let's Collab</h2>
        </div>
        <div className={style.description}>
          <p>
            Fill our form, book a call or contact us via email and let's see if
            we are good fit!
          </p>
        </div>
        <div className={style.button}>
          <a href="#" className={style.link}>
            <button>Book a call</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cta;
