import * as React from "react";
import { Meta } from "../components/common";
import { DefaultLayout } from "../components/layouts";
import { HomeHero, HomeSkills, HomeWorks } from "../components/sections/home";
import "../styles/globals.css";

const IndexPage = () => {
  const heroData = {
    highlights: [
      "Highly skilled at progressive enhancement, design systems &#38; UI Engineering.",
      "Over a decade of experience building products for clients across several countries.",
    ],
    navItems: [
      {
        path: "/#",
      },
      {
        path: "/#skills",
      },
      {
        path: "/#works",
      },
      {
        path: "/#contact",
      },
    ],
  };

  return (
    <DefaultLayout>
      <Meta
        title="Onuchuwku Adebayo - Software Engineer"
        description="Onuchukwu Adebayo is a Software Engineer highly skilled at design systems and progressively enhanced web applications."
      />
      <HomeHero data={heroData} />
      <HomeSkills />
      <HomeWorks />
    </DefaultLayout>
  );
};

export default IndexPage;
