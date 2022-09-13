import { Link } from "gatsby";
import React from "react";
import {
  BasicContact,
  CrossSiteNav,
  Footer as FooterSection,
  FooterBottom,
  FooterCopyright,
  FooterMain,
  InnerContent,
  List,
  ListItem,
  ListItemLink,
  SayHello,
} from "./styles";

export const Footer = () => {
  return (
    <FooterSection id="contact">
      <InnerContent>
        <FooterMain>
          <BasicContact>
            <SayHello>Say Hello</SayHello>
            <List>
              <ListItem>
                <ListItemLink>adebayop.o@yahoo.com</ListItemLink>
              </ListItem>
              <ListItem>
                <ListItemLink>t.me/oluwaponnle</ListItemLink>
              </ListItem>
            </List>
          </BasicContact>
          <CrossSiteNav>
            <ListItem>
              <ListItemLink to="/work">My Work</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink to="/shelf">My Shelf</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink>My Resume</ListItemLink>
            </ListItem>
          </CrossSiteNav>
        </FooterMain>
        <FooterBottom>
          <FooterCopyright>
            &#169; Onuchukwu Adebayo 2022
            <br />
            <br />
            <FooterCopyright>
              Inspired by{" "}
              <Link to="https://olaolu.dev" target="_blank">
                Olaolu
              </Link>
            </FooterCopyright>
          </FooterCopyright>
        </FooterBottom>
      </InnerContent>
    </FooterSection>
  );
};
