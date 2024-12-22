import style from "@/styles/work/project/hero.module.css";
import Image from "next/image";

const Hero = ({ image, title, bio }) => {
  return (
    <div className={style.content}>
      <div className={style.container}>
        <div className={style.picture}>
          <Image
            src={image || "/images/bg/ero_test.jpg"}
            alt={title || "Default Image"}
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
        <div className={style.body}>
          <div className={style.title}>
            <h1>{title || "Default Title"}</h1>
          </div>
          <div className={style.description}>
            <p>
              {bio || "Default description for the project."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
