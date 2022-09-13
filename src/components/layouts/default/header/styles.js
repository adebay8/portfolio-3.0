import { Link } from "gatsby";
import styled from "styled-components";

export const HeaderSection = styled.header`
  width: 100%;
  display: flex;
  z-index: 1000;
  max-height: 12rem;
  align-items: center;
  background: transparent;
  justify-content: space-between;
  font-size: 1rem;
  height: 11.12rem;

  @media (min-width: 701px) {
    position: fixed;
    padding-left: 6em;
    padding-right: 6em;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  /* width: 8.34em; */
  /* height: 3.195em; */
  padding: 10px;
  position: relative;
  flex-direction: column;
  transition: color 700ms;
  outline-color: transparent;
  text-decoration: none;
  background: ${({ theme }) => theme.colors.primary};
`;

export const LogoText = styled.p`
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 2em;
  margin: 0 0;
`;

export const MenuButton = styled.button`
  z-index: 999;
  width: 2.78em;
  height: 2.09em;
  background: none;
  position: relative;
  display: inline-flex;
  margin-top: 0.699em;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
  transform: scale(${({ isOpen }) => (isOpen ? 0.9 : 1)});

  &::before,
  &::after {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    transition: 0.2s ease;
    transform: rotate(0deg);
    background-color: currentColor;
  }

  &::before {
    flex: 0;
    transform: rotate(${({ isOpen }) => (isOpen ? 45 : 0)}deg);
  }

  &::after {
    right: 0;
    width: ${({ isOpen }) => (isOpen ? 100 : 72)}%;
    top: ${({ isOpen }) => (isOpen ? 0 : 1.13)}em;
    transform: rotate(${({ isOpen }) => (isOpen ? -45 : 0)}deg);
  }
`;

export const Nav = styled.nav`
  @media (min-width: 701px) {
    &::before {
      transform: scaleX(${({ isOpen }) => (isOpen ? 1 : 0.3826)})
        scaleY(${({ isOpen }) => (isOpen ? 1 : 0.27)});
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transition: 0.3s;
      width: 100%;
      height: 100%;
      content: "";
      position: absolute;
      background-color: #fff;
      transform-origin: top right;
    }
  }

  z-index: 998;
  display: flex;
  box-shadow: none;
  padding: 3.473em;
  user-select: none;
  flex-direction: column;

  @media (min-width: 701px) {
    top: 1.39em;
    right: 3.41em;
    width: 22.223em;
    font-size: 1.1em;
    position: absolute;
    transition: opacity 0.4s, box-shadow 0.4s;
  }

  ${({ isOpen }) =>
    isOpen
      ? `
   @media (min-width: 701px) {
    box-shadow: 0 10px 53px 0 rgb(163 204 170 / 30%);
    top: 1.39em;
    right: 3.41em;
    width: 22.223em;
    font-size: 1.1em;
    position: absolute;
    transition: opacity 0.4s, box-shadow 0.4s;
   }
  `
      : `
      @media (min-width: 701px) {
        opacity: 0;
    visibility: hidden;
    pointer-events: none;
      }
      `}
`;

export const NavList = styled.ul`
  @media (min-width: 701px) {
    line-height: 2.5;
    font-size: 1.15em;
    transition: opacity, transform 0.3s;
    margin: 1.2em 0;
    transition-delay: 200ms;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    transform: translateY(${({ isOpen }) => (isOpen ? 0 : 50)}px);
  }
`;

export const NavListItem = styled.li`
  color: ${({ theme }) => theme.colors.primary};
`;

export const NavListLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  outline: transparent;
`;

export const NavListExternalLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline: transparent;
`;

export const BasicContact = styled.div`
  @media (min-width: 701px) {
    margin-top: 0.8em;
  }

  font-size: 1em;
  line-height: 2.5;
  position: relative;
`;

export const SayHello = styled.span`
  color: #cbc9e2;
  letter-spacing: 0.25em;
  text-transform: uppercase;

  @media (min-width: 701px) {
    transition: opacity 0.2s 400ms;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    transform: translateY(0);
  }
`;

export const BasicContactList = styled.ul`
  @media (min-width: 701px) {
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    transform: translateY(${({ isOpen }) => (isOpen ? 0 : 40)}px);
    transition: opacity, transform 0.3s;
    margin: 0 0 2.78em;
    transition-delay: 400ms;
  }
  font-size: 1.15em;
`;
