import Wardd from "@/components/work/projects_component/Wardd";
import Footer from "@/components/home/Footer";
import Head from "next/head";

export const metadata = {
  description: "Rabat-based recording studio, professional voice recording, mixing, mastering, SEO-driven success.",
  title: 'Wardd Studio - Stretchedweb',
};

const PetshopPage = () => {
  return (
    <>
      <Wardd />
      <Footer />
    </>
  );
};

export default PetshopPage;
