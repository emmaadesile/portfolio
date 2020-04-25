import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Logo from "../icons/logo";
import MenuIcon from "../icons/menuIcon";
import { Link } from "gatsby";
import { breakpoints, fontSizes, colors } from "../styles/theme";

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  margin: 0 auto;
  max-width: 1440px;
  position: relative;
`;

const NavLink = styled.div`
  width: 60px;
  height: 36px;
  display: grid;
  place-items: center;
  cursor: pointer;

  @media only screen and (max-width: ${breakpoints.xs}) {
    width: 35px;
    height: 19px;
  }
`;

const fadeIn = keyframes`
  0% {opacity: 0, transform: translateY(10px)};
  100% {opacity: 1, transform: translateY(0)};
`;

const NavItems = styled.div`
  display: grid;
  color: #fff;
  position: absolute;
  right: 5px;
  top: 100px;

  ul {
    list-style: none;
    display: grid;
    grid-gap: 15px;
    justify-items: end;

    li {
      /* opacity: 0; */
      transform: translateY(10px);
      animation: 0.5s ${fadeIn} ease-in 1s 1 normal;
      animation-fill-mode: forwards;
      font-size: ${fontSizes.xxl};

      a {
        color: ${colors.white};
      }
    }

    .menu-blog {
      animation-delay: 0.4s;
    }
    .menu-about {
      animation-delay: 0.6s;
    }
    .menu-works {
      animation-delay: 0.8s;
    }
    .menu-contact {
      animation-delay: 1s;
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
      {/* {isMenuClicked ? ( */}
        <NavItems>
          <ul>
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
      {/* ) : null} */}
    </Container>
  );
}

export default Navigation;
