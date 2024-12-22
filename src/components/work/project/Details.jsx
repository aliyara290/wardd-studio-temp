import style from "@/styles/work/project/details.module.css";

const Details = ({ description, highlight = [], services = [], website }) => {
  return (
    <div className={style.content}>
      <div className={style.container}>
        <div className={style.left}>
          <div className={style.description}>
            <p>{description || "Description not available."}</p>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.part}>
            <div className={style.heading}>
              <h2>Highlight</h2>
            </div>
            <div className={style.dets}>
              {/* Check if highlight has items */}
              <ul className={style.list}>
                {highlight.length > 0 ? (
                  highlight.map((item, index) => (
                    <li key={index} className={style.item}>
                      {item}
                    </li>
                  ))
                ) : (
                  <li>No highlights available.</li>
                )}
              </ul>
            </div>
          </div>
          <div className={style.part}>
            <div className={style.heading}>
              <h2>Services</h2>
            </div>
            <div className={style.dets}>
              {/* Check if services has items */}
              <ul className={style.list}>
                {services.length > 0 ? (
                  services.map((service, index) => (
                    <li key={index} className={style.item}>
                      {service}
                    </li>
                  ))
                ) : (
                  <li>No services available.</li>
                )}
              </ul>
            </div>
          </div>
          <div className={style.button}>
            <a href={website}>
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
