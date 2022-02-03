import React from "react";
import styled from "styled-components";

const ProjectsSection = () => {
  return (
    <StyledProjectsSection className="project-section" id="projects">
      <div className="projects-wrapper">
        <h1>Projects</h1>
        <h2>Projects</h2>
      </div>
    </StyledProjectsSection>
  );
};

const StyledProjectsSection = styled.div`
  background: #1f1f1f;
  padding-top: 7rem;
  padding-bottom: 2rem;
  .projects-wrapper {
    position: relative;
    width: fit-content;
    margin: 0 auto;
    h1 {
      color: #535353;
      opacity: 0.1;
      font-size: 9rem;
    }
    h2 {
      color: #f26b4e;
      font-size: 4rem;
      /* padding-bottom: 3rem; */
      position: absolute;
      top: 55%;
      transform: translateY(-50%) translateX(62%);
    }
  }
`;

export default ProjectsSection;
