import style from "@/styles/work/project/mockups.module.css";
import Image from "next/image";

const Mockups = ({ images }) => {
  return (
    <div className={style.content}>
      <div className={style.container}>
        {images.map((image, index) => (
          <div className={style.part} key={index}>
            <div className={style.picture}>
              <Image
                src={image.src}
                width={500}
                height={500}
                alt="image"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mockups;
