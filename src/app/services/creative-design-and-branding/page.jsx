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

const WebDevelopment = () => {
  const cardDedtails = [
    {
      number: "01",
      title: "Logo Design",
      description:
        "Design impactful and unique logos that represent your brand’s core identity, setting the foundation for strong recognition and long-term branding success.",
    },
    {
      number: "02",
      title: "Brand Guidelines",
      description:
        "Develop comprehensive brand guidelines to ensure consistency in your visual identity, including standards for logo usage, typography, colors, and brand voice.",
    },
    {
      number: "03",
      title: "Packaging Design",
      description:
        "Create innovative packaging solutions that combine aesthetics and functionality, helping your products stand out on shelves and reinforce brand loyalty.",
    },
  ];

  return (
    <div className="page__content">
      <ServiceHero
       src={"https://res.cloudinary.com/decjm9mmr/image/upload/q_10,f_auto/BANNER_creative_zlynae.jpg"}
      />
      <Intro />
      <OurRules cardDedtails={cardDedtails} fHeading={'Whate We'} sHeading={'Offer'} />

      <Explore />
      <Footer />
    </div>
  );
};

export default WebDevelopment;