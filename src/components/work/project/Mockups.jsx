import style from "@/styles/work/project/mockups.module.css";
import Image from "next/image";

const Mockups = () => {
  return (
    <div className={style.content}>
      <div className={style.container}>
        <div className={style.part}>
          <div className={style.picture}>
            <Image
              src="/images/bg/mockup_test.jpg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className={style.part}>
          <div className={style.picture}>
            <Image
              src="/images/bg/mockup_test_2.jpg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mockups;
