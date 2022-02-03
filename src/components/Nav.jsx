import React from "react";
import styled from "styled-components";

const Nav = () => {
  const linkHandler = (event) => {
    event.preventDefault();
  };

  return (
    <StyledNav className="nav">
      <h3>Jay Kania</h3>
      <div className="links-container">
        {/* <a href="#">Home</a> */}
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>
      {/* <h3>Logo</h3> */}
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    color: #f26b4e;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    overflow: visible;
  }

  .links-container {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: visible;
    a {
      transition: all 0.3s ease;
      color: white;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      overflow: visible;
      margin: 0rem 1rem 0rem 1rem;
      &:hover {
        color: #f26b4e;
      }
    }
  }
`;

export default Nav;
