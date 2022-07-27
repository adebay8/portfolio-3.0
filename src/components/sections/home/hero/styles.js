import styled from "styled-components";

export const HeroSection = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 4.17rem;
  background: #4831d4;

  @media screen and (min-width: 581px) {
    background: linear-gradient(90deg, #4831d4 67%, #ccf381 33%);
  }
`;

export const InnerContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 701px) {
    padding: 0 10rem;
  }

  @media (min-width: 701px) and (max-width: 1500px) {
    max-width: 1500px;
  }

  @media (min-width: 1501px) {
    max-width: 1760px;
  }
`;

export const InnerContentPrimary = styled(InnerContent)`
  & > svg {
    left: 0;
    display: none;
    height: 738px;
    position: absolute;
    margin-left: -6.2em;
    top: 11.12em;

    @media (min-width: 1024px) and (min-height: 800px) {
      height: 90vh;
    }

    @media (min-aspect-ratio: 1440 / 900) and (min-height: 738px) {
      display: block;
    }
  }

  @media (min-width: 581px) {
    margin-top: calc(11.12em + 2em);
  }
`;

export const JobTitle = styled.article`
  text-align: left;
  position: relative;

  @media (min-width: 701px) {
    margin-top: -3.5em;
  }
`;

export const JobTitleContent = styled.div`
  position: relative;
`;

export const JobTitleText = styled.h1`
  transition: transform 0.5s, opacity 0.2s;
  margin: 0;
  font-size: 4em;
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: #ccf381;
  font-size: 2em;
  margin: 0.67em 0;

  @media (min-width: 701px) {
    max-width: 30vw;
    transition-delay: 200ms;
  }

  @media (min-width: 581px) {
    font-size: 4.4em;
  }
`;

export const JobTitleSubText = styled.p`
  color: #fff;
  line-height: 1.6;

  @media (min-width: 701px) {
    width: 32vw;
  }

  @media (min-width: 701px) {
    max-width: 701px;
    font-size: 1.07em;
    transition-delay: 310ms;
  }

  @media (min-width: 581px) {
    font-size: 1.3em;
  }
`;

export const ProfileImage = styled.figure`
  margin: 0;
  z-index: 1;
  width: 23.334em;
  height: 24.67em;
  position: relative;
  border: 0.115rem solid #fff;

  & > svg {
    top: -25%;
    width: 40em;
    z-index: -1;
    height: 126%;
    right: -5.4em;
    position: absolute;
  }

  @media (min-width: 701px) {
    margin-right: calc(6em + 4em);
  }
`;

export const ImageContainer = styled.span`
  width: inherit;
  display: block;
  height: inherit;
  margin-top: -2.435em;
  background-color: #fff;
  background-size: cover;
  background-position-x: center;
  margin-left: -2.2em;
  background-image: url("https://via.placeholder.com/700");
`;
