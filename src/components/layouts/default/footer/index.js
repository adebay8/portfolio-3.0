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
  ListItemExternalLink,
  ListItemLink,
  SayHello,
} from "./styles";

export const Footer = ({ links, contact }) => {
  return (
    <FooterSection id="contact">
      <InnerContent>
        <FooterMain>
          <BasicContact>
            <SayHello>Say Hello</SayHello>
            <List>
              {contact.map(({ title, link }, index) => (
                <ListItem key={index}>
                  {link.startsWith("/") ? (
                    <ListItemLink to={link}>{title}</ListItemLink>
                  ) : (
                    <ListItemExternalLink href={link} target="_blank">
                      {title}
                    </ListItemExternalLink>
                  )}
                </ListItem>
              ))}
            </List>
          </BasicContact>
          <CrossSiteNav>
            {links.map(({ title, link }, index) => (
              <ListItem key={index}>
                {link.startsWith("/") ? (
                  <ListItemLink to={link}>{title}</ListItemLink>
                ) : (
                  <ListItemExternalLink href={link} target="_blank">
                    {title}
                  </ListItemExternalLink>
                )}
              </ListItem>
            ))}
          </CrossSiteNav>
        </FooterMain>
        <FooterBottom>
          <FooterCopyright>&#169; Onuchukwu Adebayo 2022</FooterCopyright>
          <br />
          <FooterCopyright style={{ fontSize: 12 }}>
            Inspired by&nbsp;
            <a
              href="https://olaolu.dev"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#aaa",
                textDecoration: "none",
              }}
            >
              Olaolu
            </a>
          </FooterCopyright>
        </FooterBottom>
      </InnerContent>
    </FooterSection>
  );
};
