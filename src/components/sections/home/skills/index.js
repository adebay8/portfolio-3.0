import React from "react";
import BackgroundLineCircleSVG from "./components/BackgroundLineCircleSVG";
import BackgroundSquareCircleSVG from "./components/BackgroundSquareCircleSVG";
import BackgroundSquareSVG from "./components/BackgroundSquareSVG";
import {
  Heading,
  Paragraph,
  Section,
  SkillsArticle,
  SkillsArticleContent,
  SkillsInnerContent,
} from "./styles";

const HomeSkills = () => {
  return (
    <Section id="skills">
      <SkillsInnerContent>
        <SkillsArticle>
          <SkillsArticleContent>
            <Heading>Design</Heading>
            <Paragraph>
              I'm probably not the typical designer positioned behind an
              Illustrator artboard adjusting pixels, but I design. Immersed in
              stylesheets tweaking font sizes and contemplating layouts is where
              you'll find me (~_^). I'm committed to creating fluent user
              experiences while staying fashionable.
            </Paragraph>
            <BackgroundSquareSVG />
          </SkillsArticleContent>
          <BackgroundSquareCircleSVG />
        </SkillsArticle>
        <SkillsArticle>
          <SkillsArticleContent>
            <Heading>Engineering</Heading>
            <Paragraph>
              In building JavaScript applications, I'm equipped with just the
              right tools, and can absolutely function independently of them to
              deliver fast, resilient solutions optimized for scale —
              performance and scalabilty are priorities on my radar.
            </Paragraph>
          </SkillsArticleContent>
          <BackgroundLineCircleSVG />
        </SkillsArticle>
      </SkillsInnerContent>
    </Section>
  );
};

export default HomeSkills;
