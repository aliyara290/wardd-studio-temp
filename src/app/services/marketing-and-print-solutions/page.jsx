import Footer from "@/components/home/Footer";
import ServiceHero from "@/components/services/ServicePageComponents/ServiceHero";
import OurRules from "@/components/home/OurRules";
import Head from "next/head";
import ServiceProjects from "@/components/services/ServicePageComponents/ServiceProjects";
import Explore from "@/components/services/ServicePageComponents/explore";
import Intro from "@/components/services/ServicePageComponents/Intro";

export const metadata = {
  description: "Elevate your brand with premium print materials and marketing collateral that make a lasting impression, from business cards to large-format displays.",
  title: 'Marketing & Print Solutions - WARDD Studios',
};

const MarketingPrintPage = () => {
  const cardDedtails = [
    {
      number: "01",
      title: "Business Cards",
      description:
        "We design business cards that aren't just exchanged—they're remembered. Our custom designs blend sophisticated aesthetics with strategic branding elements to create powerful first impressions. With premium materials and meticulous attention to detail, we ensure your cards become powerful ambassadors for your professional identity.",
    },
    {
      number: "02",
      title: "Flyers and Brochures",
      description:
        "Our flyers and brochures transform information into experiences. We craft each piece with a perfect balance of compelling visuals and persuasive messaging that commands attention and drives action. From concept to distribution, we ensure your print materials become effective tools for engagement and conversion.",
    },
    {
      number: "03",
      title: "Posters and Banners",
      description:
        "Make a bold statement with our large-format designs that demand attention. Our posters and banners combine striking visuals, strategic messaging, and premium printing to create high-impact displays. Whether for events, retail environments, or promotional campaigns, we create eye-catching materials that make your message unmissable.",
    },
  ];
  const projectsGallery = [
    {
      image: "https://res.cloudinary.com/dylpck2et/image/upload/v1748887809/PET_04_stretched_mgzxiy.webp",
    },
    {
      image: "https://res.cloudinary.com/dylpck2et/image/upload/v1748887809/PET_03_stretched_nbcea3.webp",
    },
    {
      image: "https://res.cloudinary.com/dylpck2et/image/upload/v1748887809/PET_02_d8tobf.webp",
    },
    {
      image: "https://res.cloudinary.com/dylpck2et/image/upload/v1748887808/PET_01_wlfaep.webp",
    },
    {
      image: "https://res.cloudinary.com/dylpck2et/image/upload/v1748887808/04_stretched_wjrtdo.webp",
    },
    {
      image: "https://res.cloudinary.com/dylpck2et/image/upload/v1748887808/02_stretched_e4ybal.webp",
    },
    {
      image: "https://res.cloudinary.com/dylpck2et/image/upload/v1748887808/01_stretched_bp2bks.webp",
    },
   

]

  return (
    <div className="page__content">
      <ServiceHero
       src={"https://res.cloudinary.com/decjm9mmr/image/upload/q_10,f_auto/BANNER_solution_wepqbc.jpg"}
      />
      <Intro />
      <ServiceProjects projectsGallery={projectsGallery} heading={"Our works"} />
      <OurRules cardDedtails={cardDedtails} fHeading={'What We'} sHeading={'Offer'} />
      <Explore />
      <Footer />
    </div>
  );
};

export default MarketingPrintPage;