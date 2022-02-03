import React from "react";
import styled from "styled-components";
import Profile from "../assets/profile_photo.jpeg";
import Profile1 from "../assets/profile_photo_1.jpeg";
import Home from "../assets/home1.png";

const TitleSection = () => {
  return (
    <StyledTitleSection className="title-section">
      <StyledTitle className="title">
        <h3>Hello, I'm</h3>
        <h2>A Software</h2>
        <h2>
          Developer<span>.</span>
        </h2>
        <a href="#contact">
          <button>CONTACT ME</button>
        </a>
      </StyledTitle>
      <StyledImage className="image">
        <img src={Profile1} alt="" />
      </StyledImage>
    </StyledTitleSection>
  );
};

const StyledTitleSection = styled.div`
  padding-top: 7rem;
  padding-bottom: 2rem;
  display: flex;
  /* flex-wrap: wrap; */
  height: fit-content;
  align-items: center;
  justify-content: space-around;
  background: #232323;
`;

const StyledImage = styled.div`
  /* margin-right: 5rem; */
  margin-top: 3rem;
  width: 25%;
  overflow: visible;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border: 5px solid #f26b4e;
    border-radius: 50%;
    transition: all 0.5s ease;
    box-shadow: 1px 1px 10px #f26b4e;
  }
`;

const StyledTitle = styled.div`
  line-height: 4rem;

  h3 {
    font-size: 4rem;
    color: #494949;
    overflow-y: hidden;
    width: fit-content;
  }
  h2 {
    height: fit-content;
    width: fit-content;
    font-size: 4rem;
    letter-spacing: 0.2rem;
    font-weight: 800;
    overflow-y: hidden;
  }
  .name {
    color: #f26b4e;
    font-size: 3.5rem;
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
  /* @media screen and (max-width: 768px) {
    line-height: 1.8rem;
    h3,
    h2 {
      font-size: 2rem;
    }
    .img {
      width: 20%;
    }
  } */
`;

export default TitleSection;
