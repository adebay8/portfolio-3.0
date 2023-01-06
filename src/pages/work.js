import React from "react";
import { graphql } from "gatsby";
import { WorkLayout } from "../components/layouts";
import { WorkHeader, WorkProjects } from "../components/sections/work";
import { Meta } from "../components/common";

const Work = ({
  data: {
    strapiNav: { nav },
    strapiPage: { meta },
    allStrapiProject: { nodes },
  },
}) => {
  return (
    <WorkLayout nav={nav}>
      <Meta {...meta} />
      <WorkHeader />
      <WorkProjects projects={nodes} />
    </WorkLayout>
  );
};

export const query = graphql`
  query WorkPage {
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
    strapiPage(name: { eq: "work" }) {
      name
      slug
      meta {
        title: og_title
        description: og_description
        twitter_title
        twitter_description
      }
    }
    allStrapiProject {
      nodes {
        title
        url
        logo {
          url
        }
      }
    }
  }
`;

export default Work;
