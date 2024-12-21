import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import RecentWorks from "@/components/home/Work";
import OurRules from "@/components/home/OurRules";
import Partnership from "@/components/home/Partnership";
import Testimonial from "@/components/home/Testimonial";
import Footer from "@/components/home/Footer";
import Cta from "@/components/home/Cta";
import { metadata } from "@/app/layout";

const Home = () => {
  const cardDetails = [
    {
      heading: "rule",
      number: 1,
      title: "descipline",
      description:
        "In our journey to success, discipline is our guiding principle. It's the unwavering commitment to our craft, the dedication to honing our skills, and the persistence to overcome challenges. With discipline, we strive for excellence in every project we undertake.",
    },
    {
      heading: "rule",
      number: 2,
      title: "trust",
      description:
        "At Stretchedweb, trust forms the foundation of our relationships – with our clients, our team, and our partners. We believe in transparent communication, reliability in our work, and fostering trust through actions. It's the cornerstone of our success.",
    },
    {
      heading: "rule",
      number: 3,
      title: "commitment",
      description:
        "Our commitment drives us forward, fueling our passion and determination to deliver exceptional results. It's the promise we make to our clients to go above and beyond, to stay true to our values, and to relentlessly pursue perfection in every aspect of our work.",
    },
  ];
  return (
    <>
      <div className="page__content">
        <Hero />
        <Intro />
        <RecentWorks />
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
