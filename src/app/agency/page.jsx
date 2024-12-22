import StudioHero from "@/components/studio/StudioHero";
import StudioAbout from "@/components/studio/StudioAbout";
import OurRules from "@/components/home/OurRules";
import Footer from "@/components/home/Footer";
import Team from "@/components/studio/Team";
import Brands from "@/components/studio/Brands";

export const metadata = {
  description:
    "Crafting compelling narratives and engaging experiences. Join us and let's make magic happen.",
  title: "Stretchedweb - Where Creativity Unleashed",
};

const Studio = () => {
  const cardDetails = [
    {
      number: 1,
      title: "Mission",
      description:
        "At Stretchedweb, our mission is clear: to empower individuals and businesses with impactful digital solutions. We strive to craft innovative websites, captivating social media branding, and memorable logos that exceed expectations, fostering growth and success for our clients.",
    },
    {
      number: 2,
      title: "Vision",
      description:
        "Our vision at Stretchedweb is to create a digital landscape where creativity and technology intertwine seamlessly. We envision a future where our solutions inspire meaningful connections, drive growth, and set new standards of excellence in the digital realm.",
    },
    {
      number: 3,
      title: "Goals",
      description:
        "At Stretchedweb, our goals are ambitious yet focused. We aim to continuously innovate and refine our craft, delivering solutions that not only meet but exceed the diverse needs of our clients.",
    },
  ];
  return (
    <>
      <div className="page__content">
        <StudioHero />
        {/* <StudioAbout /> */}
        {/* <OurRules
          cardDedtails={cardDetails}
          fHeading={"Excellence is "}
          sHeading={"Our Pledge"}
        /> */}
        {/* <Branding /> */}
        <Team />
        <Brands/>
        <Footer />
      </div>
    </>
  );
};

export default Studio;
