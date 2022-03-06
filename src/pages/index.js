import * as React from "react";
import { Footer, Header, Meta } from "../components";
import "../styles/globals.css";

const IndexPage = () => {
  return (
    <>
      <Meta
        title="Onuchuwku Adebayo - Software Engineer"
        description="Onuchukwu Adebayo is a Software Engineer highly skilled at design systems and progressively enhanced web applications."
      />
      <Header />
      <main>
        <section className="headers"></section>
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;
