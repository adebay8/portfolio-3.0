import React from "react";
import {
  Heading,
  Paragraph,
  Section,
  SkillsArticle,
  SkillsArticleContent,
  SkillsInnerContent,
} from "./styles";

const HomeSkills = ({ skills = [] }) => {
  return (
    <Section id="skills">
      <SkillsInnerContent>
        {skills.map(
          ({ title, description, InnerContentSVG, OuterContentSVG }, index) => (
            <SkillsArticle key={index}>
              <SkillsArticleContent>
                <Heading>{title}</Heading>
                <Paragraph>{description}</Paragraph>
                <InnerContentSVG />
              </SkillsArticleContent>
              <OuterContentSVG />
            </SkillsArticle>
          )
        )}
      </SkillsInnerContent>
    </Section>
  );
};

export default HomeSkills;
