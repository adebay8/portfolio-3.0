import React from "react";
import { ThemeProvider } from "styled-components";

import Theme from "../../../styles/theme";
import { Header } from "./header";
import { Footer } from "./footer";

const DefaultLayout = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default DefaultLayout;
