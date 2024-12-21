import style from "@/styles/work/project/hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={style.content}>
      <div className={style.container}>
        <div className={style.picture}>
          <Image
            src="/profile.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className={style.title}>
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
