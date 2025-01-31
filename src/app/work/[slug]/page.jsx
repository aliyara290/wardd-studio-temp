"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import projectsData from "@/data/projects";
import {
  Hero,
  Details,
  Video,
  Banner,
  Richtext,
  Mockups,
  Footer,
} from "@/components/work/project/index";

const ProjectPage = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (slug) {
      const foundProject = projectsData.find((project) => project.id === slug);
      setProject(foundProject);
    }
  }, [slug]);

  if (!project) {
    return <p>loading</p>;
  }

  const { hero, details, video, richtext, banner, mockups } = project;

  return (
    <div>
      <Hero title={hero.title} bio={hero.description} image={hero.image} />
      <Details
        description={project.details.description}
        highlight={project.details.highlights}
        services={project.details.services}
        website={project.details.websiteLink}
      />
      {project.video.videoSrc && <Video videoSrc={project.video.videoSrc} />}
      {project.banner.image && (
        <Banner image={project.banner.image} altText={project.hero.title} />
      )}
      <Richtext
        title={project.richtext.title}
        description={richtext.description}
      />
      <Mockups images={project.mockups} />
      <Footer />
    </div>
  );
};

export default ProjectPage;
