import React from "react";
import styled from "styled-components";
import TitleSection from "./components/TitleSection";
import Nav from "./components/Nav";

const App = () => {
  return (
    <StyledApp className="app">
      <Nav></Nav>
      <TitleSection />
      {/* <div className="line"></div> */}
    </StyledApp>
  );
};

const StyledApp = styled.div`
  height: 100vh;
  color: white;
  margin: 1rem 8rem 0rem 3rem;
  /* border: 1px solid white; */
  .line {
    width: 100%;
    height: 5px;
    margin-top: 6rem;
    background: #f26b4e;
    border-radius: 2px;
  }
`;

export default App;
