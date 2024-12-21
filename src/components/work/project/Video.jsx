import style from "@/styles/work/project/video.module.css";
import Image from "next/image";

const Video = () => {
  return (
    <div className={style.content}>
      <div className={style.container}>
        <div className={style.player}>
          <video
            playsInline={true}
            autoPlay={true}
            muted={true}
            loop={true}
            src="/videos/video-home-stretched.mp4"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Video;
