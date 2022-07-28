import React from "react";
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

const HomeHero = () => {
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
          <Highlight>
            Highly skilled at progressive enhancement, design systems &#38; UI
            Engineering.
          </Highlight>
          <Highlight>
            Over a decade of experience building products for clients across
            several countries.
          </Highlight>
        </Highlights>
        <Nav>
          <NavItems>
            <NavItem>
              <NavItemButton to="/#" aria-current />
              <NavItemButton to="/#skills" />
              <NavItemButton to="/#works" />
              <NavItemButton />
            </NavItem>
          </NavItems>
        </Nav>
      </InnerContentBottom>
    </HeroSection>
  );
};

export default HomeHero;
