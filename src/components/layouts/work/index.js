import React from "react";
import { ThemeProvider } from "styled-components";

import Theme from "../../../styles/theme";
import { Footer } from "../default/footer";
import { Header } from "../default/header";
import { Main, PageContainer } from "./style";

const WorkLayout = ({ nav, children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <PageContainer>
        <Header {...nav} fixHeader={false} />
        <Main>{children}</Main>
        <Footer {...nav} />
      </PageContainer>
    </ThemeProvider>
  );
};

export default WorkLayout;
