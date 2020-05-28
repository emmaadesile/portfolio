import styled from "styled-components";
import React from "react";
import { colors } from "../styles/theme";

const Icon = styled.button`
  border: none;
  outline: none;
  background: transparent;

  .menu-icon {
    display: grid;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 40px;
    position: relative;
    cursor: pointer;

    & > span {
      width: 32px;
      height: 2px;
      justify-self: end;
      background: ${colors.white};
      display: block;
      transition: all 0.3s ease-in-out;
    }

    &:hover span:nth-child(1) {
      width: 20px;
    }

    &:hover span:nth-child(2) {
      width: 25px;
    }

    &.active span:nth-child(1) {
      transform-origin: center center;
      transform: rotate(-45deg) translate(-5px, 9px);
      width: 35px;
      background: ${colors.primaryColor};
    }

    &.active span:nth-child(2) {
      transform: translateX(10px);
      opacity: 0;
    }

    &.active span:nth-child(3) {
      transform-origin: center center;
      transform: rotate(45deg) translate(-5px, -10px);
      width: 35px;
      background: ${colors.primaryColor};
    }

    .line-1 {
      width: 25px;
      justify-self: end;
    }

    .line-2 {
      width: 20px;
      justify-self: end;
    }
  }
`;

function MenuIcon({ isMenuClicked, handleClick }) {
  return (
    <Icon tabIndex="0" onClick={handleClick} onKeyDown={() => null}>
      <div
        role="button"
        aria-label="menu icon"
        className={`menu-icon ${isMenuClicked && "active"}`}
      >
        <span className="line-1"></span>
        <span className="line-2"></span>
        <span className="line-3"></span>
      </div>
    </Icon>
  );
}

export default MenuIcon;
