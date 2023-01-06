import { Link } from "gatsby";
import styled from "styled-components";

export const WorkProjectsSection = styled.section`
  margin-bottom: 140px;
`;

export const WorkProjectsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  row-gap: 20px;
  column-gap: 15px;
  padding: 0;
  margin: 0;

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

export const WorkProjectsListItem = styled.li`
  flex-grow: 0;
  flex-shrink: 1;
  overflow: hidden;
  position: relative;
  margin-bottom: 1.2em;
  border-radius: 0.2rem;
  background-color: #fff;
  box-shadow: 0px 8px 6px -6px rgb(235 234 242 / 58%);
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  transition-property: transform, box-shadow;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (min-width: 940px) {
    flex-basis: calc((100% - 2em) / 3);
  }
`;

export const WorkProjectsListItemLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80%;
  overflow: hidden;
  text-indent: -9999px;
  z-index: 0;
  transition: none;
`;

export const WorkProjectsListItemFigure = styled.figure`
  margin: 0;
  height: 10em;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  transition: filter 0.3s;
  justify-content: center;
  background: rgba(245, 244, 252, 0.62);
`;

export const WorkProjectsListItemInfo = styled.div`
  padding: 36px;
`;

export const WorkProjectsListItemTitle = styled.h5`
  margin: 0;
  font-size: 22px;
  transition: color 0.6s;
  margin-bottom: 5px;
  font-weight: 700;
  line-height: 1.15;
  color: #474747;
`;

export const WorkProjectsListItemLinkText = styled(Link)`
  white-space: pre;
  color: #6b17e6;
  font-size: 18px;
  text-decoration: none;
  transition-duration: 300ms;
  background-color: transparent;
  transition-property: opacity, color, background-color, transform, border;
  letter-spacing: 0.5px;
`;
