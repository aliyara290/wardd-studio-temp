import Footer from "@/components/home/Footer";
import ServiceHero from "@/components/services/ServicePageComponents/ServiceHero";
import OurRules from "@/components/home/OurRules";
import Head from "next/head";
import ServiceProjects from "@/components/services/ServicePageComponents/ServiceProjects";
import Explore from "@/components/services/ServicePageComponents/explore";
import Intro from "@/components/services/ServicePageComponents/Intro";

export const metadata = {
  description: "Transform your brand with distinctive visual identities, strategic design systems, and memorable creative solutions that capture your essence and connect with your audience.",
  title: 'MARKETING, BRANDING & DESIGN - WARDD Studios',
};

const CreativeDesignPage = () => {
  const cardDedtails = [
    {
      number: "01",
      title: "Logo Design",
      description:
        "We create logos that don't just identify—they inspire. Our design process goes beyond aesthetics to capture the essence of your brand in a distinctive visual mark. Through strategic thinking and creative excellence, we craft memorable emblems that serve as powerful foundations for your brand's journey and leave lasting impressions wherever they appear.",
    },
    {
      number: "02",
      title: "Brand Guidelines",
      description:
        "Consistency breeds recognition. Our comprehensive brand guidelines transform your identity into a powerful, cohesive system that works across all touchpoints. From typography and color psychology to voice and application rules, we create detailed blueprints that ensure your brand communicates with impact and maintains its integrity wherever it appears.",
    },
    {
      number: "03",
      title: "Packaging Design",
      description:
        "In a crowded marketplace, your packaging is your silent salesperson. We design packaging solutions that go beyond protection to create memorable unboxing experiences. Combining strategic thinking with creative innovation, we transform functional necessities into powerful brand moments that influence purchasing decisions and foster lasting customer loyalty.",
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
       src={"https://res.cloudinary.com/decjm9mmr/image/upload/q_10,f_auto/BANNER_creative_zlynae.jpg"}
      />
      <Intro />
      <ServiceProjects projectsGallery={projectsGallery} heading={"Our works"} />
      <OurRules cardDedtails={cardDedtails} fHeading={'What We'} sHeading={'Offer'} />
      <Explore />
      <Footer />
    </div>
  );
};

export default CreativeDesignPage;