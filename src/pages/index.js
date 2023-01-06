import * as React from "react";
import { graphql } from "gatsby";
import { Meta } from "../components/common";
import { DefaultLayout } from "../components/layouts";
import { HomeHero, HomeSkills, HomeWorks } from "../components/sections/home";

import "../styles/globals.css";

const IndexPage = ({ data }) => {
  const {
    strapiPage: {
      meta,
      additional_fields: {
        sections: { hero, skills },
      },
    },
    strapiNav: { nav },
  } = data;

  return (
    <DefaultLayout nav={nav} fixHeader={true}>
      <Meta {...meta} />
      <HomeHero data={hero} />
      <HomeSkills skills={skills} />
      <HomeWorks />
    </DefaultLayout>
  );
};

export const query = graphql`
  query HomePage {
    strapiPage(name: { eq: "home" }) {
      name
      slug
      additional_fields {
        sections {
          hero {
            highlights
            navItems {
              path
            }
          }
          skills {
            title
            description
            InnerContentSVG
            OuterContentSVG
          }
        }
      }
      meta {
        title: og_title
        description: og_description
        # og_image
        twitter_title
        twitter_description
      }
    }
    strapiNav {
      nav {
        links {
          title
          link
        }
        contact {
          title
          link
        }
      }
    }
  }
`;

export default IndexPage;
