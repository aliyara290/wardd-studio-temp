import WorkComponent from "@/components/work/WorkComponent";
import Branding from "@/components/work/Branding";
import Partnership from "@/components/home/Partnership";
import Footer from "@/components/home/Footer";
import Head from "next/head";

export const metadata = {
  description: "Discover our latest projects and achievements across various industries. Explore how we've partnered with clients to deliver innovative solutions and exceptional results.",
  title: 'Latest Projects - Stretchedweb',
};

const Work = () => {
  return (
    <>
      <div className="work_content">
        <WorkComponent />
        {/* <Branding /> */}
        <Partnership />
        <Footer />
      </div>
    </>
  );
};

export default Work;
