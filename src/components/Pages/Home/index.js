import React from "react";
import { Header, Footer } from "../../Layout";
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
} from "./styles";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection>
          <InnerContentPrimary>
            <BackgroundOneSVG />
            <JobTitle>
              <JobTitleContent>
                <JobTitleText>
                  <span aria-hidden="true">
                    Software
                    <br /> Developer<span>.</span>
                  </span>
                </JobTitleText>
                <JobTitleSubText>
                  I like to craft solid and scalable frontend products with
                  great user experiences.
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
        </HeroSection>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
