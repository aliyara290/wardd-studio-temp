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
          {website && (
            <div className={style.button}>
              <a href={website} target="_blank">
                <button class="flex items-center gap-1.5">
                  <span>View Website</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </span>
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
