import React from "react";
import {
  Heading,
  Paragraph,
  Section,
  SkillsArticle,
  SkillsArticleContent,
  SkillsInnerContent,
} from "./styles";
import BackgroundSquareSVG from "./components/BackgroundSquareSVG";
import BackgroundLineCircleSVG from "./components/BackgroundLineCircleSVG";
import BackgroundSquareCircleSVG from "./components/BackgroundSquareCircleSVG";

const HomeSkills = ({ skills = [] }) => {
  const svgs = {
    BackgroundSquareSVG: BackgroundSquareSVG,
    BackgroundLineCircleSVG: BackgroundLineCircleSVG,
    BackgroundSquareCircleSVG: BackgroundSquareCircleSVG,
    empty: () => <></>,
  };

  return (
    <Section id="skills">
      <SkillsInnerContent>
        {skills.map(
          ({ title, description, InnerContentSVG, OuterContentSVG }, index) => {
            const Inner =
              svgs[
                Boolean(InnerContentSVG) === true ? InnerContentSVG : "empty"
              ];
            const Outer = svgs[OuterContentSVG ?? "empty"];
            return (
              <SkillsArticle key={index}>
                <SkillsArticleContent>
                  <Heading>{title}</Heading>
                  <Paragraph>{description}</Paragraph>
                  <Inner />
                </SkillsArticleContent>
                <Outer />
              </SkillsArticle>
            );
          }
        )}
      </SkillsInnerContent>
    </Section>
  );
};

export default HomeSkills;
