import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  @media (max-height: 1199px) and (min-width: 701px) {
    min-height: 100vh;
    height: 100vh;
  }

  @media (max-width: 580px) {
    margin-bottom: 10rem;

    svg {
      display: none;
    }
  }
`;

export const SkillsInnerContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    padding: 0 10rem;
  }

  @media (min-width: 701px) and (max-width: 1500px) {
    max-width: 1500px;
  }

  @media (min-width: 1501px) {
    max-width: 1760px;
  }

  @media (max-width: 580px) {
    padding: 0 15vw;
  }
`;

export const SkillsArticle = styled.article`
  text-align: left;
  position: relative;
  display: flex;

  &:nth-of-type(2) {
    justify-content: flex-end;
  }

  &:not(:last-child) {
    @media (max-width: 700px) {
      margin-bottom: 6vh;
    }
  }
`;

export const SkillsArticleContent = styled.div`
  position: relative;
`;

export const Heading = styled.h1`
  margin: 0;
  font-size: 4em;
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.primary};
  transition: transform 0.5s, opacity 0.2s;

  @media (min-width: 701px) {
    max-width: 30vw;
    transition-delay: 200ms;
  }

  @media (max-width: 580px) {
    font-size: 36px;
  }
`;

export const Paragraph = styled.p`
  line-height: 1.6;
  color: #3d155f;
  transition: transform 0.5s, opacity 0.2s;

  @media (min-width: 701px) {
    max-width: 701px;
    font-size: 1.07em;
    transition-delay: 310ms;
    width: 32vw;
  }

  @media (max-width: 580px) {
    font-size: 13px;
  }
`;

export const BackgroundSquareSVGContainer = styled.svg`
  z-index: -1;
  width: 8rem;
  height: 9rem;
  position: absolute;
  top: -4rem;
  right: 18.4rem;
`;

export const BackgroundSquareCircleSVGContainer = styled.svg`
  width: 20rem;
  height: 14.87rem;
  margin-right: 10rem;
  position: absolute;
  top: 0;
  right: 0;
  position: absolute;
`;

export const BackgroundLineCircleSVGContainer = styled.svg`
  left: 0;
  top: 5rem;
  width: 13rem;
  height: 13.41rem;
  margin-left: 15rem;
  right: 0;
  position: absolute;
`;
