import Footer from "@/components/home/Footer";
import ServiceHero from "@/components/services/ServicePageComponents/ServiceHero";
import OurRules from "@/components/home/OurRules";
import Head from "next/head";
import ServiceProjects from "@/components/services/ServicePageComponents/ServiceProjects";
import Explore from "@/components/services/ServicePageComponents/explore";

export const metadata = {
  description: "Building robust and scalable websites tailored to your needs, we ensure a seamless user experience across all devices.",
  title: 'Website Development - Stretchedweb',
};

const WebDevelopment = () => {
  const cardDedtails = [
    {
      number: "01",
      title: "DISCOVERY",
      description:
        "We work collaboratively with our clients to define requirements and architect solutions that align their unique needs and business goals with off-the-shelf and custom development.",
    },
    {
      number: "02",
      title: "STRUCTURE",
      description:
        "We specialize in creating intuitive and streamlined structures that transform how users navigate and engage with your content.With our meticulous approach, we'll analyze your website's content, understand your audience's needs.",
    },
    {
      number: "03",
      title: "WIREFRAME",
      description:
        "The primary purpose of wireframes is to communicate the structure and functionality of the product, allowing stakeholders to provide feedback and make informed decisions before investing significant resources into detailed design and development.",
    },
  ];

  const projectsGallery = [
    {
      image: "/images/web_design/01 stretched.webp",
    },
    {
      image: "/images/web_design/02 stretched.webp",
    },
    {
      image: "/images/web_design/03 stretched.webp",
    },
    {
      image: "/images/web_design/04 stretched.webp",
    },
    {
      image: "/images/web_design/PET 02.webp",
    },
    {
      image: "/images/web_design/PET 01.webp",
    },
    {
      image: "/images/web_design/PET 03 stretched.webp",
    },
    {
      image: "/images/web_design/PET 04 stretched.webp",
    },
    {
      image: "/images/web_design/PET 00 stretched.webp",
    },
  ];

  return (
    <>
   
      <ServiceHero
        name={"Website"}
        subName={"Development"}
        firstBio={
          "AS A COMPANY, YOU REQUIRE A PARTNER WHO UNDERSTANDS THE SIGNIFICANCE OF GOING BEYOND PRODUCT AND SERVICE DESIGN."
        }
        SecondBio={
          "Our expertise lies in building profound connections that extend to the broader scope of your brand, encompassing your customers. It is through fostering these connections that genuine brand loyalty is cultivated."
        }
      />
      <ServiceProjects
        projectsGallery={projectsGallery}
        heading={"web development"}
      />
      <OurRules cardDedtails={cardDedtails} fHeading={'service'} sHeading={'description'} />

      <Explore />
      <Footer />
    </>
  );
};

export default WebDevelopment;
