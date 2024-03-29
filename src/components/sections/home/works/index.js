import React from "react";
import { useTheme } from "styled-components";
import Arrow from "./components/Arrow";
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
  const theme = useTheme();

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
            <WorksLaneLink to="/work">
              <WorksLaneLinkContent>
                see my work
                <Arrow width={25} color={theme.colors.secondary} />
              </WorksLaneLinkContent>
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
                  About system design,
                  <br />
                  backend development,
                  <br />
                  learning and life.
                </WorksLaneArticleParagraph>
              </WorksLaneArticleContent>
            </WorksLaneArticle>
            <WorksLaneExternalLink
              href="https://blog.ponnle.xyz"
              target="_blank"
            >
              <WorksLaneLinkContent>
                read my articles
                <Arrow width={25} color={theme.colors.secondary} />
              </WorksLaneLinkContent>
            </WorksLaneExternalLink>
          </WorksLane>
        </WorksLanes>
      </WorksInnerContent>
    </WorksSection>
  );
};

export default HomeWorks;
