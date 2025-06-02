"use client";
import style from "@/styles/services/ServicePageStyle/projects.module.css";
import Image from "next/image";
import Heading from "@/components/Heading";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const ServiceProjects = ({ projectsGallery, deviceType, heading }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={style.content}>
      <div className={style.container}>
        <Heading
          subHeading={"Projects"}
          topHeading={"recent"}
          botHeading={"projects"}
          centerHeading={false}
          showSubHeading={true}
          
        />
        <div className={style.carousel}>
          <Carousel
            responsive={responsive}
            draggable={true}
            customTransition="all .9s ease"
            itemClass="carousel-item-padding-40-px"
            
          >
            {projectsGallery.map((card, index) => (
              <div className={style.card} key={index}>
                <div className={style.card_inner}>
                  <div className={style.image}>
                    <Image
                      src={card.image}
                      alt="pic"
                      width={300}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ServiceProjects;
