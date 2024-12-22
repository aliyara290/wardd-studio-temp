import style from "@/styles/work/project/video.module.css";

const Video = ({ videoSrc }) => {
  return (
    <div className={style.content}>
      <div className={style.container}>
        <div className={style.player}>
          <video
            playsInline={true}
            autoPlay={true}
            muted={true}
            loop={true}
            src={videoSrc || "/videos/default-video.mp4"}
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Video;
