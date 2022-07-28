import React from "react";
import {
  WorksInnerContent,
  WorksLane,
  WorksLaneArticle,
  WorksLaneArticleContent,
  WorksLaneArticleHeading,
  WorksLaneArticleParagraph,
  WorksLaneLink,
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
                  I build & <br />
                  design stuff
                </WorksLaneArticleHeading>
                <WorksLaneArticleParagraph>
                  Open source <br /> projects, web apps <br /> and experimentals
                </WorksLaneArticleParagraph>
              </WorksLaneArticleContent>
            </WorksLaneArticle>
            <WorksLaneLink to="/work">
              <WorksLaneLinkContent>see my work</WorksLaneLinkContent>
            </WorksLaneLink>
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
                  About design
                  <br />
                  frontend dev,
                  <br />
                  learning and life.
                </WorksLaneArticleParagraph>
              </WorksLaneArticleContent>
            </WorksLaneArticle>
            <WorksLaneLink to="/shelf">
              <WorksLaneLinkContent>read my articles</WorksLaneLinkContent>
            </WorksLaneLink>
          </WorksLane>
        </WorksLanes>
      </WorksInnerContent>
    </WorksSection>
  );
};

export default HomeWorks;
