import React from "react";
import { IconProps } from "../types";

export default function Twitter({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.901 1.15283H22.581L14.541 10.3428L24 22.8458H16.594L10.794 15.2618L4.156 22.8458H0.474L9.074 13.0158L0 1.15383H7.594L12.837 8.08583L18.901 1.15283ZM17.61 20.6438H19.649L6.486 3.23983H4.298L17.61 20.6438Z"
        fill={color}
      />
    </svg>
  );
}
