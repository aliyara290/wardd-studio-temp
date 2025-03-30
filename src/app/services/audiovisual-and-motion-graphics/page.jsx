import Footer from "@/components/home/Footer";
import ServiceHero from "@/components/services/ServicePageComponents/ServiceHero";
import OurRules from "@/components/home/OurRules";
import Head from "next/head";
import ServiceProjects from "@/components/services/ServicePageComponents/ServiceProjects";
import Explore from "@/components/services/ServicePageComponents/explore";
import Intro from "@/components/services/ServicePageComponents/Intro";

export const metadata = {
  description: "Transform your brand story through compelling visuals, dynamic motion graphics, and professional video production that captivates your audience and delivers your message with impact.",
  title: 'Audiovisual & Motion Graphics - WARDD Studios',
};

const AudiovisualServices = () => {
  const cardDedtails = [
    {
      number: "01",
      title: "Promotional Videos",
      description:
        "Our promotional videos don't just showcase—they captivate. We combine cinematic vision with strategic storytelling to create videos that grab attention, evoke emotion, and drive action. Each frame is meticulously crafted to reflect your brand's unique voice and connect with your audience on a deeper level.",
    },
    {
      number: "02",
      title: "Animated Explainers",
      description:
        "Complex ideas deserve brilliant communication. Our animated explainers transform intricate concepts into clear, engaging visual narratives that inform and delight. Using cutting-edge animation techniques and compelling scriptwriting, we create explanatory content that simplifies the complex while keeping viewers captivated.",
    },
    {
      number: "03",
      title: "Event Coverage",
      description:
        "We turn moments into memories and events into stories. Our event coverage goes beyond documentation—it's about capturing the energy, emotion, and essence of your gathering. With expert cinematography and artistic editing, we transform your events into compelling content that extends their impact long after they're over.",
    },
  ];

  return (
    <div className="page__content">
      <ServiceHero
       src={"https://res.cloudinary.com/decjm9mmr/image/upload/q_10,f_auto/BANNER_AUDIO_VISUAL_we15rl.jpg"}
      />
      <Intro />
      <OurRules cardDedtails={cardDedtails} fHeading={'What We'} sHeading={'Offer'} />
      <Explore />
      <Footer />
    </div>
  );
};

export default AudiovisualServices;