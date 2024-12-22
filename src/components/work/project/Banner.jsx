import style from "@/styles/work/project/banner.module.css";
import Image from "next/image";

const Banner = ({ image, altText }) => {
  return (
    <div className={style.content}>
      <div className={style.container}>
        <div className={style.picture}>
          <Image
            src={image}
            width={500}
            height={500}
            alt={altText}
            priority={true} // Improves performance for above-the-fold images
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
