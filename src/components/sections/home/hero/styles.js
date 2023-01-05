import { Link } from "gatsby";
import styled from "styled-components";

export const HeroSection = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 4.17rem;
  background: ${({ theme }) => theme.colors.primary};

  @media (min-width: 581px) {
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary} 67%,
      ${({ theme }) => theme.colors.secondary} 33%
    );
  }

  @media (max-width: 580px) {
    margin-bottom: 10rem;
    padding-bottom: 0;
  }

  @media (max-width: 700px) {
    font-size: 0.95rem;
  }
`;

export const InnerContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 701px) {
    padding: 0 10rem;
  }

  @media (min-width: 701px) and (max-width: 1500px) {
    max-width: 1500px;
  }

  @media (min-width: 1501px) {
    max-width: 1760px;
  }
`;

export const InnerContentPrimary = styled(InnerContent)`
  & > svg {
    left: 0;
    display: none;
    height: 738px;
    position: absolute;
    margin-left: -6.2em;
    top: 11.12em;

    @media (min-width: 1024px) and (min-height: 800px) {
      height: 90vh;
    }

    @media (min-aspect-ratio: 1440 / 900) and (min-height: 738px) {
      display: block;
    }

    @media (max-width: 700px) {
      display: none;
    }
  }

  @media (min-width: 581px) {
    margin-top: calc(11.12em + 2em);
  }

  @media (max-width: 580px) {
    margin-top: calc(146px);
    padding: 0 15vw;
  }
`;

export const JobTitle = styled.article`
  text-align: left;
  position: relative;

  @media (min-width: 701px) {
    margin-top: -3.5em;
  }
`;

export const JobTitleContent = styled.div`
  position: relative;
`;

export const JobTitleText = styled.h1`
  transition: transform 0.5s, opacity 0.2s;
  margin: 0;
  font-size: 5em;
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 2em;
  margin: 0 0;

  @media (min-width: 701px) {
    max-width: 30vw;
    transition-delay: 200ms;
  }

  @media (min-width: 581px) {
    font-size: 5em;
  }

  @media (max-width: 580px) {
    font-size: 43px;
  }
`;

export const JobTitleSubText = styled.p`
  color: #fff;
  line-height: 1.6;

  @media (min-width: 701px) {
    width: 32vw;
  }

  @media (min-width: 701px) {
    max-width: 701px;
    font-size: 1.07em;
    transition-delay: 310ms;
  }

  @media (min-width: 581px) {
    font-size: 1.3em;
  }

  @media (max-width: 700px) {
    max-width: 20rem;
  }

  @media (max-width: 580px) {
    font-size: 17px;
  }
`;

export const ProfileImage = styled.figure`
  margin: 0;
  z-index: 1;
  width: 23.334em;
  height: 24.67em;
  position: relative;
  border: 0.115rem solid #fff;

  & > svg {
    top: -25%;
    width: 40em;
    z-index: -1;
    height: 126%;
    right: -5.4em;
    position: absolute;
  }

  @media (min-width: 701px) {
    margin-right: calc(6em + 4em);
  }

  @media (max-width: 701px) {
    display: none;
  }
`;

export const ImageContainer = styled.span`
  width: inherit;
  display: block;
  height: inherit;
  margin-top: -2.435em;
  background-color: #fff;
  background-size: cover;
  background-position-x: center;
  margin-left: -2.2em;
  background-image: url("https://v1.ponnle.xyz/static/media/image.3fb473d2.png");
  background-color: #ccc;
`;

export const InnerContentBottom = styled(InnerContent)`
  @media (min-width: 701px) {
    margin-top: auto;
    padding-right: 6em;
  }

  @media (max-width: 580px) {
    margin-top: 60px;
    margin-bottom: 35px;
    padding: 0 15vw;
  }
`;

export const Highlights = styled.ul`
  display: flex;
  line-height: 1.5;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.secondary};

  @media (min-width: 701px) {
    width: 41%;
    font-size: 1em;
  }
`;

export const Highlight = styled.li`
  width: calc(50% - 1.731em);

  @media (max-width: 700px) {
    font-size: 11px;
  }

  @media (max-width: 700px) {
    width: 45%;
  }
`;

export const Nav = styled.nav`
  z-index: 999;
  display: flex;
  position: fixed;
  margin-top: -35px;
  color: ${({ theme }) => theme.colors.primary};
  right: calc(6em + 1em);

  @media (max-width: 580px) {
    display: none;
  }
`;

export const NavItems = styled.ul`
  width: 0.5em;
  display: flex;
  flex-direction: column;
`;

export const NavItem = styled.li`
  width: 0.523em;
`;

export const NavItemButton = styled(Link)`
  width: 100%;
  display: flex;
  width: inherit;
  cursor: pointer;
  min-height: 2em;
  position: relative;
  color: currentColor;
  transition-delay: 100ms;
  outline-color: transparent;
  background-color: transparent;
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  padding: 0;
  border: none;

  &::after {
    content: "";
    width: 100%;
    height: 0.523em;
    position: absolute;
    background-color: currentColor;
    border: 1px solid currentColor;
    -webkit-transition: -webkit-transform 0.2s 100ms;
    -webkit-transition: transform 0.2s 100ms;
    transition: transform 0.2s 100ms;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  &[aria-current="true"]:after {
    transform: rotate(0) scale(2);
    background: transparent;
  }
`;

export const MobileAvatar = styled.div`
  width: 100%;
  display: flex;
  padding: 4rem 0;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.secondary};

  @media (min-width: 700px) {
    display: none;
  }
`;

export const MobileFigure = styled.div`
  margin-left: 19px;
  /* margin: 0; */
  z-index: 1;
  width: 198px;
  height: 209px;
  position: relative;
  border: 0.115rem solid ${({ theme }) => theme.colors.white};

  & > svg {
    top: -25%;
    width: 342px;
    z-index: -1;
    height: 126%;
    right: -47px;
    position: absolute;
  }
`;

export const MobileImageContainer = styled.span`
  width: inherit;
  display: block;
  height: inherit;
  margin-top: -20px;
  background-color: ${({ theme }) => theme.colors.white};
  background-size: cover;
  background-position-x: center;
  margin-left: -18px;
  background-image: url("https://v1.ponnle.xyz/static/media/image.3fb473d2.png");
  background-color: #ccc;
`;
