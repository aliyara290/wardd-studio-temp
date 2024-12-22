import style from "@/styles/work/project/richtext.module.css";

const Richtext = ({ title, description }) => {
  return (
    <div className={style.content}>
      <div className={style.container}>
        <div className={style.title}>
          <h1>{title}</h1>
        </div>
        <div className={style.description}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Richtext;
