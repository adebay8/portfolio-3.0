import React, { useState } from "react";
import {
  BasicContact,
  BasicContactList,
  HeaderSection,
  Logo,
  LogoText,
  MenuButton,
  Nav,
  NavList,
  NavListExternalLink,
  NavListItem,
  NavListLink,
  SayHello,
} from "./styles";

export const Header = ({ links, contact }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <HeaderSection>
      <Logo to="/">
        <LogoText>Onuchukwu.</LogoText>
      </Logo>
      <MenuButton onClick={() => setOpen((open) => !open)} isOpen={isOpen} />
      <Nav isOpen={isOpen}>
        <NavList isOpen={isOpen}>
          {links.map(({ title, link }, index) => (
            <NavListItem key={index}>
              {link.startsWith("/") ? (
                <NavListLink to={link}>{title}</NavListLink>
              ) : (
                <NavListExternalLink href={link} target="_blank">
                  {title}
                </NavListExternalLink>
              )}
            </NavListItem>
          ))}
        </NavList>
        <BasicContact isOpen={isOpen}>
          <SayHello isOpen={isOpen}>Say Hello</SayHello>
          <BasicContactList isOpen={isOpen}>
            {contact.map(({ title, link }, index) => (
              <NavListItem key={index}>
                {link.startsWith("/") ? (
                  <NavListLink to={link}>{title}</NavListLink>
                ) : (
                  <NavListExternalLink href={link} target="_blank">
                    {title}
                  </NavListExternalLink>
                )}
              </NavListItem>
            ))}
          </BasicContactList>
        </BasicContact>
      </Nav>
    </HeaderSection>
  );
};
