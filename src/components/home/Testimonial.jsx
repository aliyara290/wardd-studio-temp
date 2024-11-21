"use client";
import { useEffect } from "react";
import style from "@/styles/home/testimonial.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "@/components/Heading";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonial = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".horizontal__jf45", {
      x: -40,
      duration: 1,
      delay: 0.4,
      onComplete: () => {
        gsap.to(".horizontal__jf45", {
          x: 0,
          duration: 1,
        });
      },
      scrollTrigger: {
        trigger: ".horizontal__jf45",
        start: "bottom bottom",
        end: "bottom center",
      },
    });
  }, []);

  const reviews = [
    {
      client: "Ossama, CEO / Wardd studio",
      feedback: `The website your agency developed for us is fantastic! It's sleek, easy to navigate, and has already attracted positive attention from our customers. Great job!`,
      picture: "/images/clients/My-photo.jpg",
    },
    {
      client: "Sulaiman, CEO / Sulainman Lawyer",
      feedback: `Absolutely thrilled with the website your team created for us! It perfectly captures our brand's essence and is so user-friendly. Thanks for the stellar work!`,
      picture: "/images/clients/My-photo.jpg",
    },
    {
      client: "Mustafa, CEO / Smiley",
      feedback: `Thanks to your SEO expertise, our website is now ranking higher in search engine results. We've noticed a significant increase in organic traffic, which has translated into more leads. Keep up the good work!`,
      picture: "/images/clients/My-photo.jpg",
    },
    {
      client: "Paul, Founder / Crip",
      feedback: `Working with your agency on our web development needs was a breeze. Your team was responsive, professional, and delivered exactly what we were looking for. We couldn't be happier with the results!`,
      picture: "/images/clients/My-photo.jpg",
    },
    {
      client: "Michael, Founder / Modavista",
      feedback: `The attention to detail your agency put into our website's design is impressive. It's visually stunning and has already received positive feedback from our customers. Keep up the excellent work!`,
      picture: "/images/clients/My-photo.jpg",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1300, min: 1020 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1020, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  return (
    <section className={style.content}>
      <div className={style.container}>
        <Heading
          topHeading={"Clients"}
          botHeading={"testimonial"}
          centerHeading={true}
          showSubHeading={false}
        />
        <div className={`${style.cards} test_cards`}>
          {reviews.map((review, index) => (
            <div className={`${style.card} test_card_${index + 1}`} key={index}>
              <div className={style.stars}>
                <span>
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 45.91 44.2"
                    width={20}
                    height={20}
                  >
                    <path
                      d="M107.43,72.09c-.21-.14-.37-.23-.52-.32L93.46,63.26a.59.59,0,0,0-.75,0L79.25,71.77l-.53.33c.23-.93.44-1.79.66-2.65q1.71-6.7,3.43-13.41a.58.58,0,0,0-.22-.69L70.51,45.11l-.36-.33,1.95-.15,11.6-.75c.92-.06,1.85-.14,2.77-.17.33,0,.39-.2.48-.43l4.62-11.61c.49-1.22,1-2.44,1.5-3.77.1.22.17.36.22.5q3,7.41,5.9,14.82a.66.66,0,0,0,.66.5c3.5.21,7,.45,10.48.68l4.75.3,1,.09-2.77,2.35-9.69,8.21a.6.6,0,0,0-.23.72q2,7.78,4,15.58C107.38,71.77,107.39,71.89,107.43,72.09Z"
                      transform="translate(-70.15 -27.9)"
                    />
                  </svg>
                </span>
                <span>
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 45.91 44.2"
                    width={20}
                    height={20}
                  >
                    <path
                      d="M107.43,72.09c-.21-.14-.37-.23-.52-.32L93.46,63.26a.59.59,0,0,0-.75,0L79.25,71.77l-.53.33c.23-.93.44-1.79.66-2.65q1.71-6.7,3.43-13.41a.58.58,0,0,0-.22-.69L70.51,45.11l-.36-.33,1.95-.15,11.6-.75c.92-.06,1.85-.14,2.77-.17.33,0,.39-.2.48-.43l4.62-11.61c.49-1.22,1-2.44,1.5-3.77.1.22.17.36.22.5q3,7.41,5.9,14.82a.66.66,0,0,0,.66.5c3.5.21,7,.45,10.48.68l4.75.3,1,.09-2.77,2.35-9.69,8.21a.6.6,0,0,0-.23.72q2,7.78,4,15.58C107.38,71.77,107.39,71.89,107.43,72.09Z"
                      transform="translate(-70.15 -27.9)"
                    />
                  </svg>
                </span>
                <span>
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 45.91 44.2"
                    width={20}
                    height={20}
                  >
                    <path
                      d="M107.43,72.09c-.21-.14-.37-.23-.52-.32L93.46,63.26a.59.59,0,0,0-.75,0L79.25,71.77l-.53.33c.23-.93.44-1.79.66-2.65q1.71-6.7,3.43-13.41a.58.58,0,0,0-.22-.69L70.51,45.11l-.36-.33,1.95-.15,11.6-.75c.92-.06,1.85-.14,2.77-.17.33,0,.39-.2.48-.43l4.62-11.61c.49-1.22,1-2.44,1.5-3.77.1.22.17.36.22.5q3,7.41,5.9,14.82a.66.66,0,0,0,.66.5c3.5.21,7,.45,10.48.68l4.75.3,1,.09-2.77,2.35-9.69,8.21a.6.6,0,0,0-.23.72q2,7.78,4,15.58C107.38,71.77,107.39,71.89,107.43,72.09Z"
                      transform="translate(-70.15 -27.9)"
                    />
                  </svg>
                </span>
                <span>
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 45.91 44.2"
                    width={20}
                    height={20}
                  >
                    <path
                      d="M107.43,72.09c-.21-.14-.37-.23-.52-.32L93.46,63.26a.59.59,0,0,0-.75,0L79.25,71.77l-.53.33c.23-.93.44-1.79.66-2.65q1.71-6.7,3.43-13.41a.58.58,0,0,0-.22-.69L70.51,45.11l-.36-.33,1.95-.15,11.6-.75c.92-.06,1.85-.14,2.77-.17.33,0,.39-.2.48-.43l4.62-11.61c.49-1.22,1-2.44,1.5-3.77.1.22.17.36.22.5q3,7.41,5.9,14.82a.66.66,0,0,0,.66.5c3.5.21,7,.45,10.48.68l4.75.3,1,.09-2.77,2.35-9.69,8.21a.6.6,0,0,0-.23.72q2,7.78,4,15.58C107.38,71.77,107.39,71.89,107.43,72.09Z"
                      transform="translate(-70.15 -27.9)"
                    />
                  </svg>
                </span>
                <span>
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 45.91 44.2"
                    width={20}
                    height={20}
                  >
                    <path
                      d="M107.43,72.09c-.21-.14-.37-.23-.52-.32L93.46,63.26a.59.59,0,0,0-.75,0L79.25,71.77l-.53.33c.23-.93.44-1.79.66-2.65q1.71-6.7,3.43-13.41a.58.58,0,0,0-.22-.69L70.51,45.11l-.36-.33,1.95-.15,11.6-.75c.92-.06,1.85-.14,2.77-.17.33,0,.39-.2.48-.43l4.62-11.61c.49-1.22,1-2.44,1.5-3.77.1.22.17.36.22.5q3,7.41,5.9,14.82a.66.66,0,0,0,.66.5c3.5.21,7,.45,10.48.68l4.75.3,1,.09-2.77,2.35-9.69,8.21a.6.6,0,0,0-.23.72q2,7.78,4,15.58C107.38,71.77,107.39,71.89,107.43,72.09Z"
                      transform="translate(-70.15 -27.9)"
                    />
                  </svg>
                </span>
              </div>

              <div className={style.feedback}>
                <p>{review.feedback}</p>
              </div>
              <div className={style.profile}>
                <div className={style.client}>
                  <h4>{review.client}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Carousel
          responsive={responsive}
          draggable={true}
          customTransition="all .9s ease"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          className="horizontal__jf45"
        >
          {reviews.map((review, index) => (
            <div className={`${style.horizontal_cards} horizontal__jf45`} key={index}>
              <div className={`${style.card_hor}`}>
                <div className={style.stars}>
                  <span>
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 45.91 44.2"
                      width={20}
                      height={20}
                    >
                      <path
                        d="M107.43,72.09c-.21-.14-.37-.23-.52-.32L93.46,63.26a.59.59,0,0,0-.75,0L79.25,71.77l-.53.33c.23-.93.44-1.79.66-2.65q1.71-6.7,3.43-13.41a.58.58,0,0,0-.22-.69L70.51,45.11l-.36-.33,1.95-.15,11.6-.75c.92-.06,1.85-.14,2.77-.17.33,0,.39-.2.48-.43l4.62-11.61c.49-1.22,1-2.44,1.5-3.77.1.22.17.36.22.5q3,7.41,5.9,14.82a.66.66,0,0,0,.66.5c3.5.21,7,.45,10.48.68l4.75.3,1,.09-2.77,2.35-9.69,8.21a.6.6,0,0,0-.23.72q2,7.78,4,15.58C107.38,71.77,107.39,71.89,107.43,72.09Z"
                        transform="translate(-70.15 -27.9)"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 45.91 44.2"
                      width={20}
                      height={20}
                    >
                      <path
                        d="M107.43,72.09c-.21-.14-.37-.23-.52-.32L93.46,63.26a.59.59,0,0,0-.75,0L79.25,71.77l-.53.33c.23-.93.44-1.79.66-2.65q1.71-6.7,3.43-13.41a.58.58,0,0,0-.22-.69L70.51,45.11l-.36-.33,1.95-.15,11.6-.75c.92-.06,1.85-.14,2.77-.17.33,0,.39-.2.48-.43l4.62-11.61c.49-1.22,1-2.44,1.5-3.77.1.22.17.36.22.5q3,7.41,5.9,14.82a.66.66,0,0,0,.66.5c3.5.21,7,.45,10.48.68l4.75.3,1,.09-2.77,2.35-9.69,8.21a.6.6,0,0,0-.23.72q2,7.78,4,15.58C107.38,71.77,107.39,71.89,107.43,72.09Z"
                        transform="translate(-70.15 -27.9)"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 45.91 44.2"
                      width={20}
                      height={20}
                    >
                      <path
                        d="M107.43,72.09c-.21-.14-.37-.23-.52-.32L93.46,63.26a.59.59,0,0,0-.75,0L79.25,71.77l-.53.33c.23-.93.44-1.79.66-2.65q1.71-6.7,3.43-13.41a.58.58,0,0,0-.22-.69L70.51,45.11l-.36-.33,1.95-.15,11.6-.75c.92-.06,1.85-.14,2.77-.17.33,0,.39-.2.48-.43l4.62-11.61c.49-1.22,1-2.44,1.5-3.77.1.22.17.36.22.5q3,7.41,5.9,14.82a.66.66,0,0,0,.66.5c3.5.21,7,.45,10.48.68l4.75.3,1,.09-2.77,2.35-9.69,8.21a.6.6,0,0,0-.23.72q2,7.78,4,15.58C107.38,71.77,107.39,71.89,107.43,72.09Z"
                        transform="translate(-70.15 -27.9)"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 45.91 44.2"
                      width={20}
                      height={20}
                    >
                      <path
                        d="M107.43,72.09c-.21-.14-.37-.23-.52-.32L93.46,63.26a.59.59,0,0,0-.75,0L79.25,71.77l-.53.33c.23-.93.44-1.79.66-2.65q1.71-6.7,3.43-13.41a.58.58,0,0,0-.22-.69L70.51,45.11l-.36-.33,1.95-.15,11.6-.75c.92-.06,1.85-.14,2.77-.17.33,0,.39-.2.48-.43l4.62-11.61c.49-1.22,1-2.44,1.5-3.77.1.22.17.36.22.5q3,7.41,5.9,14.82a.66.66,0,0,0,.66.5c3.5.21,7,.45,10.48.68l4.75.3,1,.09-2.77,2.35-9.69,8.21a.6.6,0,0,0-.23.72q2,7.78,4,15.58C107.38,71.77,107.39,71.89,107.43,72.09Z"
                        transform="translate(-70.15 -27.9)"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 45.91 44.2"
                      width={20}
                      height={20}
                    >
                      <path
                        d="M107.43,72.09c-.21-.14-.37-.23-.52-.32L93.46,63.26a.59.59,0,0,0-.75,0L79.25,71.77l-.53.33c.23-.93.44-1.79.66-2.65q1.71-6.7,3.43-13.41a.58.58,0,0,0-.22-.69L70.51,45.11l-.36-.33,1.95-.15,11.6-.75c.92-.06,1.85-.14,2.77-.17.33,0,.39-.2.48-.43l4.62-11.61c.49-1.22,1-2.44,1.5-3.77.1.22.17.36.22.5q3,7.41,5.9,14.82a.66.66,0,0,0,.66.5c3.5.21,7,.45,10.48.68l4.75.3,1,.09-2.77,2.35-9.69,8.21a.6.6,0,0,0-.23.72q2,7.78,4,15.58C107.38,71.77,107.39,71.89,107.43,72.09Z"
                        transform="translate(-70.15 -27.9)"
                      />
                    </svg>
                  </span>
                </div>

                <div className={style.feedback}>
                  <p>{review.feedback}</p>
                </div>
                <div className={style.profile}>
                  <div className={style.client}>
                    <h4>{review.client}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
