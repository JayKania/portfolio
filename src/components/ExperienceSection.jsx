import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const ExperienceSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: "0",
  });

  return (
    <StyledExperienceSection className="experience-section" id="experience">
      <div className="experience-wrapper">
        <h1>Experience</h1>
        <h2>Work Experience</h2>
      </div>
      <StyledExperienceContainer
        ref={ref}
        className={`experience-container ${inView ? "opacity-1" : "opacity-0"}`}
      >
        <div className="organization-name">
          <h2>Programmer Analyst Trainee</h2>
          <h3>Cognizant</h3>
          <p>07/2021 - 07/2022</p>
        </div>
        <div className="organization-desc">
          <ul>
            <li>
              Fixing various security realted flaws in the client application.
            </li>
            <li>Constantly reviewed the changes done in the application.</li>
            <li>
              Worked with Java, Spring Boot, Jsp, Bootstrap, Bitbucket and
              Bamoboo
            </li>
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
    </StyledExperienceSection>
  );
};
const StyledExperienceSection = styled.div`
  background: #232323;
  padding-top: 7rem;
  padding-bottom: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
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
      background: transparent;
      color: #f26b4e;
      font-size: 4rem;
      position: absolute;
      top: 55%;
      transform: translateY(-50%) translateX(21%);
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
    background: transparent;
  }

  .wave svg {
    position: relative;
    display: block;
    width: calc(123% + 1.3px);
    height: 5rem;
  }

  .wave .shape-fill {
    fill: #1f1f1f;
  }
`;

const StyledExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  padding: 20px;
  margin: 0 auto;
  padding-top: 3rem;

  transition: transform 400ms ease, opacity 400ms ease;

  &.opacity-0 {
    opacity: 0;
    transform: translateY(100%);
  }
  &.opacity-1 {
    opacity: 1;
    transform: translateY(0);
  }

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
  @media only screen and (max-width: 480px) {
    .organization-name {
      h2 {
        font-size: 2rem;
      }
      h3 {
        font-size: 2rem;
      }
      p {
        font-size: 2rem;
      }
    }

    .organization-desc {
      ul {
        li {
          font-size: 2rem;
        }
      }
    }
  }
  @media only screen and (min-width: 481px) and (max-width: 820px) {
    .organization-name {
      h2 {
        font-size: 1.8rem;
      }
      h3 {
        font-size: 1.5rem;
      }
      p {
        font-size: 1.5rem;
      }
    }

    .organization-desc {
      ul {
        li {
          font-size: 1.5rem;
        }
      }
    }
  }
  @media only screen and (min-width: 550px) and (max-width: 1180px) {
    .organization-name {
      h2 {
        font-size: 1.5rem;
      }
      h3 {
        font-size: 1.3rem;
      }
      p {
        font-size: 1.3rem;
      }
    }

    .organization-desc {
      ul {
        li {
          font-size: 1.5rem;
        }
      }
    }
  }
`;

export default ExperienceSection;
