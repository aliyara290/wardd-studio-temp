import Gourmet from "@/components/work/projects_component/Gourmet";
import Footer from "@/components/home/Footer";
import Head from "next/head";

export const metadata = {
  description: "Premier online store, wide home goods selection, futuristic design, expert SEO drive success.",
  title: 'Modavista - Stretchedweb',
};

const ModavistaPage = () => {
  return (
    <>
      <Gourmet />
      <Footer />
    </>
  );
};

export default ModavistaPage;
