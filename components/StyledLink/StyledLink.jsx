import styled from 'styled-components';
import React from 'react';

const StyledLink = styled.a`
    color: black;
    
    width: fit-content;
    height: fit-content;
    
    font-family: Mulish, sans-serif;
    font-weight: 700;
    font-size: 18px;
    text-decoration: none;
    text-align: center;
    
    box-shadow: inset 0 -.5em 0 0 ${({ theme }) => theme.colors.highlight};
    
    transition-property: box-shadow;
    transition-duration: .2s;
    
    :hover {
      box-shadow: inset 0 -22px 0 0 ${({ theme }) => theme.colors.highlight};
      cursor: pointer;
    }
`;

export default StyledLink;