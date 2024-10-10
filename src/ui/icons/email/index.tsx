import React from "react";
import { IconProps } from "../types";

export default function Email({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M18 0.827637H2C0.9 0.827637 0 1.72764 0 2.82764V14.8276C0 15.9276 0.9 16.8276 2 16.8276H18C19.1 16.8276 20 15.9276 20 14.8276V2.82764C20 1.72764 19.1 0.827637 18 0.827637ZM17.6 5.07764L11.06 9.16764C10.41 9.57764 9.59 9.57764 8.94 9.16764L2.4 5.07764C2.29973 5.02135 2.21192 4.9453 2.14189 4.85409C2.07186 4.76288 2.02106 4.65841 1.99258 4.54701C1.96409 4.4356 1.9585 4.31957 1.97616 4.20594C1.99381 4.09232 2.03434 3.98345 2.09528 3.88594C2.15623 3.78843 2.23632 3.70429 2.33073 3.63863C2.42513 3.57297 2.53187 3.52715 2.6445 3.50394C2.75712 3.48072 2.87328 3.4806 2.98595 3.50358C3.09863 3.52657 3.20546 3.57217 3.3 3.63764L10 7.82764L16.7 3.63764C16.7945 3.57217 16.9014 3.52657 17.014 3.50358C17.1267 3.4806 17.2429 3.48072 17.3555 3.50394C17.4681 3.52715 17.5749 3.57297 17.6693 3.63863C17.7637 3.70429 17.8438 3.78843 17.9047 3.88594C17.9657 3.98345 18.0062 4.09232 18.0238 4.20594C18.0415 4.31957 18.0359 4.4356 18.0074 4.54701C17.9789 4.65841 17.9281 4.76288 17.8581 4.85409C17.7881 4.9453 17.7003 5.02135 17.6 5.07764Z'
        fill={color}
      />
    </svg>
  );
}
