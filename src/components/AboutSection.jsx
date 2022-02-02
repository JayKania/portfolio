import React from "react";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <StyledAbout className="about-section" id="about">
      <div className="about-wrapper">
        <h1>About</h1>
        <h2>About Me</h2>
      </div>
      <div className="description">
        <h4>
          My name is <span>Jay Kania</span>
        </h4>
        <br />
        <p className="bio">
          Software Engineer with good problem solving skills and a strong team
          player. Passionate about coding and learning new technologies.
          Currently I am working as a Programmer Analyst Trainee at Cognizant
          Technology Services.
        </p>
        {/* <div className="details">
          <div className="detail">
            <h5>Name</h5>
            Jay Kania
          </div>
          <div className="detail">
            <h5>Phone</h5>
            +91 9537003277
          </div>
          <div className="detail">
            <h5>Country</h5>
            India
          </div>
          <div className="detail">
            <h5>Email:</h5>
            jaykania123@gmail.com
          </div>
        </div> */}
        <div className="education">
          <h5>Education</h5>
          <p>
            Bachelor of Technology in Information Technology,
            <br />
            Birla Vishvakarma Mahavidhyalaya.
          </p>
        </div>
      </div>
    </StyledAbout>
  );
};

const StyledAbout = styled.div`
  background: #1f1f1f;
  padding-top: 7rem;
  padding-bottom: 2rem;
  text-align: center;
  .about-wrapper {
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
      transform: translateY(-45%) translateX(22%);
    }
  }
  /* h2 {
    color: #f26b4e;
    font-size: 4rem;
    padding-bottom: 3rem;
  } */
  h4 {
    font-size: 1.4rem;
  }
  span {
    font-size: 1.4rem;
    color: #f26b4e;
  }
  .description {
    text-align: center;
    .bio {
      margin: 0 auto;
      width: 40%;
      text-align: justify;
      font-size: 1.2rem;
    }
  }
  .details {
    padding-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 40%;
    margin: 0 auto;
    .detail {
      padding: 2rem 2rem;
      width: 40%;
      h5 {
        color: #f26b4e;
        font-weight: bolder;
        font-size: 1.3rem;
      }
    }
  }
  .education {
    padding: 2rem 2rem;
    width: 70%;
    margin: 0 auto;
    text-align: center;
    h5 {
      color: #f26b4e;
      font-weight: bolder;
      font-size: 1.3rem;
    }
    p {
      padding: 0.5rem;
      text-align: center;
      font-size: 1.2rem;
    }
  }
`;

export default AboutSection;
