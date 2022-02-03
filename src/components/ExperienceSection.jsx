import React from "react";
import styled from "styled-components";

const ExperienceSection = () => {
  return (
    <StyledExperienceSection className="experience-section" id="experience">
      <div className="experience-wrapper">
        <h1>Experience</h1>
        <h2>Work Experience</h2>
      </div>
      <StyledExperienceContainer className="experience-container">
        <div className="organization-name">
          <h2>Programmer Analyst Trainee</h2>
          <h3>Cognizant</h3>
          <p>07/2021 - Present</p>
        </div>
        <div className="organization-desc">
          <ul>
            <li>
              Fixing various security realted flaws in the client application.
            </li>
            <li>Constantly reviewed the changes done in the application .</li>
          </ul>
        </div>
        <div className="organization-name">
          <h2>Programmer Analyst Trainee- Internship</h2>
          <h3>Cognizant</h3>
          <p>02/2021 - 07/2021</p>
        </div>
        <div className="organization-desc">
          <ul>
            <li>
              Built a full stack project with Spring Boot as the backend and JSP
              with bootstrap as frontend.
            </li>
            <li>
              Worked as a POD leader for the final MFPE project and was
              responsible for developing Authorization Microservice and
              deployment of the project on to the cloud platfrom, AWS.
            </li>
            <li>
              Worked with CI/CD tools provided by AWS like CodeBuild,
              CodeCommit, CodePipeline, ECS and ECR.
            </li>
          </ul>
        </div>
        <div className="organization-name">
          <h2>Web Development Intern</h2>
          <h3>Fitterfly</h3>
          <p>09/2020 - 12/2020</p>
        </div>
        <div className="organization-desc">
          <ul>
            <li>
              Developed custom Alexa-Skills for the users of the website to
              interact with it over voice.
            </li>
            <li>
              Implemented the part where Alexa would fetch certain data from an
              external API ( dummy API ).
            </li>
            <li>Built Intents and added different Utterances to it.</li>
          </ul>
        </div>
      </StyledExperienceContainer>
    </StyledExperienceSection>
  );
};
const StyledExperienceSection = styled.div`
  background: #232323;
  padding-top: 7rem;
  padding-bottom: 2rem;
  text-align: center;
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
      position: absolute;
      top: 55%;
      transform: translateY(-50%) translateX(21%);
    }
  }
`;

const StyledExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 20px;
  width: 90%;
  margin: 0 auto;
  padding-top: 3rem;

  .organization-name {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;

    h2 {
      font-size: 1.5rem;
      height: fit-content;
    }
    h3 {
      font-size: 1.5rem;
      color: #7c7c7c;
    }
  }
  .organization-desc {
    display: flex;
    align-items: flex-start;
    margin: 0.8rem;
    position: relative;
    border-left: 0.2rem solid #f26b4e;
    height: fit-content;
    ul {
      width: 100%;
      margin-left: 15px;
      text-align: left;
      li {
        font-size: 1.2rem;
        padding: 5px 0;
      }
    }
  }
`;

export default ExperienceSection;
