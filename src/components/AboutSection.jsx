import React from "react";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <StyledAbout className="about-section" id="about">
      <div className="about-wrapper">
        <h1>About</h1>
        <h2>About Me</h2>
      </div>
      <StyledDescription className="description">
        <h4>My name is Jay Kania</h4>
        <br />
        <p className="bio">
          I am a Software Developer with good{" "}
          <span>problem solving skills</span> and a strong
          <span> team player</span>. <br />
          Passionate about coding and learning new technologies. Currently I am
          working as a Programmer Analyst Trainee at Cognizant Technology
          Services. <br />I also have keen interest in learning the new{" "}
          <span>web3 </span>
          space which revolves around the concept of{" "}
          <span>decentralization</span>.
        </p>
        <div className="education">
          <h4>Education</h4>
          <p>
            Bachelor of Technology in Information Technology,
            <br />
            Birla Vishvakarma Mahavidhyalaya.
          </p>
        </div>
      </StyledDescription>
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
    </StyledAbout>
  );
};

const StyledAbout = styled.div`
  background: #1f1f1f;
  padding-top: 7rem;
  padding-bottom: 2rem;
  text-align: center;
  position: relative;
  .about-wrapper {
    background: #1f1f1f;
    position: relative;
    width: fit-content;
    margin: 0 auto;
    h1 {
      background: #1f1f1f;
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
      top: 50%;
      transform: translateY(-45%) translateX(22%);
    }
  }
  h4 {
    font-size: 1.4rem;
  }
  span {
    font-size: 1.4rem;
    color: #f26b4e;
    /* opacity: 0; */
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
    width: calc(139% + 1.3px);
    height: 8rem;
  }

  .wave .shape-fill {
    fill: #232323;
  }
`;

const StyledDescription = styled.div`
  text-align: center;
  background: #1f1f1f;

  .bio {
    background: #1f1f1f;
    margin: 0 auto;
    width: 40%;
    /* text-align: left; */
    font-size: 1.2rem;
  }
  h4 {
    background: #1f1f1f;
  }
  .education {
    background: #1f1f1f;
    padding: 2rem 2rem;
    width: 70%;
    margin: 0 auto;
    h4 {
      background: #1f1f1f;
      color: #f26b4e;
      font-weight: bolder;
      font-size: 2rem;
    }
    p {
      background: #1f1f1f;
      padding: 0.5rem;
      text-align: center;
      font-size: 1.2rem;
    }
  }
`;

export default AboutSection;
