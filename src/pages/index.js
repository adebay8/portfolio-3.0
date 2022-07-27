import * as React from "react";
import { Meta } from "../components/common";
import { DefaultLayout } from "../components/layouts";
import { HomeHero } from "../components/sections/home";
import "../styles/globals.css";

const IndexPage = () => {
  return (
    <DefaultLayout>
      <Meta
        title="Onuchuwku Adebayo - Software Engineer"
        description="Onuchukwu Adebayo is a Software Engineer highly skilled at design systems and progressively enhanced web applications."
      />
      <HomeHero />
    </DefaultLayout>
  );
};

export default IndexPage;
