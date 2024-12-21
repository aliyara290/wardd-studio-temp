import style from "@/styles/work/project/richtext.module.css";
import Image from "next/image";

const Richtext = () => {
  return (
    <div className={style.content}>
      <div className={style.container}>
        <div className={style.title}>
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        </div>
        <div className={style.description}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores quae reiciendis suscipit id nostrum veritatis eos accusantium excepturi libero labore molestias possimus ducimus culpa sequi cumque voluptas aut, impedit molestiae et. Illum in nulla ipsa incidunt eos possimus tempora.</p>
        </div>
      </div>
    </div>
  );
};

export default Richtext;
