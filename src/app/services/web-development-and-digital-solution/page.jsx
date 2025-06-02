import Footer from "@/components/home/Footer";
import ServiceHero from "@/components/services/ServicePageComponents/ServiceHero";
import OurRules from "@/components/home/OurRules";
import Head from "next/head";
import ServiceProjects from "@/components/services/ServicePageComponents/ServiceProjects";
import Explore from "@/components/services/ServicePageComponents/explore";
import Intro from "@/components/services/ServicePageComponents/Intro";

export const metadata = {
  description: "Transform your digital presence with powerful, custom-built websites and applications that deliver exceptional user experiences, drive engagement, and achieve your business objectives.",
  title: 'Web Development & Digital Solutions - WARDD Studios',
};

const WebDevelopmentPage = () => {
  const cardDedtails = [
    {
      number: "01",
      title: "Web Development",
      description:
        "We don't just build websites—we craft digital experiences that perform. Our development team combines cutting-edge technology with creative ingenuity to deliver responsive, high-performance websites that captivate users and drive conversions. From elegant front-end interfaces to robust back-end systems, we build digital solutions that give your brand a competitive edge.",
    },
    {
      number: "02",
      title: "Digital Marketing",
      description:
        "In the digital landscape, visibility equals opportunity. Our strategic marketing approaches combine data-driven insights with creative excellence to amplify your brand's online presence. Through targeted SEO, dynamic social campaigns, and compelling content strategies, we don't just increase traffic—we attract and engage the audiences that matter most to your business.",
    },
    {
      number: "03",
      title: "App Development",
      description:
        "Your vision deserves more than just functionality—it deserves innovation. We develop custom applications that transform ideas into powerful digital tools. With user-centric design principles and scalable architecture, our solutions deliver intuitive interfaces backed by robust technology. Whether mobile or web-based, we create applications that solve problems and open new possibilities.",
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
        name={"Website"}
        subName={"Development"}
        firstBio={
          "AS A COMPANY, YOU REQUIRE A PARTNER WHO UNDERSTANDS THE SIGNIFICANCE OF GOING BEYOND PRODUCT AND SERVICE DESIGN."
        }
        SecondBio={
          "Our expertise lies in building profound connections that extend to the broader scope of your brand, encompassing your customers. It is through fostering these connections that genuine brand loyalty is cultivated."
        }
        src={"https://res.cloudinary.com/decjm9mmr/image/upload/q_20,f_auto/banner_mark_mywed2.jpg"} 
      />
      <Intro />
      <ServiceProjects projectsGallery={projectsGallery} heading={"Our works"} />
      <OurRules cardDedtails={cardDedtails} fHeading={'What We'} sHeading={'Offer'} />
      <Explore />
      <Footer />
    </div>
  );
};

export default WebDevelopmentPage;