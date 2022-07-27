import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, path = "/", description = "", image = "" }) => {
  const hostUrl = process.env.GATSBY_APP_URL;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href={`${hostUrl}${path}`} />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${hostUrl}${path}`} />
        <meta property="og:site_name" content="Onuchukwu Adebayo" />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="508" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
      </Helmet>
    </>
  );
};

export default Meta;
