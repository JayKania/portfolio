import React from "react";
import styled from "styled-components";

const ContactSection = () => {
  return (
    <StyledContactSection className="contact-section" id="contact">
      <h2>Contact me</h2>
      <StyledContactDetails className="contact-details">
        <div className="detail">
          <h4>
            Call me On<i class="fas fa-mobile-alt" id="phone"></i>
          </h4>
          <p>+1 7828822974</p>
        </div>
        <div className="detail">
          <h4>
            Email <i class="far fa-envelope" id="mail"></i>
          </h4>
          <a href="mailto:jaykania123@gmail.com">jaykania123@gmail.com</a>
        </div>
        <div className="detail">
          <h4>
            Social<i class="fas fa-users" id="social"></i>
          </h4>
          <StylesSocialLinks className="social-links">
            <a href="https://www.linkedin.com/in/jay-kania/" target={"_blank"}>
              <div>
                <i class="fab fa-linkedin fa-2x"></i>
              </div>
            </a>
            <a href="https://github.com/JayKania/" target={"_blank"}>
              <div>
                <i class="fab fa-github fa-2x"></i>
              </div>
            </a>
            <a href="https://www.instagram.com/jay.kania/" target={"_blank"}>
              <div>
                <i class="fab fa-instagram fa-2x"></i>
              </div>
            </a>
          </StylesSocialLinks>
        </div>
      </StyledContactDetails>
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
    </StyledContactSection>
  );
};

const StyledContactSection = styled.footer`
  background: #f26b4e;
  color: white;
  text-align: center;
  padding: 7rem 1rem 4rem 1rem;
  position: relative;
  h2 {
    background: #f26b4e;

    font-size: 4rem;
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
    svg {
      background: transparent;
    }
  }

  .wave svg {
    position: relative;
    display: block;
    width: calc(132% + 1.3px);
    height: 5rem;
  }

  .wave .shape-fill {
    fill: #232323;
  }
`;

const StyledContactDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  margin: 2rem auto;
  background: #f26b4e;

  .detail {
    background: #f26b4e;
    h4 {
      background: #f26b4e;
      font-size: 1.5rem;
      padding: 1rem;
      position: relative;
    }
    p {
      background: #f26b4e;
      font-size: 1.5rem;
    }
    a {
      background: #f26b4e;
      text-decoration: none;
      color: white;
      font-size: 1.5rem;
      i {
        background: #f26b4e;
        font-size: 2rem;
        padding: 0.5rem;
      }
    }
  }

  #mail {
    background: #f26b4e;
    position: absolute;
    font-size: 1.2rem;
    top: 35%;
    left: 25%;
  }
  #phone {
    background: #f26b4e;
    position: absolute;
    font-size: 1.2rem;
    top: 35%;
    left: 1%;
  }
  #social {
    background: #f26b4e;
    position: absolute;
    font-size: 1.2rem;
    top: 35%;
    left: 10%;
  }
`;

const StylesSocialLinks = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 1rem;
  background: #f26b4e;
  a {
    div {
      background: #f26b4e;
      i {
        transition: all 0.3s ease;
        &:hover {
          transform: translateY(-10%);
        }
      }
    }
  }
`;

export default ContactSection;
