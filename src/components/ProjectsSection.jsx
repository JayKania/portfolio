import React from "react";
import styled from "styled-components";
import Project from "./Project";
import { projectData } from "./ProjectData";
import { v4 as uuidv4 } from "uuid";

const ProjectsSection = () => {
  const projectMarkup = projectData.map((project) => {
    return (
      <Project
        title={project.title}
        description={project.description}
        tags={project.tags}
        link={project.link}
        key={uuidv4()}
      />
    );
  });

  return (
    <StyledProjectsSection className="project-section" id="projects">
      <div className="projects-wrapper">
        <h1>Projects</h1>
        <h2>Projects</h2>
      </div>
      <StyledProjectContainer className="project-container">
        {projectMarkup}
      </StyledProjectContainer>
      <div class="wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </StyledProjectsSection>
  );
};

const StyledProjectsSection = styled.div`
  background: #1f1f1f;
  padding-top: 7rem;
  padding-bottom: 2rem;
  position: relative;
  overflow: hidden;
  .projects-wrapper {
    background: #1f1f1f;
    position: relative;
    width: fit-content;
    margin: 0 auto;
    h1 {
      color: #535353;
      opacity: 0.1;
      font-size: 9rem;
    }
    h2 {
      background: transparent;
      color: #f26b4e;
      font-size: 4rem;
      /* padding-bottom: 3rem; */
      position: absolute;
      top: 55%;
      transform: translateY(-50%) translateX(62%);
    }
  }
  .wave {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    svg {
      background: #1f1f1f;
    }
  }

  .wave svg {
    position: relative;
    display: block;
    width: calc(134% + 1.3px);
    height: 5rem;
    transform: rotateY(180deg);
  }

  .wave .shape-fill {
    fill: #232323;
  }
`;

const StyledProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 80%;
  margin: 2rem auto;
  background: #1f1f1f;
  overflow: hidden;

  @media only screen and (max-width: 820px) {
    grid-template-columns: 100%;
  }
`;

export default ProjectsSection;
