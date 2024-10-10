import React from "react";
import { IconProps } from "../types";

export default function EyeOpen({ color, size }: IconProps) {
  return (
    <svg 
     width={size}
     height={size} 
    viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">

    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00094 5.84342C7.53393 5.84342 6.34469 7.03267 6.34469 8.49967C6.34469 9.96668 7.53393 11.1559 9.00094 11.1559C10.4679 11.1559 11.6572 9.96668 11.6572 8.49967C11.6572 7.03267 10.4679 5.84342 9.00094 5.84342ZM7.40719 8.49967C7.40719 7.61947 8.12074 6.90592 9.00094 6.90592C9.88114 6.90592 10.5947 7.61947 10.5947 8.49967C10.5947 9.37988 9.88114 10.0934 9.00094 10.0934C8.12074 10.0934 7.40719 9.37988 7.40719 8.49967Z" fill="#697483"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00094 2.30176C7.48443 2.30176 6.11324 3.05188 5.00008 3.96331C3.88084 4.87971 2.96567 6.00538 2.35069 6.86202L2.29997 6.93255C1.92975 7.44697 1.625 7.87043 1.625 8.49967C1.625 9.12892 1.92975 9.55238 2.29997 10.0668L2.35069 10.1373C2.96567 10.994 3.88084 12.1196 5.00008 13.036C6.11324 13.9475 7.48443 14.6976 9.00094 14.6976C10.5175 14.6976 11.8886 13.9475 13.0018 13.036C14.121 12.1196 15.0362 10.994 15.6512 10.1373L15.7019 10.0668C16.0721 9.55238 16.3769 9.12892 16.3769 8.49967C16.3769 7.87043 16.0721 7.44698 15.7019 6.93255L15.6512 6.86202C15.0362 6.00538 14.121 4.87971 13.0018 3.96331C11.8886 3.05188 10.5175 2.30176 9.00094 2.30176ZM3.2138 7.48165C3.8012 6.66343 4.65424 5.61969 5.67319 4.7854C6.69822 3.94612 7.83518 3.36426 9.00094 3.36426C10.1667 3.36426 11.3037 3.94612 12.3287 4.7854C13.3476 5.61969 14.2007 6.66343 14.7881 7.48165C15.2301 8.0973 15.3144 8.24572 15.3144 8.49967C15.3144 8.75363 15.2301 8.90205 14.7881 9.5177C14.2007 10.3359 13.3476 11.3797 12.3287 12.214C11.3037 13.0532 10.1667 13.6351 9.00094 13.6351C7.83518 13.6351 6.69822 13.0532 5.67319 12.214C4.65424 11.3797 3.8012 10.3359 3.2138 9.5177C2.77183 8.90205 2.6875 8.75363 2.6875 8.49967C2.6875 8.24572 2.77183 8.0973 3.2138 7.48165Z" fill={color}/>
    </svg>
        

  );
}


