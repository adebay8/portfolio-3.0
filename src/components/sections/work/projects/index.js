import React from "react";
import {
  WorkProjectsList,
  WorkProjectsListItem,
  WorkProjectsListItemFigure,
  WorkProjectsListItemInfo,
  WorkProjectsListItemLink,
  WorkProjectsListItemLinkText,
  WorkProjectsListItemTitle,
  WorkProjectsSection,
} from "./style";

const WorkProjects = ({ projects }) => {
  return (
    <WorkProjectsSection>
      <WorkProjectsList>
        {projects.map((project, index) => (
          <WorkProjectsListItem key={index}>
            <WorkProjectsListItemLink href={project.url}>
              {project.title}
            </WorkProjectsListItemLink>
            <WorkProjectsListItemFigure>
              <span style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={project.logo.url}
                  alt={project.title}
                  style={{ width: "75%" }}
                />
              </span>
            </WorkProjectsListItemFigure>
            <WorkProjectsListItemInfo>
              <WorkProjectsListItemTitle>
                {project.title}
              </WorkProjectsListItemTitle>
              <WorkProjectsListItemLinkText
                href={project.url}
                rel="noopener noreferrer"
              >
                {project.url.replace("https://", "")}
              </WorkProjectsListItemLinkText>
            </WorkProjectsListItemInfo>
          </WorkProjectsListItem>
        ))}
      </WorkProjectsList>
    </WorkProjectsSection>
  );
};

export default WorkProjects;
