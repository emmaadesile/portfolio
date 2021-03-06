import React from "react";
import { colors } from "../styles/theme";

const Logo = () => (
  <svg
    width="45"
    height="13"
    viewBox="0 0 45 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.094 2.974V.4H.774V13h13.32v-2.574H4.014V7.87h10.08V5.53H4.014V2.974h10.08zM26.922 13h3.582L23.988.4h-4.374L13.116 13h3.564l1.35-2.682h7.542L26.922 13zm-7.686-5.094l2.574-5.112 2.556 5.112h-5.13zM38.442.4h-9.144V13h9.144c3.258 0 6.12-2.016 6.12-6.3S41.7.4 38.442.4zm-1.224 9.882h-4.68V3.118h4.68c2.448 0 4.104.522 4.104 3.582 0 3.06-1.656 3.582-4.104 3.582z"
      fill={colors.primaryColor}
    />
  </svg>
);

export default Logo;
