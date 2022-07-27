import styled from "styled-components";

export const WorksSection = styled.section`
  min-height: 100vh;
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #4831d4;
`;

export const WorksInnerContent = styled.div`
  position: relative;
  justify-content: center;
  width: 100%;
  display: flex;

  @media (min-width: 701px) {
    padding: 0 10rem;
  }

  @media (min-width: 701px) and (max-width: 1500px) {
    max-width: 1500px;
  }

  @media (max-width: 1500px) {
    max-width: unset;
    padding: 0 calc(6em - 2em);
  }
`;

export const WorksLanes = styled.div`
  width: 100%;
  display: flex;
  background-color: #fff;

  @media (min-width: 1024px) and (min-height: 665px) and (max-height: 1500px) {
    min-height: 40em;
  }
`;

export const WorksLane = styled.div`
  padding: 6.95em;
  padding-left: 6em;

  @media (min-width: 581px) {
    width: 50%;
  }

  &:not(:last-of-type) {
    border-style: solid;
    border-width: 0 0 0.15rem 0;
    border-color: rgba(72, 49, 212, 0.3);

    @media (min-width: 581px) {
      border-bottom-width: 0;
      border-right-width: 0.15rem;
    }
  }
`;

export const WorksLaneArticle = styled.article`
  margin-bottom: 4.5em;
  text-align: left;
  position: relative;
`;

export const WorksLaneArticleContent = styled.div``;

export const WorksLaneArticleHeading = styled.h1`
  transition: transform 0.5s, opacity 0.2s;
  margin: 0;
  font-size: 4em;
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: #4831d4;

  @media (min-width: 701px) {
    max-width: 30vw;
    transition-delay: 200ms;
  }
  opacity: 1;
  transform: translate3d(0, 0, 0);
  font-size: 3.2em;
`;

export const WorksLaneArticleParagraph = styled.p`
  opacity: 1;
  transform: translate3d(0, 0, 0);
  width: unset;
  line-height: 1.2;
  font-size: 1.6em;
  letter-spacing: 0.02em;
  color: #3d155f;
  transition: transform 0.5s, opacity 0.2s;

  @media (min-width: 701px) {
    max-width: 701px;
    font-size: 1.07em;
    -webkit-transition-delay: 310ms;
    transition-delay: 310ms;
  }
`;
