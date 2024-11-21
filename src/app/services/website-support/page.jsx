import Footer from "@/components/home/Footer";
import ServiceHero from "@/components/services/ServicePageComponents/ServiceHero";
import OurRules from "@/components/home/OurRules";
import Head from "next/head";
import Explore from "@/components/services/ServicePageComponents/explore";
import RecentWorks from "@/components/home/Work";

export const metadata = {
  description: "Your trusted partner in maintaining a seamless and secure online presence, we provide comprehensive support to keep your website running smoothly.",
  title: 'Website Support - Stretchedweb',
};

const WebsiteSupport = () => {
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
  return (
    <>
    
      <ServiceHero
        name={"Website"}
        subName={"Support"}
        firstBio={
          "AS A COMPANY, YOU REQUIRE A PARTNER WHO UNDERSTANDS THE SIGNIFICANCE OF GOING BEYOND PRODUCT AND SERVICE DESIGN."
        }
        SecondBio={
          "Our expertise lies in building profound connections that extend to the broader scope of your brand, encompassing your customers. It is through fostering these connections that genuine brand loyalty is cultivated."
        }
      />
      <OurRules cardDedtails={cardDedtails} fHeading={'service'} sHeading={'description'} />
      <RecentWorks />
      <Explore />
      <Footer />
    </>
  );
};

export default WebsiteSupport;
