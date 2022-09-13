import * as React from "react";
import { Meta } from "../components/common";
import { DefaultLayout } from "../components/layouts";
import { HomeHero, HomeSkills, HomeWorks } from "../components/sections/home";
import BackgroundSquareSVG from "../components/sections/home/skills/components/BackgroundSquareSVG";
import BackgroundLineCircleSVG from "../components/sections/home/skills/components/BackgroundLineCircleSVG";
import BackgroundSquareCircleSVG from "../components/sections/home/skills/components/BackgroundSquareCircleSVG";

import "../styles/globals.css";

const IndexPage = () => {
  const data = {
    meta: {
      title: "Onuchuwku Adebayo - Software Engineer",
      description:
        "Onuchukwu Adebayo is a Software Engineer highly skilled at design systems and progressively enhanced web applications.",
    },
    hero: {
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
    },
    skills: [
      {
        title: "Design",
        description: `I'm probably not the typical designer positioned behind an 
        Illustrator artboard adjusting pixels, but I design. Immersed in
        stylesheets tweaking font sizes and contemplating layouts is
        where you'll find me (~_^). I'm committed to creating fluent
        user experiences while staying fashionable.`,
        InnerContentSVG: BackgroundSquareSVG,
        OuterContentSVG: BackgroundSquareCircleSVG,
      },
      {
        title: "Engineering",
        description: `In building JavaScript applications, I'm equipped with just the
        right tools, and can absolutely function independently of them to
        deliver fast, resilient solutions optimized for scale —
        performance and scalabilty are priorities on my radar.`,
        InnerContentSVG: () => <></>,
        OuterContentSVG: BackgroundLineCircleSVG,
      },
    ],
  };

  return (
    <DefaultLayout>
      <Meta {...data.meta} />
      <HomeHero data={data.hero} />
      <HomeSkills skills={data.skills} />
      <HomeWorks />
    </DefaultLayout>
  );
};

export default IndexPage;
