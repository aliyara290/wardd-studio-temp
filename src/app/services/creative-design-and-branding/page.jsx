import Footer from "@/components/home/Footer";
import ServiceHero from "@/components/services/ServicePageComponents/ServiceHero";
import OurRules from "@/components/home/OurRules";
import Head from "next/head";
import ServiceProjects from "@/components/services/ServicePageComponents/ServiceProjects";
import Explore from "@/components/services/ServicePageComponents/explore";
import Intro from "@/components/services/ServicePageComponents/Intro";

export const metadata = {
  description: "Transform your brand with distinctive visual identities, strategic design systems, and memorable creative solutions that capture your essence and connect with your audience.",
  title: 'Creative Design & Branding - WARDD Studios',
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

  return (
    <div className="page__content">
      <ServiceHero
       src={"https://res.cloudinary.com/decjm9mmr/image/upload/q_10,f_auto/BANNER_creative_zlynae.jpg"}
      />
      <Intro />
      <OurRules cardDedtails={cardDedtails} fHeading={'What We'} sHeading={'Offer'} />
      <Explore />
      <Footer />
    </div>
  );
};

export default CreativeDesignPage;