import { Link } from "gatsby";
import styled from "styled-components";

export const WorksSection = styled.section`
  min-height: 100vh;
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  overflow: hidden;

  @media (max-height: 1199px) and (min-width: 701px) {
    min-height: 100vh;
    height: 100vh;
  }

  @media (max-width: 580px) {
    /* margin-bottom: 10rem; */
  }
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

  @media (max-width: 580px) {
    padding: 0 6vw;
  }
`;

export const WorksLanes = styled.div`
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary};

  @media (min-width: 1024px) and (min-height: 665px) and (max-height: 1500px) {
    min-height: 40em;
  }

  @media (max-width: 580px) {
    flex-direction: column;
    width: 95%;
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
    /* border-color: rgba(72, 49, 212, 0.3); */
    border-color: ${({ theme }) => theme.colors.secondary}aa;

    @media (min-width: 581px) {
      border-bottom-width: 0;
      border-right-width: 0.15rem;
    }
  }

  @media (max-width: 580px) {
    padding: 63px;
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
  /* color: ${({ theme }) => theme.colors.primary}; */
  color: ${({ theme }) => theme.colors.secondary};

  @media (min-width: 701px) {
    max-width: 30vw;
    transition-delay: 200ms;
  }

  opacity: 1;
  transform: translate3d(0, 0, 0);
  font-size: 3.2em;

  @media (max-width: 580px) {
    font-size: 29px;
  }
`;

export const WorksLaneArticleParagraph = styled.p`
  opacity: 1;
  transform: translate3d(0, 0, 0);
  width: unset;
  line-height: 1.2;
  font-size: 1.6em;
  letter-spacing: 0.02em;
  /* color: #3d155f; */
  color: #fff;
  transition: transform 0.5s, opacity 0.2s;

  @media (min-width: 701px) {
    max-width: 701px;
    /* font-size: 1.07em; */
    -webkit-transition-delay: 310ms;
    transition-delay: 310ms;
  }

  @media (max-width: 580px) {
    font-size: 15px;
  }
`;

export const WorksLaneLink = styled(Link)`
  color: #3d155f;
  position: relative;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.9em;
  user-select: none;
  display: inline-flex;
  overflow: hidden;
  background: transparent;
  white-space: nowrap;
  min-width: 23.222em;
  outline: none;
  text-decoration: none;

  &:hover > div {
    color: ${({ theme }) => theme.colors.primary};
    border-color: #fff;

    &:before {
      -webkit-transform: translateX(0);
      -ms-transform: translateX(0);
      transform: translateX(0);
      background: #fff;
    }
  }
`;

export const WorksLaneExternalLink = styled.a`
  color: #3d155f;
  position: relative;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.9em;
  user-select: none;
  display: inline-flex;
  overflow: hidden;
  background: transparent;
  white-space: nowrap;
  min-width: 23.222em;
  outline: none;
  text-decoration: none;

  &:hover > div {
    color: ${({ theme }) => theme.colors.primary};
    border-color: #fff;

    &:before {
      -webkit-transform: translateX(0);
      -ms-transform: translateX(0);
      transform: translateX(0);
      background: #fff;
    }
  }
`;

export const WorksLaneLinkContent = styled.div`
  z-index: 1;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 1.25em 3em;
  width: 100%;
  color: #fff;
  border: 1px solid #fff;
  min-height: 4.5em;

  &::before {
    content: "";
    width: 101%;
    height: 108%;
    pointer-events: none;
    z-index: -1;
    position: absolute;
    top: -0.1em;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    transform: translateX(-100%);
    transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  }

  @media (max-width: 580px) {
    padding: 10px 24px;
    width: 60%;
    min-height: 36px;
    font-size: 9px;
  }
`;
