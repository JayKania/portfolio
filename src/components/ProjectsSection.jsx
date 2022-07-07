import React from "react";
import styled from "styled-components";

const ProjectsSection = () => {
  return (
    <StyledProjectsSection className="project-section" id="projects">
      <div className="projects-wrapper">
        <h1>Projects</h1>
        <h2>Projects</h2>
      </div>
      <StyledProjectContainer className="project-container">
        <div className="project">
          <h2>Music Player</h2>
          <p>
            - A music player built with React Js and to demonstrate the use of
            styledcomponets and sass.
          </p>
          <p className="tags">#react #styledComponents #sass</p>
          <a href="https://github.com/JayKania/Music-Player" target={"_blank"}>
            View on Github
          </a>
        </div>
        <div className="project">
          <h2>Netflix Clone</h2>
          <p>- An attempt to replicate the UI of Netflix.</p>
          <p className="tags">
            #react #styledComponents #zustand #firebase #tmdb-api
          </p>
          <a href="https://github.com/JayKania/netflix-clone" target={"_blank"}>
            View on Github
          </a>
        </div>
        <div className="project">
          <h2>SBM Physio Clinic</h2>
          <p>- A single page website for a physio center.</p>
          <p className="tags">#react #styledComponents</p>
          <a
            href="https://github.com/JayKania/SBM_PhysioClinic"
            target={"_blank"}
          >
            View on Github
          </a>
        </div>
        <div className="project">
          <h2>E-Voting</h2>
          <p>
            - A decentalized way of casting votes. It's a web app built with the
            help of React Js on front and Ethereum Blockchain on the back.
          </p>
          <p className="tags">#react #ethereum #solidity</p>
          <a href="https://github.com/JayKania/E-Voting" target={"_blank"}>
            View on Github
          </a>
        </div>
        <div className="project">
          <h2>Budget App</h2>
          <p>
            - It's a simple budget tracking app devloped using Vanilla Js and
            CSS without any use of libraries or frameworks. It's a part of 100
            days of project challenge.
          </p>
          <p className="tags">#html #css #javascript</p>
          <a
            href="https://github.com/JayKania/The-Budget-App"
            target={"_blank"}
          >
            View on Github
          </a>
        </div>
        {/* <div className="project"></div> */}
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
            class="shape-fill"
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
  .project {
    /* height: 100%; */
    margin: 2rem;
    padding-bottom: 2rem;
    background: #232323;
    box-shadow: 0 6px 6px -4px #f26b4e;
    border-radius: 10px;
    h2 {
      padding: 2rem;
      font-size: 2rem;
      color: #f26b4e;
    }
    p {
      padding-left: 2rem;
      padding-right: 2rem;
      padding-bottom: 2rem;
      font-size: 1.2rem;
    }
    .tags {
      color: #585858;
    }
    a {
      padding-left: 2rem;
      padding-right: 2rem;
      text-decoration: none;
      color: #f26b4e;
      font-size: 1.5rem;
    }
  }
  @media only screen and (max-width: 480px) {
    grid-template-columns: 100%;
    .project {
      margin: 2rem auto;
      width: 80%;
      h2 {
        font-size: 2.5rem;
      }
      p {
        font-size: 2rem;
      }
      a {
        font-size: 2rem;
      }
    }
  }
  @media only screen and (min-width: 481px) and (max-width: 820px) {
    grid-template-columns: 100%;
    .project {
      margin: 2rem auto;
      width: 90%;
      h2 {
        font-size: 2.5rem;
      }
      p {
        font-size: 2rem;
      }
      a {
        font-size: 2rem;
      }
    }
  }
  @media only screen and (min-width: 550px) and (max-width: 1180px) {
    /* grid-template-columns: 50%; */
    .project {
      margin: 2rem auto;
      width: 90%;
      h2 {
        font-size: 2rem;
      }
      p {
        font-size: 1.35rem;
      }
      a {
        font-size: 1.35rem;
      }
    }
  }
`;

export default ProjectsSection;
