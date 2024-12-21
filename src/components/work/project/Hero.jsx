import style from "@/styles/work/project/hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={style.content}>
      <div className={style.container}>
        <div className={style.picture}>
          <Image
            src="/images/bg/hero_test.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className={style.body}>
          <div className={style.title}>
            <h1>Wardd Music</h1>
          </div>
          <div className={style.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              labore?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
