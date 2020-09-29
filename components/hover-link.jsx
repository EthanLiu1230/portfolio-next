import styled from "styled-components"
import { Link } from "gatsby"

const HoverLink = styled(Link)`
    color: black;
    
    width: fit-content;
    height: fit-content;
    
    font-weight: 700;
    font-size: 18px;
    text-decoration: none;
    text-align: center;
    
    box-shadow: inset 0 -.5em 0 0 #ffe872;
    
    transition-property: box-shadow;
    transition-duration: .2s;
    
    :hover {
      box-shadow: inset 0 -22px 0 0 #ffe872;
      cursor: pointer;
    }
`

export default HoverLink