import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import RecentWorks from "@/components/home/Work";
import OurRules from "@/components/home/OurRules";
import Partnership from "@/components/home/Partnership";
import Testimonial from "@/components/home/Testimonial";
import Footer from "@/components/home/Footer";
import Cta from "@/components/home/Cta";
import Team from "@/components/studio/Team";
import Pathway from "@/components/services/Pathway";

import { metadata } from "@/app/layout";

const Home = () => {
  const cardDetails = [
    {
      heading: "rule",
      number: 1,
      title: "discipline",
      description:
        "At WARDD Studios, discipline is our foundation. It's our unwavering commitment to creative excellence, the meticulous attention we give to every detail, and our relentless drive to exceed expectations. This disciplined approach ensures that every project we deliver stands as a testament to our dedication to your success.",
    },
    {
      heading: "rule",
      number: 2,
      title: "trust",
      description:
        "Trust is the cornerstone of every relationship we build. We earn it through transparent communication, consistent delivery of excellence, and an unwavering commitment to your vision. At WARDD Studios, we believe that the strongest partnerships are built on mutual trust and respect, allowing us to create together without boundaries.",
    },
    {
      heading: "rule",
      number: 3,
      title: "commitment",
      description:
        "Our commitment to your success drives everything we do. It's not just about meeting deadlines; it's about exceeding expectations at every turn. From concept to completion, we dedicate ourselves fully to your vision, bringing together our expertise, creativity, and passion to deliver results that make an impact and leave a lasting impression.",
    },
  ];
  return (
    <>
      <div className="page__content">
        <Hero />
        <Intro />
        <RecentWorks />
        <Pathway />
        <Team />
        <OurRules
          cardDedtails={cardDetails}
            
          fHeading={"Our Mindset and Approach"}
          sHeading={"Toward Achieving"}
          tHeading={"Success"}
        />
        <Partnership />
        <Testimonial />
        <Cta />
        <Footer />
      </div>
    </>
  );
};

export default Home;