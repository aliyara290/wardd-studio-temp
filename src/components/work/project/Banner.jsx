import style from "@/styles/work/project/banner.module.css";
import Image from "next/image";

const Banner = () => {
  return (
    <div className={style.content}>
      <div className={style.container}>
        <div className={style.picture}>
          <Image
            src="/images/bg/banner_test.jpeg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
