import React from 'react';
import logo from './logo.png'

import styled from "@emotion/styled";

import mediaqueries from "@styles/media";

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property vallue called `fill`. `fill` is useful 
 * when you want to change your logo depending on the theme you are on. 
 */
export default function Logo({ fill }) {
  return (
    <LogoContainer>
      <svg 
      className="Logo__Desktop"
      height="50px" 
      width="192" 
      xmlns="http://www.w3.org/2000/svg" >
        <image href={logo} x="10" y="5" width="50" height="50" />
      </svg>
      <svg
        width="25"
        height="30"
        viewBox="0 0 25 30"
        xmlns="http://www.w3.org/2000/svg"
        className="Logo__Mobile" >
        <image href={logo} width="25" height="30" />
      </svg>
    </LogoContainer>
  );
}

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }

  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }
    
    .Logo__Mobile{
      display: block;
    }
  `}
`;
