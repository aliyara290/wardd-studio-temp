import "@/styles/services/servicesStyle.css";
import style from "@/styles/services/page.module.css";
import Hero from "@/components/services/Hero";
import Services from "@/components/services/Services";
import Pathway from "@/components/services/Pathway";
import Partnership from "@/components/home/Partnership";
import Footer from "@/components/home/Footer";
import Head from "next/head";

export const metadata = {
  description: "Discover the comprehensive digital solutions offered by Stretchedweb.",
  title: 'Services - Stretchedweb',
};

const ServicesPage = () => {
  return (
    <>
   
      <div className={style.content}>
        <div className={style.container}>
          <Hero />
          <Services />
          <Pathway />
          <Partnership />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
