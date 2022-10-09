import React from "react";
import {
  WorksInnerContent,
  WorksLane,
  WorksLaneArticle,
  WorksLaneArticleContent,
  WorksLaneArticleHeading,
  WorksLaneArticleParagraph,
  WorksLaneLink,
  WorksLaneExternalLink,
  WorksLaneLinkContent,
  WorksLanes,
  WorksSection,
} from "./styles";

const HomeWorks = () => {
  return (
    <WorksSection id="works">
      <WorksInnerContent>
        <WorksLanes>
          <WorksLane>
            <WorksLaneArticle>
              <WorksLaneArticleContent>
                <WorksLaneArticleHeading>
                  I build &#38;
                  <br />
                  design stuff
                </WorksLaneArticleHeading>
                <WorksLaneArticleParagraph>
                  Open source
                  <br />
                  projects,&nbsp;web apps
                  <br />
                  and experimentals
                </WorksLaneArticleParagraph>
              </WorksLaneArticleContent>
            </WorksLaneArticle>
            <WorksLaneExternalLink href="https://github.com/adebay8" target="_blank">
              <WorksLaneLinkContent>see my work</WorksLaneLinkContent>
            </WorksLaneExternalLink>
          </WorksLane>
          <WorksLane>
            <WorksLaneArticle>
              <WorksLaneArticleContent>
                <WorksLaneArticleHeading>
                  I write,
                  <br />
                  sometimes
                </WorksLaneArticleHeading>
                <WorksLaneArticleParagraph>
                  About system design,
                  <br />
                  backend development,
                  <br />
                  learning and life.
                </WorksLaneArticleParagraph>
              </WorksLaneArticleContent>
            </WorksLaneArticle>
            <WorksLaneExternalLink href="https://blog.ponnle.xyz" target="_blank">
              <WorksLaneLinkContent>read my articles</WorksLaneLinkContent>
            </WorksLaneExternalLink>
          </WorksLane>
        </WorksLanes>
      </WorksInnerContent>
    </WorksSection>
  );
};

export default HomeWorks;
