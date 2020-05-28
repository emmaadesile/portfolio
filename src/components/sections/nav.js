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

  @media only screen and (max-width: ${breakpoints.xs}) {
    padding: 0 15px;
  }
`;

const NavLink = styled.div`
  width: 60px;
  height: 36px;
  display: grid;
  place-items: center;
  cursor: pointer;

  @media only screen and (max-width: ${breakpoints.xs}) {
    /* width: 35px; */
  }
`;

const NavItems = styled.div`
  display: grid;
  color: #fff;
  position: absolute;
  right: 5px;
  top: 120px;

  @media only screen and (max-width: ${breakpoints.xs}) {
    right: 25px;
  }

  ul {
    list-style: none;
    display: grid;
    grid-gap: 15px;
    justify-items: end;
    opacity: 0;
    transform: translateY(30px);
    transition: ${transition};
    font-size: ${fontSizes.xxl};

    @media only screen and (max-width: ${breakpoints.sm}) {
      font-size: ${fontSizes.sm};
    }

    @media only screen and (max-width: ${breakpoints.md}) {
      font-size: ${fontSizes.md};
    }

    @media only screen and (max-width: ${breakpoints.xs}) {
      font-size: ${fontSizes.sm};
    }

    &.open {
      opacity: 1;
      transform: translateY(0);
    }

    &.open li {
      transform: translateY(0);
    }

    &.open li::before {
      height: 0;
      bottom: 0;
    }

    li {
      transform: translateY(20px);
      position: relative;

      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        background: ${colors.black};
        height: 30px;
        width: 140px;
        z-index: 100;
        transition: ${transition};
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
