import React from "react";
import { ThemeProvider } from "styled-components";

import Theme from "../../../styles/theme";
import { Header } from "./header";
import { Footer } from "./footer";

const DefaultLayout = ({ nav, children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Header {...nav} />
      <main>{children}</main>
      <Footer {...nav} />
    </ThemeProvider>
  );
};

export default DefaultLayout;
