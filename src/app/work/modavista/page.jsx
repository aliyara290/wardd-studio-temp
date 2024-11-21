import Modavista from "@/components/work/projects_component/Modavista";
import Footer from "@/components/home/Footer";
import Head from "next/head";

export const metadata = {
  description: "Premier online store, wide home goods selection, futuristic design, expert SEO drive success.",
  title: 'Modavista - Stretchedweb',
};

const ModavistaPage = () => {
  return (
    <>
      <Modavista />
      <Footer />
    </>
  );
};

export default ModavistaPage;
