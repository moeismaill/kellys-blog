import React from 'react';
import logo from './logo.png'

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property vallue called `fill`. `fill` is useful 
 * when you want to change your logo depending on the theme you are on. 
 */
export default function Logo({ fill }) {
  return (
     <svg  height="65px" width="192" xmlns="http://www.w3.org/2000/svg">
      {/* <text x="-50" y="20" fill={fill} fontSize="1.7rem">Words Unlimited</text> */} */}
      <image  href={logo} x="0" y="0" width="100" />
    </svg>
  );
}

