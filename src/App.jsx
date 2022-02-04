import React from "react";
import styled from "styled-components";
import Nav from "./components/Nav";
import TitleSection from "./components/TitleSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";

const App = () => {
  return (
    <StyledApp className="app">
      <div className="wrapper">
        <Nav></Nav>
        {/* <div className="line"></div> */}
        <TitleSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </StyledApp>
  );
};

const StyledApp = styled.div`
  height: 100vh;
  color: white;
  /* margin: 1rem 8rem 0rem 3rem; */
  /* border: 1px solid white; */
  .wrapper {
    width: 100%;
    /* padding: 1rem 3rem 0rem 3rem; */
  }
  .line {
    width: 100%;
    height: 2px;
    background: #494949;
    border-radius: 2px;
  }
`;

export default App;
