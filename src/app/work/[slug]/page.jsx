"use client";
import { useParams } from "next/navigation"; // Correct import for Next.js 13
import { useState, useEffect } from "react";
import projectsData from "@/data/projects";
import { Hero, Details, Video, Banner, Richtext, Mockups, Footer } from "@/components/work/project/index";

const ProjectPage = () => {
  const { slug } = useParams(); // Use useParams to get the slug from the URL
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (slug) {
      // Find the project based on the dynamic slug
      const foundProject = projectsData.find((project) => project.id === slug);
      setProject(foundProject); // Set the project when slug is available
    }
  }, [slug]); // Trigger the effect when slug changes

  if (!project) {
    return <p>loading</p>;
  }

  const { hero, details, video, richtext, banner, mockups } = project;

  return (
    <div>
      <Hero title={hero.title} bio={hero.description} image={hero.image} />
      <Details
        description={project.details.description}
        highlight={project.details.highlights} // Ensure highlights is passed here
        services={project.details.services}
        website={project.details.websiteLink}
      />
      <Video videoSrc={project.video.videoSrc} />
      <Richtext title={project.richtext.title} description={richtext.description} />
      <Banner image={project.banner.image} altText={project.hero.title}/>
      <Mockups images={project.mockups} />
      <Footer/>
    </div>
  );
};

export default ProjectPage;
