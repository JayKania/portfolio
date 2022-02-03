import React from "react";
import styled from "styled-components";

const SkillsSection = () => {
  return (
    <StyledSkillsSection className="skills-section" id="skills">
      <div className="skills-wrapper">
        <h1>Skills</h1>
        <h2>Skills</h2>
      </div>
      <SkillsContainer className="skills-container">
        <div className="react skill">
          <i class="fab fa-react fa-5x"></i>
        </div>
        <div className="skill git">
          <i class="fab fa-git fa-5x"></i>
        </div>
        <div className="skill node">
          <i class="fab fa-node fa-5x"></i>
        </div>
        <div className="skill css">
          <i class="fab fa-css3-alt fa-5x"></i>
        </div>
        <div className="skill html">
          <i class="fab fa-html5 fa-5x"></i>
        </div>
        <div className="skill java">
          <i class="fab fa-java fa-5x"></i>
        </div>
        <div className="skill javascript">
          <i class="fab fa-js-square fa-5x"></i>
        </div>
        <div className="skill database">
          <i class="fas fa-database fa-5x"></i>
        </div>
      </SkillsContainer>
    </StyledSkillsSection>
  );
};

const StyledSkillsSection = styled.div`
  padding-top: 7rem;
  padding-bottom: 2rem;
  text-align: center;
  background: #232323;
  .skills-wrapper {
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
      top: 50%;
      transform: translateY(-50%) translateX(60%);
    }
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding: 20px;
  .skill {
    padding: 20px;
  }
  .react {
    transition: all 0.3s ease;
    &:hover {
      color: #62d4f7;
      transform: translateY(-10%);
    }
  }
  .css {
    transition: all 0.3s ease;
    &:hover {
      color: #254bdd;
      transform: translateY(-10%);
    }
  }
  .javascript {
    transition: all 0.3s ease;
    &:hover {
      color: #efd81d;
      transform: translateY(-10%);
    }
  }
  .database {
    transition: all 0.3s ease;
    &:hover {
      color: #507e9c;
      transform: translateY(-10%);
    }
  }
  .java {
    transition: all 0.3s ease;
    &:hover {
      color: #e32526;
      transform: translateY(-10%);
    }
  }
  .html {
    transition: all 0.3s ease;
    &:hover {
      color: #e96228;
      transform: translateY(-10%);
    }
  }
  .git {
    transition: all 0.3s ease;
    &:hover {
      color: #e84d31;
      transform: translateY(-10%);
    }
  }
  .node {
    transition: all 0.3s ease;
    &:hover {
      color: #87bf00;
      transform: translateY(-10%);
    }
  }
`;

export default SkillsSection;
