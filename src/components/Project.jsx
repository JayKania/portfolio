import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const Project = ({ title, description, tags, link }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: "0",
  });

  return (
    <StyledProject
      ref={ref}
      className={`project ${inView ? "opacity-1" : "opacity-0"}`}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <p className="tags">{tags}</p>
      <a href={link} target={"_blank"}>
        View on Github
      </a>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  margin: 2rem;
  padding-bottom: 2rem;
  background: #232323;
  box-shadow: 0 6px 6px -4px #f26b4e;
  border-radius: 10px;
  transition: transform 300ms ease, opacity 300ms ease;
  h2 {
    padding: 2rem;
    font-size: 2rem;
    color: #f26b4e;
  }
  p {
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 2rem;
    font-size: 1.2rem;
  }
  .tags {
    color: #585858;
  }
  a {
    padding-left: 2rem;
    padding-right: 2rem;
    text-decoration: none;
    color: #f26b4e;
    font-size: 1.5rem;
  }
  &.opacity-0 {
    opacity: 0;
    transform: translateY(100%);
  }
  &.opacity-1 {
    opacity: 1;
    transform: translateY(0);
  }
  @media only screen and (max-width: 480px) {
    margin: 2rem auto;
    width: 80%;
    h2 {
      font-size: 2.5rem;
    }
    p {
      font-size: 2rem;
    }
    a {
      font-size: 2rem;
    }
  }
  @media only screen and (min-width: 481px) and (max-width: 820px) {
    margin: 2rem auto;
    width: 90%;
    h2 {
      font-size: 2.5rem;
    }
    p {
      font-size: 2rem;
    }
    a {
      font-size: 2rem;
    }
  }
  @media only screen and (min-width: 550px) and (max-width: 1180px) {
    margin: 2rem auto;
    width: 90%;
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.35rem;
    }
    a {
      font-size: 1.35rem;
    }
  }
`;

export default Project;
