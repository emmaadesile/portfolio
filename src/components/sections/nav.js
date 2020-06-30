import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Logo from "../../icons/logo";
import MenuIcon from "../../icons/menuIcon";
import { Link } from "gatsby";
import { breakpoints, fontSizes, colors, transition } from "../../styles/theme";

const moveIn = keyframes`
  0% { 
    opacity: 0; 
    transform: translateY(-30px);
  }
  100% { 
    opacity: 1;
    transform: translateY(0);
    /* transform-origin: center bottom; */
  }
`;

const Container = styled.nav`
  max-width: ${breakpoints.xl};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 140px;
  margin: 0 auto;
  position: relative;
  padding: 0 1.5rem;

  animation: 800ms ${moveIn} cubic-bezier(0,.63,.32,1);
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

      li {
        transition: ${transition};

        &:hover {
          position: relative;
        }

        a {
          color: ${colors.white}
        };
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
          {/* <li className="menu-blog">
            <Link to="/">Blog</Link>
          </li> */}
          <li className="menu-about">
            <a href="#about">About</a>
          </li>
          <li className="menu-works">
            <a href="#works">Works</a>
          </li>
          <li className="menu-contact">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </NavItems>
    </Container>
  );
}

export default Navigation;
