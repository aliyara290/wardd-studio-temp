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

const BrandingPage = () => {
  const cardDedtails = [
    {
      number: "01",
      title: "Business Cards",
      description:
        "Create custom business cards designed to reflect your brand's professionalism and identity, ensuring every interaction leaves a lasting impression and builds credibility.",
    },
    {
      number: "02",
      title: "Flyers and Brochures",
      description:
        "Design and produce impactful flyers and brochures that convey your message effectively, combining stunning visuals and engaging content to captivate your audience.",
    },
    {
      number: "03",
      title: "Posters and Banners",
      description:
        "Develop eye-catching posters and banners with high-quality designs and prints that grab attention and communicate your campaign’s purpose with maximum impact.",
    },
  ];


  return (
    <div className="page__content">
   
      <ServiceHero
       src={"https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6523d8e3a69837062d300bb4_ese-expertise-hero-3.jpg"}
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

export default BrandingPage;
