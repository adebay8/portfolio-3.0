import styled from "styled-components";

export const Main = styled.main`
  max-width: 1280px;

  @media (min-width: 1024px) {
    margin-top: 84px;
  }

  margin: 0 auto;
  padding: 0 70px;

  @media (max-width: 650px) {
    margin-top: 0;
    padding-left: 8.9vw;
    padding-right: 8.9vw;
  }
`;

export const PageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary500};
`;
