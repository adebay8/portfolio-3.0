import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({
  title,
  path = "/",
  description = "",
  image = "https://cdn.hashnode.com/res/hashnode/image/upload/v1559814205701/ek9fO-yT0.jpeg?w=800&bm=normal&balph=100&txt64=T2x1d2Fwb25ubGU&txtsize=42&txtfit=max&txtalign=middle,center&txtfont=Helvetica%20Neue,Bold&txtclr=000000&blend=ffffff",
}) => {
  const hostUrl = process.env.GATSBY_APP_URL;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href={`${hostUrl}${path}`} />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={`${hostUrl}${path}`} />
        <meta property="og:site_name" content="Onuchukwu Adebayo" />
        <meta property="og:image" content={image} />
        <meta property="og:image:url" content={image} />
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
