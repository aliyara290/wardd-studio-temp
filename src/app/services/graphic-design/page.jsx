import Footer from "@/components/home/Footer";
import ServiceHero from "@/components/services/ServicePageComponents/ServiceHero";
import OurRules from "@/components/home/OurRules";
import ServiceProjects from "@/components/services/ServicePageComponents/ServiceProjects";
import Explore from "@/components/services/ServicePageComponents/explore";
import Head from "next/head";

export const metadata = {
  description: "We craft compelling brand stories and identities that resonate with your audience, defining your values and messaging for maximum impact.",
  title: 'Graphic Design - Stretchedweb',
};

const BrandingPage = () => {
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
      image: "/images/branding/OKEZ - 4-min.webp",
    },
    {
      image: "/images/branding/F- 7-min.webp",
    },
    {
      image: "/images/branding/F- 5-min.webp",
    },
    {
      image: "/images/branding/T- 4-min.webp",
    },
    {
      image: "/images/branding/T- 2 -min.webp",
    },
    {
      image: "/images/branding/art-5-min.webp",
    },
    {
      image: "/images/branding/OKEZ - 88 -min.webp",
    },

    {
      image: "/images/branding/art-2-min.webp",
    },
    {
      image: "/images/branding/bon-2-min.webp",
    },
    {
      image: "/images/branding/T- 6-min.webp",
    },
  ];

  return (
    <>
    
      <ServiceHero
        name={"graphic"}
        subName={"Design"}
        firstBio={
          "AS A COMPANY, YOU REQUIRE A PARTNER WHO UNDERSTANDS THE SIGNIFICANCE OF GOING BEYOND PRODUCT AND SERVICE DESIGN."
        }
        SecondBio={
          "Our expertise lies in building profound connections that extend to the broader scope of your brand, encompassing your customers. It is through fostering these connections that genuine brand loyalty is cultivated."
        }
      />
      <ServiceProjects
        projectsGallery={projectsGallery}
        heading={"graphic design"}
      />
      <OurRules cardDedtails={cardDedtails} fHeading={'service'} sHeading={'description'}/>
      <Explore />
      <Footer />
    </>
  );
};

export default BrandingPage;
