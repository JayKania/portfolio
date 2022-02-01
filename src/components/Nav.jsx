import React from "react";
import styled from "styled-components";

const Nav = () => {
  const linkHandler = (event) => {
    event.preventDefault();
  };

  return (
    <StyledNav className="nav">
      <div className="links-container">
        <a href="#">Home</a>
        <a href="#" className="active">
          About Me
        </a>
        <a href="#">Skills</a>
        <a href="#">Contact</a>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  a {
    transition: all 0.3s ease;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    &:hover {
      color: #f26b4e;
    }
  }
  .active {
    color: #f26b4e;
  }
  .links-container {
    display: flex;
    justify-content: center;
    a {
      margin: 1rem 2rem;
    }
  }
`;

export default Nav;
