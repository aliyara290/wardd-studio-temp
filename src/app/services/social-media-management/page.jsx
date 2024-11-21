import Footer from "@/components/home/Footer";
import ServiceHero from "@/components/services/ServicePageComponents/ServiceHero";
import OurRules from "@/components/home/OurRules";
import Head from "next/head";
import ServiceProjects from "@/components/services/ServicePageComponents/ServiceProjects";
import Explore from "@/components/services/ServicePageComponents/explore";

const SocialMediaManagement = () => {
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
      image: "/images/social-media/1.webp",
    },
    {
      image: "/images/social-media/01.webp",
    },
    {
      image: "/images/social-media/3.webp",
    },
    {
      image: "/images/social-media/03.webp",
    },
    {
      image: "/images/social-media/4.webp",
    },
    {
      image: "/images/social-media/04.webp",
    },
    {
      image: "/images/social-media/real-estat-03.webp",
    },
    {
      image: "/images/social-media/real-estat-04.webp",
    },
    {
      image: "/images/social-media/real-estat-05.webp",
    },
    {
      image: "/images/social-media/real-estat-06.webp",
    },
  ];

  return (
    <>
   
      <ServiceHero
        name={"Social Media"}
        subName={"Management"}
        firstBio={
          "AS A COMPANY, YOU REQUIRE A PARTNER WHO UNDERSTANDS THE SIGNIFICANCE OF GOING BEYOND PRODUCT AND SERVICE DESIGN."
        }
        SecondBio={
          "Our expertise lies in building profound connections that extend to the broader scope of your brand, encompassing your customers. It is through fostering these connections that genuine brand loyalty is cultivated."
        }
      />
      <ServiceProjects
        projectsGallery={projectsGallery}
        heading={"social media"}
      />
      <OurRules cardDedtails={cardDedtails} fHeading={'service'} sHeading={'description'} />

      <Explore />
      <Footer />
    </>
  );
};

export default SocialMediaManagement;
