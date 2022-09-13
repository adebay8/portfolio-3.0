import { Link } from "gatsby";
import styled from "styled-components";

export const Footer = styled.footer`
  z-index: 3;

  @media (min-width: 701px) and (max-height: 1199px) {
    height: 100vh;
    background: ${({ theme }) => theme.colors.primary};
  }

  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

export const InnerContent = styled.div`
  padding-top: 8rem;
  padding-bottom: 5rem;
  flex-direction: column;

  @media (min-width: 701px) and (max-width: 1500px) {
    max-width: 1500px;
  }

  @media (min-width: 701px) {
    padding: 0 10rem;
  }

  width: 100%;
  display: flex;
`;

export const FooterMain = styled.div`
  margin-bottom: 7.4rem;
  display: flex;
  width: 100%;
`;

export const BasicContact = styled.div`
  @media (min-width: 461px) {
    margin-right: 18vw;
  }

  font-size: 1em;
  line-height: 2.5;
  position: relative;
`;

export const SayHello = styled.span`
  color: #cbc9e2;
  letter-spacing: 0.25em;
  -webkit-text-transform: uppercase;
  text-transform: uppercase;
`;

export const List = styled.ul`
  font-size: 19px;
`;

export const ListItem = styled.li``;

export const ListItemLink = styled(Link)`
  position: relative;
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
`;

export const CrossSiteNav = styled.ul`
  line-height: 2.5;
  font-size: 19px;
  margin-top: 2.05em;
`;

export const FooterBottom = styled.div`
  padding-top: 3em;
  font-size: 1.15em;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.colors.secondary}; ;
`;

export const FooterCopyright = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;
