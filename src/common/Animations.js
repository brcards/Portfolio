// slides from bottom to top
// quickly at first then slows
import {css} from "styled-components";

const HoverUnderline = css`
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    padding-bottom: 0.2em;
    transition: background-size .3s;
    
    &:hover {
        background-size: 100% 2px;
    }
    &:focus {
        background-size: 100% 2px;
    }
`;

export {HoverUnderline}
