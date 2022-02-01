import React from "react";
import styled from "styled-components";
import Profile from "../assets/profile_photo.jpeg";
import Home from "../assets/home1.png";

const TitleSection = () => {
  return (
    <StyledTitleSection className="title-section">
      <StyledTitle className="title">
        <h3>Hi, I'm a</h3>
        <h2>Front End</h2>
        <h2>
          Developer<span>.</span>
        </h2>
        <button>CONTACT ME</button>
      </StyledTitle>
      <StyledImage className="image">
        <img src={Profile} alt="" />
      </StyledImage>
    </StyledTitleSection>
  );
};

const StyledTitleSection = styled.div`
  margin-top: 7rem;
  display: flex;
  flex-wrap: wrap;
  height: 300px;
  align-items: center;
  justify-content: space-between;
`;

const StyledImage = styled.div`
  /* margin-right: 5rem; */
  margin-top: 3rem;
  border: 5px solid #f26b4e;
  border-radius: 10px;
  width: 200px;
  height: 240px;
  position: relative;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    position: absolute;
    top: -18px;
    left: -20px;
    border-radius: 10px;
  }
`;

const StyledTitle = styled.div`
  line-height: 3.5rem;
  h3 {
    font-size: 4rem;
    color: #494949;
  }
  h2 {
    font-size: 4rem;
    letter-spacing: 0.2rem;
    font-weight: 800;
  }
  span {
    color: #f26b4e;
    font-size: 4.5rem;
  }
  button {
    background: #f26b4e;
    color: white;
    border: none;
    padding: 0.5rem;
    font-size: 0.7rem;
    cursor: pointer;
    letter-spacing: 0.1rem;
  }
`;

export default TitleSection;
