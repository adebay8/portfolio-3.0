import React, { useState } from "react";
import BackgroundOneSVG from "./components/BackgroundOneSVG";
import BackgroundTwoSVG from "./components/BackgroundTwoSVG";

import {
  HeroSection,
  InnerContentPrimary,
  JobTitle,
  JobTitleContent,
  JobTitleSubText,
  JobTitleText,
  ProfileImage,
  ImageContainer,
  InnerContentBottom,
  Highlights,
  Highlight,
  Nav,
  NavItems,
  NavItem,
  NavItemButton,
} from "./styles";

const HomeHero = ({ data }) => {
  const [activeNavItem, setActiveNavItem] = useState(0);

  return (
    <HeroSection>
      <InnerContentPrimary>
        <BackgroundOneSVG />
        <JobTitle>
          <JobTitleContent>
            <JobTitleText>
              <span aria-hidden="true">
                Software
                <br />
                Engineer<span>.</span>
              </span>
            </JobTitleText>
            <JobTitleSubText>
              I like to craft solid and scalable frontend products with great
              user experiences.
            </JobTitleSubText>
          </JobTitleContent>
        </JobTitle>
        <ProfileImage>
          <BackgroundTwoSVG />
          <ImageContainer
            aria-label="Photo of Onuchukwu."
            role="img"
          ></ImageContainer>
        </ProfileImage>
      </InnerContentPrimary>
      <InnerContentBottom>
        <Highlights>
          {data.highlights.map((highlight, index) => (
            <Highlight
              key={index}
              dangerouslySetInnerHTML={{ __html: highlight }}
            />
          ))}
        </Highlights>
        <Nav>
          <NavItems>
            <NavItem>
              {data.navItems.map(({ path }, index) => (
                <NavItemButton
                  key={index}
                  to={path}
                  aria-current={activeNavItem === index}
                  onClick={() => setActiveNavItem(index)}
                />
              ))}
            </NavItem>
          </NavItems>
        </Nav>
      </InnerContentBottom>
    </HeroSection>
  );
};

export default HomeHero;
