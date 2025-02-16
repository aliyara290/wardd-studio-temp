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

const WebDesign = () => {
  const cardDedtails = [
    {
      number: "01",
      title: "Promotional Videos",
      description:
        "Craft compelling promotional videos that bring your brand’s story to life, blending creative direction, high-quality visuals, and powerful storytelling to engage your audience.",
    },
    {
      number: "02",
      title: "Animated Explainers:",
      description:
        "Deliver visually dynamic animated explainer videos that simplify complex ideas, making them accessible and captivating to your target audience.",
    },
    {
      number: "03",
      title: "Event Coverage",
      description:
        "Provide professional filming and editing services for events, capturing memorable moments and transforming them into engaging content that tells the story of your success.",
    },
  ];

  return (
    <div className="page__content">
   
      <ServiceHero
       src={"https://res.cloudinary.com/decjm9mmr/image/upload/q_10,f_auto/BANNER_AUDIO_VISUAL_we15rl.jpg"}
      />
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

export default WebDesign;
