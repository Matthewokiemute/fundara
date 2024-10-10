import React from "react";
import { IconProps } from "../types";

export default function ChevronDown({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5327 10.528C17.8243 10.2338 17.8222 9.75889 17.528 9.46731C17.2338 9.17573 16.7589 9.17784 16.4673 9.47204L14.72 11.235C14.0109 11.9505 13.5228 12.4413 13.1093 12.7734C12.7076 13.096 12.4496 13.2067 12.2185 13.2361C12.0734 13.2546 11.9266 13.2546 11.7815 13.2361C11.5504 13.2067 11.2924 13.096 10.8907 12.7734C10.4772 12.4413 9.98914 11.9505 9.28 11.235L7.53269 9.47204C7.24111 9.17784 6.76624 9.17573 6.47204 9.46731C6.17784 9.75889 6.17573 10.2338 6.46731 10.528L8.24609 12.3227C8.91604 12.9987 9.46359 13.5511 9.95146 13.9429C10.4588 14.3504 10.9737 14.6453 11.5918 14.7241C11.8629 14.7586 12.1371 14.7586 12.4082 14.7241C13.0263 14.6453 13.5412 14.3504 14.0485 13.9429C14.5364 13.5511 15.084 12.9987 15.7539 12.3227L17.5327 10.528Z"
        fill={color}
      />
    </svg>
  );
}
