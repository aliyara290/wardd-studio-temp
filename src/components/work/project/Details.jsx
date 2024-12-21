import style from "@/styles/work/project/details.module.css";

const Details = () => {
  return (
    <div className={style.content}>
      <div className={style.container}>
        <div className={style.left}>
          <div className={style.description}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vitae temporibus assumenda magni neque dolorum esse enim, optio corrupti repudiandae, maxime modi quia ex nostrum rem ratione fuga. Saepe, deserunt.</p>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.part}>
            <div className={style.heading}>
                <h2>Highlight</h2>
            </div>
            <div className={style.dets}>
                <ul className={style.list}>
                    <li className={style.item}>Lorem ipsum dolor sit.</li>
                    <li className={style.item}>Lorem ipsum dolor sit.</li>
                    <li className={style.item}>Lorem ipsum dolor sit.</li>
                    <li className={style.item}>Lorem ipsum dolor sit.</li>
                </ul>
            </div>
          </div>
          <div className={style.part}>
          <div className={style.heading}>
                <h2>Services</h2>
            </div>
            <div className={style.dets}>
                <ul className={style.list}>
                    <li className={style.item}>Lorem ipsum dolor sit.</li>
                    <li className={style.item}>Lorem ipsum dolor sit.</li>
                    <li className={style.item}>Lorem ipsum dolor sit.</li>
                    <li className={style.item}>Lorem ipsum dolor sit.</li>
                </ul>
            </div>
          </div>
          <div className={style.button}>
            <a href="">
                <button>
                    <span>View Website</span>
                    <span></span>
                </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
