import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property vallue called `fill`. `fill` is useful 
 * when you want to change your logo depending on the theme you are on. 
 */
export default function Logo({ fill }) {
  return (
    <svg viewBox="0 0 20 20" height="30px" width="192" xmlns="http://www.w3.org/2000/svg">
      <text x="-50" y="20" fill={fill} fontSize="1.7rem">Unlimited Words</text>
    </svg>
  );
}