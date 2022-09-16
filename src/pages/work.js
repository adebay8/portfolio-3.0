import React from "react";
import { DefaultLayout } from "../components/layouts";

const Work = () => {
  return (
    <DefaultLayout
      nav={{
        links: [
          {
            title: "My Work",
            link: "/work",
          },
          {
            title: "My Shelf",
            link: "https://blog.ponnle.xyz",
          },
          {
            title: "My Resume",
            link: "/resume",
          },
        ],
        contact: [
          {
            title: "adebayop.o@yahoo.com",
            link: "mailto:adebayop.o@yahoo.com",
          },
          {
            title: "t.me/oluwaponnle",
            link: "https://t.me/oluwaponnle",
          },
        ],
      }}
    >
      <></>
    </DefaultLayout>
  );
};

export default Work;
