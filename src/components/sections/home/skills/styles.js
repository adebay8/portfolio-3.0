import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const SkillsInnerContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 701px) {
    padding: 0 10rem;
  }

  @media (min-width: 701px) and (max-width: 1500px) {
    max-width: 1500px;
  }

  @media (min-width: 1501px) {
    max-width: 1760px;
  }
`;

export const SkillsArticle = styled.article`
  text-align: left;
  position: relative;
  display: flex;

  &:nth-of-type(2) {
    justify-content: flex-end;
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
  color: #4831d4;
  transition: transform 0.5s, opacity 0.2s;

  @media (min-width: 701px) {
    max-width: 30vw;
    transition-delay: 200ms;
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
`;
