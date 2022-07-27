import React from "react";
import {
  WorksInnerContent,
  WorksLane,
  WorksLaneArticle,
  WorksLaneArticleContent,
  WorksLaneArticleHeading,
  WorksLaneArticleParagraph,
  WorksLanes,
  WorksSection,
} from "./styles";

const HomeWorks = () => {
  return (
    <WorksSection>
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
          </WorksLane>
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
          </WorksLane>
        </WorksLanes>
      </WorksInnerContent>
    </WorksSection>
  );
};

export default HomeWorks;
