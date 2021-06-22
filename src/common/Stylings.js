// slides from bottom to top
// quickly at first then slows
import {css} from "styled-components";

const UnstyledLink = css`
    &:link {
        color: inherit;
    }
    &:visited {
        color: inherit;
    }
    color: inherit;
    text-decoration: inherit;
    cursor: pointer;
`;


export {UnstyledLink}
