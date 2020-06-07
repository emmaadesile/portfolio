import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../icons/logo";
import MenuIcon from "../../icons/menuIcon";
import { Link } from "gatsby";
import { breakpoints, fontSizes, colors, transition } from "../../styles/theme";

const Container = styled.nav`
  max-width: ${breakpoints.xl};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 140px;
  margin: 0 auto;
  position: relative;
  padding: 0 1.5rem;
`;

const NavLink = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  cursor: pointer;
`;

const NavItems = styled.div`
  display: grid;
  color: #fff;
  position: absolute;
  right: 5px;
  top: 120px;

  @media (min-width: ${breakpoints.xxs}) {
    right: 2rem;
    top: 100px;
  }

  @media (min-width: ${breakpoints.xs}) {
    right: 1.8rem;
  }

  ul {
    list-style: none;
    display: grid;
    grid-gap: 15px;
    justify-items: end;
    opacity: 0;
    transform: translateY(30px);
    transition: ${transition};
    font-size: ${fontSizes.xl};

    @media only screen and (min-width: ${breakpoints.xxs}) {
      font-size: ${fontSizes.xs};
    }

    @media only screen and (min-width: ${breakpoints.xs}) {
      font-size: ${fontSizes.xs};
    }

    @media only screen and (min-width: ${breakpoints.sm}) {
      font-size: ${fontSizes.sm};
    }

    @media only screen and (min-width: ${breakpoints.md}) {
      font-size: ${fontSizes.lg};
    }


    &.open {
      opacity: 1;
      transform: translateY(10px);
    }

    /* &.open li::before {
      position: absolute;
      content: '';
      width: 20px;
      height: 5px;
      top: 20px;
      background: ${colors.primaryColor};
    } */

     li {
      position: relative;

      /* &::before {
        width: 0;
        height: 0;
        transition: ${transition};
      } */

      &:hover::before {
        position: absolute;
        content: '';
        width: 20px;
        height: 5px;
        top: 20px;
        right: 0;
        background: ${colors.primaryColor};
      }

      a {
        color: ${colors.white};
      }
    }
  }
`;

function Navigation() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleClick = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <Container>
      <NavLink>
        <Link to="/">
          <Logo />
        </Link>
      </NavLink>
      <NavLink style={{ padding: "0.3rem" }}>
        <MenuIcon isMenuClicked={isMenuClicked} handleClick={handleClick} />
      </NavLink>
      <NavItems>
        <ul className={isMenuClicked ? "open" : ""}>
          <li className="menu-blog">
            <Link to="/">Blog</Link>
          </li>
          <li className="menu-about">
            <Link to="/">About</Link>
          </li>
          <li className="menu-works">
            <Link to="/">Works</Link>
          </li>
          <li className="menu-contact">
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </NavItems>
    </Container>
  );
}

export default Navigation;