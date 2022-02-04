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
      <div class="wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </StyledSkillsSection>
  );
};

const StyledSkillsSection = styled.div`
  padding-top: 7rem;
  padding-bottom: 2rem;
  text-align: center;
  background: #232323;
  position: relative;
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
  .wave {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .wave svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 5rem;
    transform: rotateY(180deg);
  }

  .wave .shape-fill {
    fill: #1f1f1f;
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
