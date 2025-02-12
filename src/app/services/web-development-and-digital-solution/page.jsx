import Footer from "@/components/home/Footer";
import ServiceHero from "@/components/services/ServicePageComponents/ServiceHero";
import OurRules from "@/components/home/OurRules";
import Head from "next/head";
import ServiceProjects from "@/components/services/ServicePageComponents/ServiceProjects";
import Explore from "@/components/services/ServicePageComponents/explore";
import Intro from "@/components/services/ServicePageComponents/Intro";

export const metadata = {
  description: "Building robust and scalable websites tailored to your needs, we ensure a seamless user experience across all devices.",
  title: 'Website Development - Stretchedweb',
};

const DigitalMarketingPage = () => {
  const cardDedtails = [
    {
      number: "01",
      title: "Web Development",
      description:
        "Crafting high-quality, responsive websites that align with your business goals, offering optimal performance, seamless navigation, and a visually appealing design to enhance user experience and engagement.",
    },
    {
      number: "02",
      title: "Digital Marketing",
      description:
        "Elevating your brand with tailored online marketing strategies, including search engine optimization (SEO), social media campaigns, and content creation, to increase visibility, drive traffic, and maximize conversions.",
    },
    {
      number: "03",
      title: "App Development",
      description:
        "Developing innovative mobile and web applications designed to provide an intuitive user experience, robust functionality, and scalable solutions to meet your business objectives in the digital era.",
    },
  ];

  return (
    <div className="page__content">
      <ServiceHero
        name={"Website"}
        subName={"Development"}
        firstBio={
          "AS A COMPANY, YOU REQUIRE A PARTNER WHO UNDERSTANDS THE SIGNIFICANCE OF GOING BEYOND PRODUCT AND SERVICE DESIGN."
        }
        SecondBio={
          "Our expertise lies in building profound connections that extend to the broader scope of your brand, encompassing your customers. It is through fostering these connections that genuine brand loyalty is cultivated."
        }
        src={"/images/bg/banner mark.jpg"} // Updated image path
      />
      <Intro />
      {/* <ServiceProjects
        projectsGallery={projectsGallery}
        heading={"web development"}
      /> */}
      <OurRules cardDedtails={cardDedtails} fHeading={'Whate We'} sHeading={'Offer'} />

      <Explore />
      <Footer />
    </div>
  );
};

export default DigitalMarketingPage;