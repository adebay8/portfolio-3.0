import * as React from "react";
import { HomePage, Meta } from "../components";
import "../styles/globals.css";

const IndexPage = () => {
  return (
    <>
      <Meta
        title="Onuchuwku Adebayo - Software Engineer"
        description="Onuchukwu Adebayo is a Software Engineer highly skilled at design systems and progressively enhanced web applications."
      />
      <HomePage />
    </>
  );
};

export default IndexPage;
