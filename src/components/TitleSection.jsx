import React from "react";
import styled from "styled-components";
import Profile1 from "../assets/profile_photo_1.jpeg";

const TitleSection = () => {
  return (
    <StyledTitleSection className="title-section">
      <StyledTitle className="title">
        <h3>Hello &#128075;, </h3>
        <h2>I'm a Frontend Developer</h2>
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
  height: fit-content;
  align-items: center;
  justify-content: space-around;
  background: #232323;
`;

const StyledImage = styled.div`
  width: 25%;
  overflow: visible;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border: 5px solid #f26b4e;
    border-radius: 50%;
    transition: all 0.5s ease;
    box-shadow: 1px 1px 10px #f26b4e;
  }
  @media screen and (max-width: 1104px) {
    display: none;
  }
`;

const StyledTitle = styled.div`
  /* flex-basis: 50%; */
  h3 {
    font-size: 4rem;
    color: #494949;
    overflow-y: hidden;
    width: 100%;
  }

  h2 {
    /* width: fit-content; */
    font-size: 4rem;
    letter-spacing: 0.2rem;
    font-weight: 800;
    white-space: nowrap;
    border-right: 2px solid #f26b4e;
    padding-right: 5px;
    animation: software-typing 3000ms steps(40, end), blinker 750ms infinite;
  }

  .name {
    color: #f26b4e;
    font-size: 3.5rem;
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

  @keyframes software-typing {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }

  @keyframes blinker {
    from {
      border-color: transparent;
    }
    50% {
      border-color: #f26b4e;
    }
    to {
      border-color: transparent;
    }
  }
  @media only screen and (max-width: 1104px) {
    h2 {
      font-size: 3rem;
    }
  }
`;

export default TitleSection;
