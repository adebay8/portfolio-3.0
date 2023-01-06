import React from "react";
import { ThemeProvider } from "styled-components";

import Theme from "../../../styles/theme";
import { Header } from "./header";
import { Footer } from "./footer";

const DefaultLayout = ({ nav, children, fixHeader = true }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Header {...nav} fixHeader={fixHeader} />
      <main>{children}</main>
      <Footer {...nav} />
    </ThemeProvider>
  );
};

export default DefaultLayout;
