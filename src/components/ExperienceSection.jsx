import React from "react";
import styled from "styled-components";

const ExperienceSection = () => {
  return (
    <StyledExperienceSection className="experience-section" id="experience">
      <div className="experience-wrapper">
        <h1>Experience</h1>
        <h2>Wrok Experience</h2>
      </div>
    </StyledExperienceSection>
  );
};
const StyledExperienceSection = styled.div`
  background: #232323;
  padding-top: 7rem;
  padding-bottom: 2rem;
  .experience-wrapper {
    position: relative;
    width: fit-content;
    margin: 0 auto;
    h1 {
      color: #535353;
      opacity: 0.1;
      font-size: 8rem;
    }
    h2 {
      color: #f26b4e;
      font-size: 4rem;
      /* padding-bottom: 3rem; */
      position: absolute;
      top: 55%;
      transform: translateY(-50%) translateX(21%);
    }
  }
`;

export default ExperienceSection;
